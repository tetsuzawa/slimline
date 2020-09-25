import React from "react";

const styles = {
  howto: {
    spSection: {
      display: "flex",
      flex: 1,
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "center",
      marginBottom: 30,
    } as React.CSSProperties,

    section: {
      display: "flex",
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
    } as React.CSSProperties,

    spRightContainer: {
      display: "flex",
      flex: 1,
      width: "100%",
      flexDirection: "column",
    } as React.CSSProperties,

    rightContainer: {
      display: "flex",
      flex: 1,
      width: "60%",
      flexDirection: "column",
    } as React.CSSProperties,

    spIcon: {
      width: "30%",
      height: "auto",
    },

    icon: {
      resizeMode: "contain",
      width: "10%",
      marginRight: 30,
    },

    subtitleContainer: {
      display: "flex",
      flex: 1,
    },

    spSubtitle: {
      display: "flex",
      flex: 1,
      fontSize: 20,
      fontWeight: 600,
    },

    subtitle: {
      display: "flex",
      flex: 1,
      fontSize: 30,
      fontWeight: 600,
    },

    image: {},

    spDescription: {
      display: "flex",
      flex: 2,
      flexDirection: "column",
      fontSize: 15,
    } as React.CSSProperties,

    description: {
      display: "flex",
      flex: 1,
      // flexDirection: "column",
      fontSize: 20,
    } as React.CSSProperties,
  },
};

type Props = {
  img: string;
  subtitle: string;
  description: any;
  smartphone: boolean;
};

const TopHowto: React.FC<Props> = (props) => {
  const { img, subtitle, description, smartphone } = props;
  return (
    <React.Fragment>
      {smartphone ? (
        <div style={styles.howto.spSection}>
          <img style={styles.howto.spIcon} src={img}></img>
          <div style={styles.howto.spRightContainer}>
            <div style={styles.howto.subtitleContainer}>
              <div style={styles.howto.image}></div>
              <div style={styles.howto.spSubtitle}>{subtitle}</div>
            </div>
            {subtitle === "0 Zoomに登録" ? (
              <div style={styles.howto.spDescription}>
                <span>
                  SlimLineは登録時にZoomのアカウントが必要です。サインアップは
                  <a href="https://zoom.us/signup">こちら</a>から（Zoomのページに遷移します）
                </span>
              </div>
            ) : (
              <div style={styles.howto.spDescription}>{description}</div>
            )}
          </div>
        </div>
      ) : (
        <div style={styles.howto.section}>
          <img style={styles.howto.icon} src={img}></img>
          <div style={styles.howto.rightContainer}>
            <div style={styles.howto.subtitleContainer}>
              <div style={styles.howto.image}></div>
              <div style={styles.howto.subtitle}>{subtitle}</div>
            </div>
            {subtitle === "0 Zoomに登録" ? (
              <div style={styles.howto.description}>
                <span>
                  SlimLineは登録時にZoomのアカウントが必要です。サインアップは
                  <a href="https://zoom.us/signup">こちら</a>から（Zoomのページに遷移します）
                </span>
              </div>
            ) : (
              <div style={styles.howto.description}>{description}</div>
            )}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default TopHowto;
