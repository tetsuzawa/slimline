import React, { useState, useEffect } from "react";
import { Paper, List, ListItem, Divider } from "@material-ui/core";

import { getAllLesson, getOwnerMe } from "../api";
import useUser from "../hooks/useUser";
import Lesson from "./../components/Lesson";
import ErrorMessage from "../components/ErrorMessage";
import Spinner from "../components/Spinner/Spinner";

interface Lessons {
  id: number;
  owner_id: number;
  start_time: number;
  end_time: number;
  meeting_id: string;
  price: number;
}

const Dashboard = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [lessons, setLessons] = useState<Lessons[]>([]);
  const [webURL, setWebURL] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  const { user } = useUser();

  useEffect(() => {
    const f = async () => {
      if (user) {
        try {
          const token = await user.getIdToken();
          const lessons = await getAllLesson(token);
          setLessons(lessons);
          const owner = await getOwnerMe(token);
          setWebURL(location.href.split("/").slice(0, 3).join("/") + "/owner/" + owner.id + "/web");
          setIsLoading(false);
        } catch (err) {
          setErrorMessage(err.message);
          setIsLoading(false);
        }
      }
    };
    f();
  }, [user]);

  const paddingStyle = {
    paddingTop: "100px",
    paddingLeft: "50px",
  };

  const Lessons = () => {
    if (!isLoading && !errorMessage && !lessons.length) {
      return <p>まだ登録されていません</p>;
    } else if (!errorMessage) {
      return (
        <>
          <List>
            {lessons.map((lesson, idx) => {
              return (
                <div key={lesson.id}>
                  {idx > 0 ? <Divider /> : null}
                  <ListItem>
                    <Lesson {...lesson} />
                  </ListItem>
                </div>
              );
            })}
          </List>
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <div style={paddingStyle}>
      <h1>ダッシュボード</h1>
      <ErrorMessage message={errorMessage} />
      <h2>あなたのWebサイトのURL</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <a href={webURL} target="_blank" rel="noreferrer">
          {webURL}
        </a>
      )}
      <h2>登録したレッスン一覧</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <Paper>
          <Lessons />
        </Paper>
      )}
    </div>
  );
};

export default Dashboard;
