import React from 'react';
import { Paper, withStyles, Grid, TextField, Button } from '@material-ui/core';
import { Email, Face, Fingerprint } from '@material-ui/icons'
const styles = theme => ({
    margin: {
        margin: theme.spacing.unit * 2,
    },
    padding: {
        padding: theme.spacing.unit
    }
});

const singup = (username, password, password2, email) => (dispatch) => {
    const requestInfo = {
        method: 'POST',
        body: JSON.stringify({username: username, password: password, password2: password2, email: email}),
        headers: {
            'Content-type': 'application/json',
        }
    };
  
    fetch("http://127.0.0.1:8000/register/", requestInfo)
    .then(function(res){ return res.json(); })
};   


class SignTab extends React.Component {
    state = {
        username: '',
        password: '',
        password2: '',
        email: '',
    };
    onSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state.username, this.state.password, this.state.password2, this.state.email);
    };
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    render() {
        const { classes } = this.props;
        const { username, password, password2, email } = this.state;
        return (
            <Paper className={classes.padding}>
                <div className={classes.margin}>
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
                        <TextField value={password2} name="password2" label="Password2" type="password2" onChange={this.onChange} fullWidth required />
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
                        <Button variant="outlined" color="primary" onClick={singup(username, password, password2, email)} style={{ textTransform: "none" }}>Sign In</Button>
                    </Grid>
                </div>
            </Paper>
        );
    }
}

export default withStyles(styles)(SignTab);