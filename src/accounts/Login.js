import React, {Component} from 'react';
import { Paper, Grid, TextField, Button  } from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions/auth';

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit * 2,
    },
    padding: {
        padding: theme.spacing.unit,
    }
});
export class LoginTab extends Component {
    state = {
      username: '',
      password: '',
    };
  
    static propTypes = {
      login: PropTypes.func.isRequired,
      isAuthenticated: PropTypes.bool,
    };
  
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.login(this.state.username, this.state.password);
    };
  
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  
    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />;
          }
        const { classes } = this.props;
        const { username, password } = this.state;
        return (
            <Paper elevation={4} >    
                <div alignItems="flex-end">            
                    <form onSubmit={this.handleSubmit}>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <Face />
                            </Grid>
                            <Grid item md={true} sm={true} xs={true}>
                                <TextField value={username} name="username" id="username" label="Username" type="username" onChange={this.onChange} fullWidth autoFocus required />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <Fingerprint />
                            </Grid>
                            <Grid item md={true} sm={true} xs={true}>
                                <TextField value={password} name="password" label="Password" type="password" onChange={this.onChange} fullWidth required />
                            </Grid>
                        </Grid>
                        <Grid container justify="center" style={{ marginTop: '10px' }}>
                            <Button variant="outlined" color="primary" type="submit" value="Submit" style={{ textTransform: "none" }}>Login</Button>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                Ainda não possui uma conta? <Link to="/register">Registrar-se</Link>
                            </Grid>
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

export default connect(mapStateToProps, { login })(LoginTab);
