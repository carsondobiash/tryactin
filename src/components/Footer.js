import React from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Button, Typography, Grid } from '@material-ui/core';
import { FitnessCenter,Facebook,Twitter,Instagram } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        display:"inline",
        color: "#fff",
        fontFamily: "Bebas Neue",
    },
    footer: {
        backgroundColor: "#000",
        padding:"5px 0px 10px 0px"
    },
    icon: {
        display:"inline",
        color: "#ff7800",
    },
    footerList: {
        color: "#ff7800",
        listStyleType: "none",
        fontFamily: "Barlow Condensed",
    },
    listTitle: {
        fontSize:"1.5em",
        fontFamily: "Bebas Neue",
        color:"#fff"
    },
    footerTitle: {
        color: "#ff7800",
        marginTop:"8px"
    },
    copyright: {
        color: "#ff7800",
        fontFamily: "Barlow Condensed",
    },
    social: {
        color: "#fff",
        fontFamily: "Barlow Condensed",
        margin: "auto",
        fontSize: "1em"
    },
    socialIcon: {
        color: "#ff7800"
    }
}));

function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper className={classes.footer} square={true}>
                <Grid justify={"flex-start"} container>
                    <Grid item xs={1}>

                    </Grid>
                    <Grid item xs={1}>
                        <Button href={"/"} className={classes.footerTitle}>
                            <FitnessCenter className={classes.icon}/>
                            <Typography variant={"h5"} className={classes.title} >
                                TRYACTIN
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid item xs={1}>
                        <ul className={classes.footerList}>
                            <li className={classes.listTitle}>Help</li>
                            <li>FAQ</li>
                            <li>Contact Support</li>
                        </ul>
                    </Grid>
                    <Grid item xs={7}>
                        <ul className={classes.footerList}>
                            <li className={classes.listTitle}>Account</li>
                            <li>Account Home</li>
                            <li>My Cart</li>
                            <li>Payment Info</li>
                        </ul>
                    </Grid>
                    <Grid item xs={1}>
                        <ul className={classes.footerList}>
                            <li><Button className={classes.social} href="https://www.facebook.com/"><Facebook className={classes.socialIcon}/> Facebook</Button></li>
                            <li><Button className={classes.social} href="https://www.twitter.com/"><Twitter className={classes.socialIcon}/> Twitter</Button></li>
                            <li><Button className={classes.social} href="https://www.instagram.com/"><Instagram className={classes.socialIcon}/> Instagram</Button></li>
                        </ul>
                    </Grid>
                </Grid>
                <div>
                    <Typography variant={"body1"} align={"center"} className={classes.copyright}> Ut enim ad minim veniam | TRYACTIN Copyright 2020</Typography>
                </div>
            </Paper>
        </div>
    );
}

export default Footer;
