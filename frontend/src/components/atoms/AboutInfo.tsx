import React from "react";

const styles = {
  about: {
    elementContainer: {
      display: "flex",
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    } as React.CSSProperties,

    spContentsTitle: {
      display: "flex",
      flex: 1,
      width: "70%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly",
      fontSize: 30,
      fontWeight: 600,
    } as React.CSSProperties,

    contentsTitle: {
      display: "flex",
      flex: 1,
      width: "70%",
      marginBottom: 30,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly",
      fontSize: 30,
      fontWeight: 600,
    } as React.CSSProperties,

    information: {
      display: "flex",
      flex: 1,
      width: "80%",
    },

    icon: {
      resizeMode: "contain",
      width: "23%",
    },
  },
};

type Props = {
  img: string;
  subtitle: string;
  description: string;
  smartphone: boolean;
};

const AboutInfo: React.FC<Props> = (props) => {
  const { img, subtitle, description, smartphone } = props;
  return (
    <React.Fragment>
      {smartphone ? (
        <div style={styles.about.elementContainer}>
          <div style={styles.about.spContentsTitle}>
            <img style={styles.about.icon} src={img}></img>
            <p>{subtitle}</p>
          </div>
          <div style={styles.about.information}>{description}</div>
        </div>
      ) : (
        <div style={styles.about.elementContainer}>
          <div style={styles.about.contentsTitle}>
            <img style={styles.about.icon} src={img}></img>
            <p>{subtitle}</p>
          </div>
          <div style={styles.about.information}>{description}</div>
        </div>
      )}
    </React.Fragment>
  );
};

export default AboutInfo;
