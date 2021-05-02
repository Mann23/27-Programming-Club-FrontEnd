// https://medium.com/@tsubasakondo_36683/create-responsive-drawer-menu-with-react-material-ui-617a42764b69

// https://medium.com/@habibmahbub/create-appbar-material-ui-responsive-like-bootstrap-1a65e8286d6f
// https://betterprogramming.pub/making-a-basic-header-responsive-with-materialui-and-react-2198fac923c8

// https://codesandbox.io/s/recursing-pascal-vr0un?file=/src/Header.jsx:1439-1491
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios"
import history from '../../history'

const headersData = [
  {
    label: "Create Blog",
    href: "/create-blog",
  },
  {
    label: "Blogs",
    href: "/",
  },
  {
    label: "Events",
    href: "/events",
  },
  {
    label: "Chat",
    href: "/chat",
  }
];

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "primary", //"#400CCC",
    paddingRight: "79px",
    paddingLeft: "118px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "secondary",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    flex:1,
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
  toolbarUncover: theme.mixins.toolbar,
}));

export default function Header() {
  const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
        axios
            .get("http://localhost:4000/core",
            {
                headers:{
                    "Authorization":"Bearer "+localStorage.getItem('accessToken')
                }
            })
            .then((res) => {
                
                res =res.data.map(member=> {
                 return { UserID:member.email.split("@")[0]}
                })
                const UserID=localStorage.getItem('UserID')

                console.log(res);
                console.log(UserID);
                for(let i=0;i<res.length;i++) {
                  if(UserID == res[i].UserID)
                  headersData.push({  label: "Add Event",href: "/create-event",})
                }
            })
            .catch((err) => {
                console.log(err);
            });



            const setResponsiveness = () => {
              return window.innerWidth < 900
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }));
            };
        
            setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);


  const logout = () => {
    localStorage.removeItem("UserId")
    history.push('/'); 
    window.location.reload(false)
  }


  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {Name}
        <div>{getMenuButtons()}<Button
          {...{
            color: "inherit",
            component: RouterLink,
            className: menuButton,
          }}
          onClick={logout}
        >
          {"LogOut"}
        </Button></div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}<MenuItem onClick={logout}>{"LogOut"}</MenuItem></div>
        </Drawer>

        <div>{Name}</div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    console.log(headersData)
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const Name = (
    <Typography variant="h6" component="h1" className={logo}>
      Programming Club
    </Typography>
  );

  const getMenuButtons = () => {
    console.log(headersData)
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: menuButton,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <header>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}
