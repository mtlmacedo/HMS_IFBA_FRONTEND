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

class SignTab extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.padding}>
                <div className={classes.margin}>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Face />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="username" label="Username" type="username" fullWidth autoFocus required />
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Fingerprint />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="username" label="Password" type="password" fullWidth required />
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Fingerprint />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="username" label="Retype Password" type="password" fullWidth required />
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Email />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="username" label="Email" type="email" fullWidth required />
                        </Grid>
                    </Grid>
                    <Grid container justify="center" style={{ marginTop: '10px' }}>
                        <Button variant="outlined" color="primary" onClick={() => alert('click')} style={{ textTransform: "none" }}>Sign In</Button>
                    </Grid>
                </div>
            </Paper>
        );
    }
}

export default withStyles(styles)(SignTab);