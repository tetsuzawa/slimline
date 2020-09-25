package service

import (
	"log"

	"github.com/jmoiron/sqlx"
	"github.com/pkg/errors"

	"github.com/voyagegroup/treasure-2020-b/dbutil"
	"github.com/voyagegroup/treasure-2020-b/model"
	"github.com/voyagegroup/treasure-2020-b/repository"
	"github.com/voyagegroup/treasure-2020-b/zoom"
)

type Lesson struct {
	db         *sqlx.DB
	authClient *zoom.ZoomAuthClient
}

func NewLesson(db *sqlx.DB, authClient *zoom.ZoomAuthClient) *Lesson {
	return &Lesson{
		db:         db,
		authClient: authClient,
	}
}

func (l *Lesson) Create(firebaseUID string, lesson *model.Lesson) (int64, error) {
	var createdLessonId int64
	if err := dbutil.TXHandler(l.db, func(tx *sqlx.Tx) error {

		//TODO zoomのmeetingを作成してlesson.MeetingIDに代入する

		owner, err := repository.GetOwnerByFirebaseID(tx, firebaseUID)
		if err != nil {
			log.Println(err)
			return err
		}
		lesson.OwnerID = owner.ID

		zoomToken, err := repository.GetZoomTokenByOwnerID(l.db, owner.ID)
		if err != nil {
			log.Println(err)
			return err
		}

		zoomToken, err = l.authClient.OAuthRefreshToken(*zoomToken)
		if err != nil {
			log.Println(err)
			return err
		}
		log.Println(zoomToken)

		_, err = repository.CreateZoomToken(tx, zoomToken)
		if err != nil {
			log.Println(err)
			return err
		}

		zoomUserID, err := zoom.GetZoomUserID(zoomToken.AcccessToken)
		if err != nil {
			log.Println(err)
			return err
		}
		log.Println(zoomUserID)

		meetingID, err := l.authClient.CreateMeeting(zoomUserID, zoomToken.AcccessToken, lesson)
		if err != nil {
			log.Println(err)
			return err
		}

		lesson.MeetingID = meetingID

		result, err := repository.CreateLesson(tx, lesson)
		log.Println("insert lesson result:", result)
		if err != nil {
			return err
		}

		if err := tx.Commit(); err != nil {
			return err
		}

		id, err := result.LastInsertId()
		if err != nil {
			return err
		}
		lesson.ID = id
		createdLessonId = id

		return err
	}); err != nil {
		log.Println(err)
		return 0, errors.Wrap(err, "failed to insert lesson in the transaction")
	}
	return createdLessonId, nil
}
