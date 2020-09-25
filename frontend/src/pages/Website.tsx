import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Paper, List, ListItem, Divider, CssBaseline, Container, Grid } from "@material-ui/core";

import { getOwnerWebsite, getOwnerLessons } from "./../api";
import StudentLesson from "./../components/StudentLesson";
import ErrorMessage from "../components/ErrorMessage";
import Spinner from "../components/Spinner/Spinner";
import Header from "../components/website/Header";
import MainImage from "../components/website/MainImage";
import Profile from "../components/website/Profile";

interface WebsiteInfo {
  id: number;
  owner_id: number;
  title: string;
  profile: string;
  theme: string;
  content: string;
}

interface Lesson {
  id: number;
  owner_id: number;
  start_time: number;
  end_time: number;
  meeting_id: string;
  price: number;
}

const ParticipantWeb: React.FC = () => {
  const [websiteInfo, setWebsiteInfo] = useState<WebsiteInfo[]>([]);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const path = useLocation().pathname;
  const owner_id: string = path.split("/")[2];

  const containerStyle = {
    textAlign: "center" as const,
    paddingTop: "100px",
  };

  useEffect(() => {
    const f = async () => {
      try {
        const ownerWebsiteInfo = await getOwnerWebsite(owner_id);
        setWebsiteInfo(ownerWebsiteInfo);
        const ownerLessons = await getOwnerLessons(owner_id);
        setLessons(ownerLessons);
        setIsLoading(false);
      } catch (err) {
        setErrorMessage(err.message);
        setIsLoading(false);
      }
    };
    f();
  }, []);

  const Site = () => {
    if (!isLoading && !errorMessage && !websiteInfo.length) {
      return <p>サイト情報が登録されていません</p>;
    } else if (!errorMessage) {
      return (
        <>
          <CssBaseline />
          <Container maxWidth="lg">
            <Header title={websiteInfo[0].title} />
            <MainImage
              // title={values.title}
              title={""}
              description={websiteInfo[0].content}
              image="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80"
              imageText="main image description"
            />
            <Divider />
            <Profile
              image={
                "https://images.unsplash.com/photo-1592592851366-4ec8bffdb30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3140&q=80"
              }
              imageText={"imageText"}
              name={"" /*TODO*/}
              text={websiteInfo[0].profile}
            />
            <Divider />
            <Paper elevation={0}>
              {lessons.length ? (
                <List>
                  {lessons.map((lesson, idx) => {
                    return (
                      <div key={lesson.id}>
                        {idx > 0 ? <Divider /> : null}
                        <ListItem>
                          <StudentLesson key={lesson.id} {...lesson} />
                        </ListItem>
                      </div>
                    );
                  })}
                </List>
              ) : (
                <p>まだレッスンは登録されていません</p>
              )}
            </Paper>
          </Container>
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <div style={containerStyle}>
      <ErrorMessage message={errorMessage} />
      {isLoading ? <Spinner /> : <Site />}
    </div>
  );
};

export default ParticipantWeb;
