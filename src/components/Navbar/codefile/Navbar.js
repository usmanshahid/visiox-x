import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
  makeStyles,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { menuItems } from './menuItems-multidown';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
    display: 'flex',
    justifyContent: 'space-between',
    gap: '30px',
  },
  listItem: {
    flex: '1',
    '&:hover $submenu': {
      display: 'block',
      color: "black"
    },
  },
  submenu: {
    position: 'absolute',
    display: 'none',
    backgroundColor: 'white',
    color: 'black',
  },
}));

const Navbar = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setShowDrawer(open);
  };

  const handleMouseEnter = (submenu) => {
    setActiveSubmenu(submenu);
  };

  const handleMouseLeave = () => {
    setActiveSubmenu(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: 'black' }}>
        <Toolbar>
          {!isMobile ? (
            <List className={classes.list}>
              {menuItems.map((menu, index) => (
                <ListItem
                  key={index}
                  className={classes.listItem}
                  onMouseEnter={() => handleMouseEnter(menu.submenu)}
                  onMouseLeave={handleMouseLeave}
                >
                  <ListItemText primary={menu.title} />
                  {menu.submenu && activeSubmenu === menu.submenu && (
                    <div className={classes.submenu}>
                      {menu.submenu.map((sub, subIndex) => (
                        <ListItem key={subIndex} button>
                          <ListItemText primary={sub.title} />
                        </ListItem>
                      ))}
                    </div>
                  )}
                </ListItem>
              ))}
            </List>
          ) : (
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        anchor="left"
        open={showDrawer}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <div
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {menuItems.map((menu, index) => (
              <ListItem button key={index}>
                <ListItemText primary={menu.title} />
              </ListItem>
            ))}
          </List>
        </div>
      </SwipeableDrawer>
    </div>
  );
};

export default Navbar;
