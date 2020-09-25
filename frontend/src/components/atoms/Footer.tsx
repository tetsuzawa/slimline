import React from "react";
const styles = {
  footer: {
    container: {
      display: "flex",
      flex: 1,
      height: "20vh",
      backgroundColor: "purple",
    },

    coloredContainer: {
      display: "flex",
      flex: 1,
      backgroundColor: "#34675C",
    },

    sentenceContainer: {
      display: "flex",
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontWeight: 300,
      color: "white",
    } as React.CSSProperties,

    link: {
      textDecoration: "none",
      marginBottom: 10,
      color: "white",
    },
  },
};
const Footer: React.FC = () => {
  return (
    <div style={styles.footer.container}>
      <div style={styles.footer.coloredContainer}>
        <div style={styles.footer.sentenceContainer}>
          <a href="https://stories.freepik.com/" style={styles.footer.link}>
            Illustration by Freepik Stories
          </a>
          <span>©︎ SlimLine All rights reserved.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
