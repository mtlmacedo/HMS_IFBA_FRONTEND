import React, { Component } from 'react';
import { Redirect, NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/auth';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Box, Button, ButtonGroup } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';


export class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };
  
  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <div>        
        <strong>{user ? `Welcome ${user.username}` : ''}</strong>
        <ButtonGroup color="inherit" aria-label="outlined primary button group">
          <Button onClick={this.props.logout}>
            Logout
          </Button>
        </ButtonGroup>
      </div>
    );

    const guestLinks = (
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button color="inherit" component={Link} to="/login">Login</Button>
        <Button color="inherit" component={Link} to="/register">Register</Button>        
      </ButtonGroup>
    );
    return (
      <AppBar position="static">
      <Toolbar>
        <div >
          <Typography variant="h6" >
            Hotel IFBA
          </Typography>
        </div>        
        {isAuthenticated ? authLinks : guestLinks}
      </Toolbar>
    </AppBar>
          
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
