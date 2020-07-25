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
    jumbotron: {
        height:800
    },
    cardMedia: {
        height: 400
    },
    cardDiv: {
        marginBottom: "40px"
    },
    cardText: {
        fontFamily: "Bebas Neue",
        color: "#fff"
    },
    subtext: {
        fontFamily: "Barlow Condensed",
        color: "#000",
        margin: "-10px 0px 10px 8px",
        fontSize: '1em',
        backgroundColor: "#ff7800",
        "&:hover": {
            backgroundColor: "#ffa500"
        }
    },
    spacer: {
        margin: "40px",
    },
    card: {
        border: "solid 1px gray",
        backgroundColor: "#000",
    },
    cardOverlay: {
        position: "relative"
    },
    overlay: {
        position: "absolute",
        bottom: "50px",
        left: "105px",
        color: "#fff",
        padding: "20px",
        fontSize: "1.5em",
        width: "350px",
        borderRadius: "10px",
        backgroundColor: "#000"
    },
    jumboButton: {
        marginTop: "10px",
        backgroundColor: "#ff7800",
        fontSize: ".7em",
        fontFamily: "Barlow Condensed",
        "&:hover": {
            backgroundColor: "#ffa500"
        }
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
                            <Card square={true} className={classes.cardOverlay}>
                                <CardMedia
                                    className={classes.jumbotron}
                                    image={require("../images/workoutSplash.jpg")}
                                    title={"Workout Splash"}
                                />
                                <div className={classes.overlay}>
                                    <Typography variant={"h3"} className={classes.cardText}>
                                        Lorem ipsum
                                    </Typography>
                                    <Typography variant={"subtitle1"} className={classes.cardText}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    </Typography>
                                    <Button className={classes.jumboButton}>Find out more <ChevronRightIcon/></Button>
                                </div>
                            </Card>
                        </div>
                </Grid>
                    <Grid item xs={5}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image={require("../images/ShopMen.jpg")}
                                title={"Shop Men"}
                            />
                            <CardContent>
                                <Typography className={classes.cardText} variant={"h4"}>
                                    SHOP MEN
                                </Typography>
                                <Typography className={classes.cardText} variant={"subtitle1"}>
                                    Lorem ipsum dolor sit amet
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button className={classes.subtext} href={"/men"}>Shop Now <ChevronRightIcon/></Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={5}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image={require("../images/ShopWomen.jpg")}
                                title={"Shop Women"}
                            />
                            <CardContent>
                                <Typography className={classes.cardText} variant={"h4"}>
                                    SHOP WOMEN
                                </Typography>
                                <Typography className={classes.cardText} variant={"subtitle1"}>
                                    Lorem ipsum dolor sit amet
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button className={classes.subtext} href={"/women"}>Shop Now <ChevronRightIcon/></Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    {/********************
                           NEXT ROW
                    **********************/}
                    {/*<Grid item xs={12}>
                        <div className={classes.spacer}/>
                    </Grid>
                    <Grid item xs={3}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image={require("../images/ShopWomen.jpg")}
                                title={"Shop Women"}
                            />
                            <CardContent>
                                <Typography className={classes.cardText} variant={"h4"}>
                                    SOMETHING
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button className={classes.subtext} href={"/women"}>Find out more <ChevronRightIcon/></Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image={require("../images/ShopWomen.jpg")}
                                title={"Shop Women"}
                            />
                            <CardContent>
                                <Typography className={classes.cardText} variant={"h4"}>
                                    SOMETHING MORE
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button className={classes.subtext} href={"/women"}>Find out more <ChevronRightIcon/></Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image={require("../images/ShopWomen.jpg")}
                                title={"Shop Women"}
                            />
                            <CardContent>
                                <Typography className={classes.cardText} variant={"h4"}>
                                    UHHHH
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button className={classes.subtext} href={"/women"}>Find out more <ChevronRightIcon/></Button>
                            </CardActions>
                        </Card>
                    </Grid>*/}
                </Grid>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;
