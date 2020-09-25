import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import useUser from "./../hooks/useUser";
import MediaQuery from "react-responsive";
import AboutInfo from "../components/atoms/AboutInfo";
import TopHowto from "../components/atoms/TopHowto";
import Footer from "../components/atoms/Footer";
const logo = require("../images/logo.png");
const bg = require("../images/bg.png");
const spbg = require("../images/spBg.png");
const splogo = require("../images/spLogo.png");
const website = require("../images/website.png");
const reservation = require("../images/reservation.png");
const broadcast = require("../images/broadcast.png");
const payment = require("../images/payment.png");
const regist_zoom = require("../images/0-1regist_zoom.png");
const make_webpage = require("../images/2make_webpage.png");
const regist_lesson = require("../images/3regist_lesson.png");
const receive_mail = require("../images/4receive_mail.png");
const training = require("../images/5training.png");
const get_money = require("../images/6get_money.png");

const Home: React.FC = () => {
  const { user } = useUser();
  const history = useHistory();
  useEffect(() => {
    if (user === null) {
      return;
    }
    history.replace("/dashboard");
  }, [user]);

  const styles = {
    top: {
      container: {
        display: "flex",
        flexDirection: "row",
        height: "100vh",
      } as React.CSSProperties,

      spContainer: {
        display: "flex",
        height: "100vh",
        flexDirection: "column",
      } as React.CSSProperties,

      spTopContainer: {
        display: "flex",
        flex: 1.3,
      },

      spBottomContainer: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
      } as React.CSSProperties,

      spLogo: {
        width: "70%",
        height: "auto",
        marginTop: 10,
      },

      logo: {
        width: "90%",
        height: "auto",
      },

      titleContainer: {
        display: "flex",
        flex: 1,
        fontSize: "20px",
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "flex-end",
        flexDirection: "column",
      } as React.CSSProperties,

      spButtonContainer: {
        display: "flex",
        flex: 1,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingTop: 20,
      } as React.CSSProperties,

      buttonContainer: {
        display: "flex",
        flex: 1,
        width: "70%",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingTop: 40,
      } as React.CSSProperties,

      signUpButton: {
        display: "flex",
        backgroundColor: "#B3C100",
        width: "150px",
        height: "40px",
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
        color: "#fff",
      } as React.CSSProperties,

      loginButton: {
        display: "flex",
        backgroundColor: "#fff",
        width: "150px",
        border: "3px solid #34675C",
        boxSizing: "border-box",
        height: "40px",
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
        color: "black",
      } as React.CSSProperties,

      leftContainer: {
        display: "flex",
        flex: 1,
      },

      rightContainer: {
        display: "flex",
        flex: 1.618,
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        width: "300%",
        zIndex: 0,
        flexDirection: "column",
      } as React.CSSProperties,

      menuSection: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      } as React.CSSProperties,
    },
    about: {
      spContainer: {
        display: "flex",
        flexDirection: "column",
        height: "250vh",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 50,
        paddingBottom: "30vh",
      } as React.CSSProperties,

      container: {
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      } as React.CSSProperties,

      spTitleContainer: {
        display: "flex",
        flex: 1,
        fontSize: 40,
        fontWeight: 600,
        justifyContent: "center",
        alignItems: "flex-end",
      } as React.CSSProperties,

      titleContainer: {
        display: "flex",
        flex: 1,
        fontSize: 50,
        fontWeight: 600,
        justifyContent: "center",
        alignItems: "flex-end",
      } as React.CSSProperties,

      spDescription: {
        display: "flex",
        flex: 0.8,
        fontSize: 15,
        fontWeight: 600,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      } as React.CSSProperties,

      description: {
        display: "flex",
        flex: 0.8,
        fontSize: 30,
        fontWeight: 600,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      } as React.CSSProperties,

      spContents: {
        display: "flex",
        flex: 5,
        width: "80%",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
      } as React.CSSProperties,

      contents: {
        display: "flex",
        flex: 1.5,
        width: "80%",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",
      } as React.CSSProperties,
    },

    howto: {
      spContainer: {
        display: "flex",
        flexDirection: "column",
        height: "350vh",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "10vh",
      } as React.CSSProperties,

      container: {
        display: "flex",
        flexDirection: "column",
        height: "140vh",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "30vh",
      } as React.CSSProperties,

      title: {
        display: "flex",
        flex: 1,
        fontSize: 50,
        fontWeight: 600,
        justifyContent: "center",
        alignItems: "center",
      } as React.CSSProperties,

      sectionContainer: {
        display: "flex",
        flex: 5,
        width: "70%",
        flexDirection: "column",
        marginLeft: "5%",
      } as React.CSSProperties,

      spSectionContainer: {
        display: "flex",
        flex: 8,
        width: "90%",
        flexDirection: "column",
        marginLeft: "5%",
      } as React.CSSProperties,
    },
  };

  return (
    <React.Fragment>
      <MediaQuery query="(max-width: 767px)">
        <div id="Top" style={styles.top.spContainer}>
          <div style={styles.top.spTopContainer}>
            <img style={{ width: "100%", height: "auto" }} src={spbg}></img>
          </div>
          <div style={styles.top.spBottomContainer}>
            <img style={styles.top.spLogo} src={splogo}></img>
            <p style={{ fontSize: 14, paddingLeft: 15, fontWeight: 700 }}>
              あなたのレッスンを、気軽にオンラインで。
            </p>
            <div style={styles.top.spButtonContainer}>
              <Link style={styles.top.loginButton} to="/login">
                ログイン
              </Link>
              <Link style={styles.top.signUpButton} to="/signup">
                新規登録
              </Link>
            </div>
          </div>
        </div>
        <div id="About" style={styles.about.spContainer}>
          <div style={styles.about.spTitleContainer}>About SlimLine</div>
          <div style={styles.about.spDescription}>
            <span>あなたのパーソナルレッスンを</span>
            <span>オンラインでも始めましょう</span>
            <span>予約・配信準備・決済までを一括管理</span>
          </div>
          <div style={styles.about.spContents}>
            <AboutInfo
              img={website}
              subtitle={"Website"}
              description={
                "あなたのプロフィールをフォームに入力するだけで、簡単に自分だけのWebサイトを作成することができます。"
              }
              smartphone={true}
            />
            <AboutInfo
              img={reservation}
              subtitle={"Reservation"}
              description={
                "レッスン可能な日時を登録するだけで、予約フォームは自動生成されます。生徒から予約があった場合はメールにて通知されます。"
              }
              smartphone={true}
            />
            <AboutInfo
              img={broadcast}
              subtitle={"Broadcast"}
              description={
                "予約が成立すると、登録済のZoomアカウントでミーティングが作成されます。レッスンの時間がきたら、配信されたメールに記載されたURLからミーティングに参加します。"
              }
              smartphone={true}
            />
            <AboutInfo
              img={payment}
              subtitle={"Payment"}
              description={
                "レッスンの登録時に値段を設定するだけで、面倒なやりとりは一切なし。SlimLineを通してあなたの口座へ売り上げが振り込まれます。"
              }
              smartphone={true}
            />
          </div>
        </div>
        <div id="HowTo" style={styles.howto.spContainer}>
          <div style={styles.howto.title}>How to use</div>
          <div style={styles.howto.spSectionContainer}>
            <TopHowto
              img={regist_zoom}
              subtitle={"0 Zoomに登録"}
              description={`SlimLineは登録時にZoomのアカウントが必要です。サインアップは${(
                <a href="https://zoom.us/signup">こちら</a>
              )}から（Zoomのページに遷移します）`}
              smartphone={true}
            />
            <TopHowto
              img={regist_zoom}
              subtitle={"1 ユーザー情報の登録"}
              description={
                "Zoomに登録したら、講師登録画面からユーザー情報を入力し、アカウントを作成します。"
              }
              smartphone={true}
            />
            <TopHowto
              img={make_webpage}
              subtitle={"2 Webページの作成"}
              description={
                "ユーザー情報を登録したら、生徒が予約するWebページを作成します。必要な情報を入力するだけで、簡単にあなただけのWebページを作ることができます。"
              }
              smartphone={true}
            />
            <TopHowto
              img={regist_lesson}
              subtitle={"3 レッスンの日時を登録"}
              description={
                "あなたが希望するレッスンの日時を登録します。登録されたレッスンはWebページの予約可能レッスンに表示され、生徒はいつでも予約できるようになります。"
              }
              smartphone={true}
            />
            <TopHowto
              img={receive_mail}
              subtitle={"4 レッスン成立メールを受信"}
              description={
                "生徒がレッスンを予約すると、レッスン成立メールがあなたのメールアドレスへ送信されます。メールには自動作成されたZoomミーティングのURLが記載されています。"
              }
              smartphone={true}
            />

            <TopHowto
              img={training}
              subtitle={"5 レッスン"}
              description={
                "予約されたレッスンの時間に、受信したメールに記載されているZoomミーティングに参加します。レッスンを予約した生徒がミーティングに参加し、レッスンを開始します。"
              }
              smartphone={true}
            />
            <TopHowto
              img={get_money}
              subtitle={"6 料金受け取り"}
              description={
                "レッスン終了後、SlimLineからあなたの銀行口座へレッスンの料金を振り込みます。"
              }
              smartphone={true}
            />
          </div>
        </div>
        <Footer />
      </MediaQuery>
      <MediaQuery query="(min-width: 767px)">
        <div id="Top" style={styles.top.container}>
          <div style={styles.top.leftContainer}>
            <div style={styles.top.menuSection}>
              <div style={styles.top.titleContainer}>
                <img style={styles.top.logo} src={logo}></img>
                <p>あなたのレッスンを、気軽にオンラインで。</p>
              </div>
              <div style={styles.top.buttonContainer}>
                <Link style={styles.top.loginButton} to="/login">
                  ログイン
                </Link>
                <Link style={styles.top.signUpButton} to="/signup">
                  新規登録
                </Link>
              </div>
            </div>
          </div>
          <div style={styles.top.rightContainer}></div>
        </div>
        <div id="About" style={styles.about.container}>
          <div style={styles.about.titleContainer}>About SlimLine</div>
          <div style={styles.about.description}>
            <span>あなたのパーソナルレッスンをオンラインでも始めましょう</span>
            <span>予約・配信準備・決済までを一括管理</span>
          </div>
          <div style={styles.about.contents}>
            <AboutInfo
              img={website}
              subtitle={"Website"}
              description={
                "あなたのプロフィールをフォームに入力するだけで、簡単に自分だけのWebサイトを作成することができます。"
              }
              smartphone={false}
            />
            <AboutInfo
              img={reservation}
              subtitle={"Reservation"}
              description={
                "レッスン可能な日時を登録するだけで、予約フォームは自動生成されます。生徒から予約があった場合はメールにて通知されます。"
              }
              smartphone={false}
            />
            <AboutInfo
              img={broadcast}
              subtitle={"Broadcast"}
              description={
                "予約が成立すると、登録済のZoomアカウントでミーティングが作成されます。レッスンの時間がきたら、配信されたメールに記載されたURLからミーティングに参加します。"
              }
              smartphone={false}
            />
            <AboutInfo
              img={payment}
              subtitle={"Payment"}
              description={
                "レッスンの登録時に値段を設定するだけで、面倒なやりとりは一切なし。SlimLineを通してあなたの口座へ売り上げが振り込まれます。"
              }
              smartphone={false}
            />
          </div>
        </div>
        <div id="HowTo" style={styles.howto.container}>
          <div style={styles.howto.title}>How to use</div>
          <div style={styles.howto.sectionContainer}>
            <TopHowto
              img={regist_zoom}
              subtitle={"0 Zoomに登録"}
              description={""}
              smartphone={false}
            />
            <TopHowto
              img={regist_zoom}
              subtitle={"1 ユーザー情報の登録"}
              description={
                "Zoomに登録したら、講師登録画面からユーザー情報を入力し、アカウントを作成します。"
              }
              smartphone={false}
            />
            <TopHowto
              img={make_webpage}
              subtitle={"2 Webページの作成"}
              description={
                "ユーザー情報を登録したら、生徒が予約するWebページを作成します。必要な情報を入力するだけで、簡単にあなただけのWebページを作ることができます。"
              }
              smartphone={false}
            />
            <TopHowto
              img={regist_lesson}
              subtitle={"3 レッスンの日時を登録"}
              description={
                "あなたが希望するレッスンの日時を登録します。登録されたレッスンはWebページの予約可能レッスンに表示され、生徒はいつでも予約できるようになります。"
              }
              smartphone={false}
            />
            <TopHowto
              img={receive_mail}
              subtitle={"4 レッスン成立メールを受信"}
              description={
                "生徒がレッスンを予約すると、レッスン成立メールがあなたのメールアドレスへ送信されます。メールには自動作成されたZoomミーティングのURLが記載されています。"
              }
              smartphone={false}
            />
            <TopHowto
              img={training}
              subtitle={"5 レッスン"}
              description={
                "予約されたレッスンの時間に、受信したメールに記載されているZoomミーティングに参加します。レッスンを予約した生徒がミーティングに参加し、レッスンを開始します。"
              }
              smartphone={false}
            />
            <TopHowto
              img={get_money}
              subtitle={"6 料金受け取り"}
              description={
                "レッスン終了後、SlimLineからあなたの銀行口座へレッスンの料金を振り込みます。"
              }
              smartphone={false}
            />
          </div>
        </div>
        <Footer />
      </MediaQuery>
    </React.Fragment>
  );
};

export default Home;
