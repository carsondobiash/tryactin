import React from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, ButtonGroup, Typography, Grid, Box } from '@material-ui/core';
import { FitnessCenter, AccountCircle, Search, ShoppingCart } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        color: "#fff",
        fontFamily: "Bebas Neue",
        fontSize: '1.4em',
        margin: "5px",
        borderRadius: "0px",
        border: "3px #000 solid",
        "&:hover": {
            borderBottom: "3px #ff7800 solid"
        }
    },
    title: {
        display:"inline",
        color: "#fff",
        fontFamily: "Bebas Neue",
    },
    nav: {
        backgroundColor: "#000",
    },
    titleIcon: {
        color: "#ff7800",
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

function NavBar() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="fixed" color="default" className={classes.nav}>
                <Toolbar>
                    <Grid container alignItems={"center"} justify={"flex-start"}>
                        <Grid item xs={4}>
                            <Button href={"/"}>
                                <FitnessCenter className={classes.titleIcon}/>
                                <Typography variant={"h4"} className={classes.title} >
                                    TRYACTIN
                                </Typography>
                            </Button>
                        </Grid>
                        <Grid container item xs={4} justify={"center"}>
                            <Button className={classes.menuButton} disableElevation href={"/men"}>Mens</Button>
                            <Button className={classes.menuButton} disableElevation href={"/women"}>Womens</Button>
                            <Button className={classes.menuButton} disableElevation>Gear</Button>
                        </Grid>
                        <Grid container item xs={4} justify={"flex-end"}>
                            <ButtonGroup>
                                <Button><Search className={classes.icon}/></Button>
                                <Button href={"/account"}><AccountCircle className={classes.icon}/></Button>
                                <Button href={"/cart"}><ShoppingCart className={classes.icon}/></Button>
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar;
