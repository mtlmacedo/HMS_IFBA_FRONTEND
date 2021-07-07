import React, {Component} from 'react';
import { Paper, withStyles, Grid, TextField, Button } from '@material-ui/core';
import { Email, Face, Fingerprint } from '@material-ui/icons'

import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../actions/auth';
import { createMessage } from '../actions/messages';


export class Register extends Component {
    state = {
      username: '',
      email: '',
      password: '',
      password2: '',
    };
  
    static propTypes = {
      register: PropTypes.func.isRequired,
      isAuthenticated: PropTypes.bool,
    };
  
    handleSubmit = (e) => {
      e.preventDefault();
      const { username, email, password, password2 } = this.state;
      if (password !== password2) {
        this.props.createMessage({ passwordNotMatch: 'Passwords do not match' });
      } else {
        const newUser = {
          username,
          password,
          password2,
          email,
        };
        this.props.register(newUser);
      }
    };
  
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  
    render() {
      if (this.props.isAuthenticated) {
        
      }
      const { username, email, password, password2 } = this.state;
        return (
            <Paper>
                <div>
                <form onSubmit={this.handleSubmit}>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Face />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                        <TextField value={username} name="username" id="username" label="Username" type="username" onChange={this.onChange} fullWidth autoFocus required />
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Fingerprint />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                        <TextField value={password} name="password" label="Password" type="password" onChange={this.onChange} fullWidth required />
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Fingerprint />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                        <TextField value={password2} name="password2" label="Password2" type="password" onChange={this.onChange} fullWidth required />
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Email />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                        <TextField value={email} name="email" label="Email" type="email" onChange={this.onChange} fullWidth required />
                        </Grid>
                    </Grid>
                    <Grid container justify="center" style={{ marginTop: '10px' }}>
                        <Button variant="outlined" color="primary" type="submit" value="Submit" style={{ textTransform: "none" }}>Sign In</Button>
                    </Grid>
                    </form>
                </div>
            </Paper>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
  });
  
export default connect(mapStateToProps, { register, createMessage })(Register);
  