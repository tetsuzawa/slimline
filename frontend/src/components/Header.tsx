import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemProps,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import HelpIcon from "@material-ui/icons/Help";

interface Props {
  user: firebase.User | null;
  logout: () => Promise<void>;
}

const useStyles = makeStyles({
  menuIconContainer: {
    marginLeft: 20,
    marginTop: 20,
    position: "absolute",
    backgroundColor: "white",
  },
  menuIcon: {
    fontSize: 45,
  },
  list: {
    width: 200,
  },
  fullList: {
    width: "auto",
  },
  header: {
    position: "fixed",
  },
});

type Anchor = "left";

const Header: React.FC<Props> = (props) => {
  const { user, logout } = props;
  const classes = useStyles();
  const [drawerState, setDrawerState] = useState(false);

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setDrawerState(open);
  };

  function ListItemLink(props: ListItemProps<"a", { button?: true }>) {
    return <ListItem button component="a" {...props} />;
  }

  const list = (anchor: Anchor) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {user === null && (
          <List>
            {["Top", "About", "How to use"].map((text, index) => (
              <ListItemLink
                href={index === 2 ? "#HowTo" : index === 1 ? "#About" : "/"}
                key={index}
              >
                <ListItemIcon>
                  {index === 0 && <HomeIcon />}
                  {index === 1 && <InfoIcon />}
                  {index === 2 && <HelpIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemLink>
            ))}
          </List>
        )}
        {user !== null && (
          <React.Fragment>
            <ListItem button component={Link} to="/dashboard">
              <ListItemText primary="SlimLine" />
            </ListItem>
            <ListItem button component={Link} to="/regist_owner">
              <ListItemText primary="講師登録" />
            </ListItem>
            <ListItem button component={Link} to="/regist_lesson">
              <ListItemText primary="レッスン登録" />
            </ListItem>
            <ListItem button onClick={logoutHandler}>
              <ListItemText primary="ログアウト" />
            </ListItem>
          </React.Fragment>
        )}
      </List>
    </div>
  );

  const logoutHandler = async () => {
    await logout();
    window.location.href = "/";
  };

  return (
    <div className={classes.header}>
      <React.Fragment>
        <Button onClick={toggleDrawer("left", true)} className={classes.menuIconContainer}>
          <MenuIcon className={classes.menuIcon} />
        </Button>
        <Drawer anchor={"left"} open={drawerState} onClose={toggleDrawer("left", false)}>
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default Header;
