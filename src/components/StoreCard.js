import React from 'react';
import '../App.css';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Grid, Card, CardContent, CardMedia, Button } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';


const useStyles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    tile: {
        marginTop: "25px",
        height: "550px",
        width: "350px",
        "&:hover":{
            "& $cart": {
                opacity: 1
            },
            "& $topImg": {
                opacity: 1
            },
        }
    },
    bottomImg: {
        borderRadius: "5px 5px 0px 0px",
        position: "absolute",
    },
    topImg: {
        borderRadius: "5px 5px 0px 0px",
        opacity: 0,
        transition: "opacity .2s",
        position:"absolute",
    },
    contentDiv: {
        position: "relative",
        color: "#000",
        height: "50px",
        top: "71%"
    },
    content: {
        margin: "10px",
        fontFamily: "Bebas Neue",
    },
    cart: {
        opacity: 0,
        backgroundColor: "#fff",
        color: "#000",
        position: "relative",
        top: "25px",
        left: "80%",
        borderRadius: "25px",
        padding: "10px",
        transition: "opacity .2s",
        border: "1.5px solid black",
        "&:hover":{
            backgroundColor: "#E8E8E8",
        }
    },
});

class StoreCard extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }

    render(){
        const { classes } = this.props;
        return (
            <Grid item xs>
                <Card className={classes.tile} elevation={5}>
                    <CardMedia>
                        <a href={"/"}>
                            <img className={classes.bottomImg} src={this.props.img1} alt={this.props.title} />
                            <img className={classes.topImg} src={this.props.img2} alt={this.props.title} />
                        </a>
                        <Button onClick={this.props.handleClick} className={classes.cart}><ShoppingCart/></Button>
                    </CardMedia>
                    <CardContent className={classes.contentDiv}>
                        <Typography className={classes.content} variant={"h5"}>
                            {this.props.title}
                        </Typography>
                        <Typography className={classes.content} variant={"h6"}>
                            {this.props.price}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        );
    }
}

export default withStyles(useStyles)(StoreCard);
