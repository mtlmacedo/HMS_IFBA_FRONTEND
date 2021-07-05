import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import LoginTab from './Login';
import SignTab from './SignUp'
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function LoginSignUp() {
  const classes = useStyles();
  const [open, setOpen ] = React.useState(true);
  const [openSingup, setOpenSingup] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
    setOpenSingup(open);
  }; 

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
     <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <PersonIcon/>
        </ListItemIcon>
        <ListItemText primary="Login" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <LoginTab/>
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <PersonAddIcon/>
        </ListItemIcon>
        <ListItemText primary="Sing Up" />
        {openSingup ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openSingup} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <SignTab/>
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}