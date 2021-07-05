import React from 'react';
import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons'
const styles = theme => ({
    margin: {
        margin: theme.spacing.unit * 2,
    },
    padding: {
        padding: theme.spacing.unit
    }
});

const login = (username, password) => (dispatch) => {
    const requestInfo = {
        method: 'POST',
        body: JSON.stringify({username: username, password: password}),
        headers: {
            'Content-type': 'application/json',
        }
    };
  
    fetch("http://127.0.0.1:8000/login/", requestInfo)
    .then(function(res){ return res.json(); })
};   

class LoginTab extends React.Component {
    state = {
        username: '',
        password: '',
    };
    onSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state.username, this.state.password);
    };
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    render() {
        const { classes } = this.props;
        const { username, password } = this.state;
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
                    <Grid container alignItems="center" justify="space-between">
                        <Grid item>
                            <FormControlLabel control={
                                <Checkbox
                                    color="primary"
                                />
                            } label="Remember me" />
                        </Grid>
                        <Grid item>
                            <Button disableFocusRipple disableRipple style={{ textTransform: "none" }} variant="text" color="primary">Forgot password ?</Button>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" style={{ marginTop: '10px' }}>
                        <Button variant="outlined" color="primary" onClick={login(username, password)} style={{ textTransform: "none" }}>Login</Button>
                    </Grid>
                </div>
            </Paper>
        );
    }
}

export default withStyles(styles)(LoginTab);