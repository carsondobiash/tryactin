import React from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, CardMedia, Typography, Button, Grid, Container, Paper } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: "65px"
    },
    buttonLeft: {
        marginLeft: "auto",
    },
    jumbotron: {
        height:600
    },
    cardMedia: {
        height: 250
    },
    cardDiv: {
        marginBottom: "40px"
    },
    toolbar: theme.mixins.toolbar
}));

function ShopWomen (props) {
    const classes = useStyles();
    return (
        <div>
            <NavBar/>
            <div className={classes.toolbar}/>
            <Grid container justify={"space-evenly"}>
                <Grid item xs={12}>
                    <div className={classes.cardDiv}>
                        <Card square={true}>
                            <CardMedia
                                className={classes.jumbotron}
                                image={require("../images/workoutSplash.jpg")}
                                title={"Workout Splash"}
                            />
                        </Card>
                    </div>
                </Grid>
            </Grid>
            <Footer/>
        </div>
    );
}

export default ShopWomen;