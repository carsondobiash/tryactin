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
        height:800
    },
    cardMedia: {
        height: 350
    },
    cardDiv: {
        marginBottom: "40px"
    },
    cardText: {
        fontFamily: "Bebas Neue"
    },
    subtext: {
        fontFamily: "Oswald",
        fontSize: '1em'
    },
    toolbar: theme.mixins.toolbar
}));

function Home (props) {
    const classes = useStyles();
    return (
        <div>
            <NavBar/>
            <div className={classes.toolbar}/>
            <div className={classes.cardDiv}>
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
                    <Grid item xs={5}>
                        <Card>
                            <CardMedia
                                className={classes.cardMedia}
                                image={require("../images/workoutSplash.jpg")}
                                title={"Shop Men"}
                            />
                            <CardContent>
                                <Typography className={classes.cardText} variant={"h4"}>
                                    SHOP MEN
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button className={classes.subtext} href={"/men"}>Find out more <ChevronRightIcon/></Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={5}>
                        <Card>
                            <CardMedia
                                className={classes.cardMedia}
                                image={require("../images/workoutSplash.jpg")}
                                title={"Shop Women"}
                            />
                            <CardContent>
                                <Typography className={classes.cardText} align={"right"} variant={"h4"}>
                                    SHOP WOMEN
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button className={classes.buttonLeft + " " + classes.subtext} href={"/women"}><ChevronLeftIcon/>Find out more</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;