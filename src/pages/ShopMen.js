import React from 'react';
import '../App.css';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Button, Grid, GridList, GridListTile, List, ListItem, ListItemText, Collapse, Divider, Checkbox, Snackbar, SnackbarContent, IconButton } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { ExpandMore, ExpandLess, ShoppingCart, Close } from '@material-ui/icons';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Filter from "../components/Filter"
import menProduct1 from '../images/menProduct1.jpg';
import menProduct2 from '../images/menProduct2.jpg';
import menProduct3 from '../images/menProduct3.jpg';
import menProduct4 from '../images/menProduct4.jpg';
import menTile1 from '../images/menTile1.jpg';
import menTile2 from '../images/menTile2.jpg';
import menTile3 from '../images/menTile3.jpg';
import menTile4 from '../images/menTile4.jpg';


const useStyles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    filters: {
        margin: "0px 20px 20px 20px"
    },
    store: {
        margin: "20px",
    },
    title: {
        marginBottom: "10px",
        fontFamily: "Bebas Neue",
        // border: "#000 5px solid",
        // backgroundColor: "#ff7800"
    },
    subtitle: {
        fontFamily: "Barlow Condensed",
        // border: "#000 5px solid",
        // backgroundColor: "#ff7800"
    },
    cart: {
        opacity: 0,
        backgroundColor: "#fff",
        color: "#000",
        position: "absolute",
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
    tile: {
        position: "relative",
        "&:hover":{
            "& $cart": {
                opacity: 1
            },
            "& $top": {
                opacity: 1
            },
        }
    },
    bottom: {
        position: "absolute",
    },
    top: {
        opacity: 0,
        transition: "opacity .2s",
        position:"absolute",
    },
    snack: {
        background: "#000",
        color: "#fff",
    },
    toolbar: theme.mixins.toolbar
});

const imagesList = [
        {
            id: 0,
            img1: menTile1,
            img2: menProduct1,
            title1: "Tile 1 image",
            title2: "Tile 1 product",
            cols: 1,
            size: "Small",
            color: "Black",
            price: "$50-$75",
        },
        {
            id: 1,
            img1: menTile2,
            img2: menProduct2,
            title1: "Tile 2 image",
            title2: "Tile 2 product",
            cols: 1,
            size: "Medium",
            color: "Gray",
            price: "$0-$25",
        },
        {
            id: 2,
            img1: menTile3,
            img2: menProduct3,
            title1: "Tile 3 image",
            title2: "Tile 3 product",
            cols: 1,
            size: "Large",
            color: "White",
            price: "$0-$25",
        },
        {
            id: 3,
            img1: menTile4,
            img2: menProduct4,
            title1: "Tile 4 image",
            title2: "Tile 4 product",
            cols: 1,
            size: "Extra Large",
            color: "Brown",
            price: "$25-$50",
        },
];

class ShopMen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            images: imagesList,
            filters: [],
            open: false
        }
        this.filter = this.filter.bind(this)
    }

    filter(e){
        /*if(e.target.checked){
            let category = e.target.name.toLowerCase()
            let filter =  e.target.value

            let filterList = this.state.filters.concat({category, filter})
            this.setState({filters: filterList})

            console.log(this.state.filters)

            // var filtered = images.filter(image => image[category] === filter)
            // console.log(filtered)
            //
            // this.setState({images: this.state.filteredImages.concat(filtered)})

        } else if(!e.target.checked) {
            console.log("unchecked " + e.target.value + " from " + e.target.name)
        }*/
    }

    handleClick = () => {
        this.setState({open: true})
    }

    handleClose = (e, reason) => {
        if(reason === 'clickaway') {
            return;
        }

        this.setState({open: false})
    }





    render(){
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <NavBar/>
                <div className={classes.toolbar}/>
                <div className={classes.store}>
                    <div>
                        <Typography className={classes.title} align={"center"} variant={"h1"}>Men</Typography>
                    </div>
                    <Grid container justify={"center"}>
                        <Grid item xs={2}>
                            <div className={classes.filters}>
                                <Typography className={classes.subtitle} variant="h4">
                                    Filters
                                </Typography>
                                <Divider/>
                                <List>
                                    <Filter filter={this.filter} title={"Size"} filters={["Small", "Medium", "Large", "Extra Large"]}/>
                                    <Divider/>
                                    <Filter filter={this.filter} title={"Color"} filters={["Dark Blue", "Black", "Gray", "Dark Gray"]}/>
                                    <Divider/>
                                    <Filter filter={this.filter} title={"Price"} filters={["$0-$25", "$25-$50", "$50-$75", "$75-$100"]}/>
                                </List>
                            </div>
                        </Grid>


                        <Grid item xs>
                            <GridList cols={4} cellHeight={450} spacing={20}>
                            {this.state.images.map((tile) => (
                                <GridListTile key={tile.img1} cols={tile.cols || 1} className={classes.tile}>
                                    <div className={classes.tile}>
                                        <img className={classes.bottom} src={tile.img1} alt={tile.title1} />
                                        <img className={classes.top} src={tile.img2} alt={tile.title2} />
                                        <Button onClick={this.handleClick} className={classes.cart}><ShoppingCart/></Button>
                                    </div>
                                </GridListTile>
                            ))}
                            </GridList>
                        </Grid>
                    </Grid>
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left'
                        }}
                        open={this.state.open}
                        autoHideDuration={6000}
                        onClose={this.handleClose}
                        >
                        <SnackbarContent
                            className={classes.snack}
                            message="Added to cart!"
                            action={
                              <React.Fragment>
                                <IconButton size="small" aria-label="close" color="inherit" onClick={this.handleClose}>
                                  <Close fontSize="small" />
                                </IconButton>
                              </React.Fragment>
                            }
                            />
                    </Snackbar>
                </div>
                <Footer/>
            </div>
        );
    }

}

export default withStyles(useStyles)(ShopMen);
