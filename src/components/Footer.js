import React from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Toolbar, Button, ButtonGroup, Typography, Grid, Box } from '@material-ui/core';
import { FitnessCenter } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        color: "#fff",
        fontFamily: "Bebas Neue",
        fontSize: '1.4em'
    },
    title: {
        display:"inline",
        color: "#fff",
        fontFamily: "Bebas Neue",
    },
    footer: {
        backgroundColor: "#000",
    },
    icon: {
        display:"inline",
        color: "#fff",
    },
    centerButtons: {
        margin:"auto"
    },
    rightButtons: {
        marginLeft:"auto"
    }
}));

function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper className={classes.footer} square={true}>
                <Grid container>
                    <Grid item xs={4}>
                        <Button href={"/"}>
                            <FitnessCenter className={classes.icon}/>
                            <Typography variant={"h5"} className={classes.title} >
                                TRYACTIN
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid item xs={4}>

                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

export default Footer;