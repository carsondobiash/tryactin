import React from 'react';
import '../App.css';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Button, Grid, GridList, GridListTile, List, ListItem, ListItemText, Collapse, Divider, Checkbox, Snackbar, SnackbarContent, IconButton } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { ExpandMore, ExpandLess, ShoppingCart, Close } from '@material-ui/icons';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Filter from "../components/Filter";
import StoreCard from "../components/StoreCard"
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
    snack: {
        background: "#fff",
        color: "#000",
        fontFamily: "Barlow Condensed",
        fontSize: "1.2em"
    },
    toolbar: theme.mixins.toolbar
});

const imagesList = [
        {
            id: 0,
            img1: menTile1,
            img2: menProduct1,
            title: "Titans Hoodie",
            cols: 1,
            size: "Small",
            color: "Black",
            price: "$50",
        },
        {
            id: 1,
            img1: menTile2,
            img2: menProduct2,
            title: "Nike Tanktop",
            cols: 1,
            size: "Medium",
            color: "Gray",
            price: "$10",
        },
        {
            id: 2,
            img1: menTile3,
            img2: menProduct3,
            title: "Athleta Tanktop",
            cols: 1,
            size: "Large",
            color: "White",
            price: "$15",
        },
        {
            id: 3,
            img1: menTile4,
            img2: menProduct4,
            title: "Underarmour Shirt",
            cols: 1,
            size: "Extra Large",
            color: "Brown",
            price: "$35",
        },
        {
            id: 4,
            img1: menTile4,
            img2: menProduct4,
            title: "Underarmour Shirt",
            cols: 1,
            size: "Extra Large",
            color: "Brown",
            price: "$35",
        },
        {
            id: 5,
            img1: menTile3,
            img2: menProduct3,
            title: "Athleta Tanktop",
            cols: 1,
            size: "Extra Large",
            color: "Brown",
            price: "$20",
        },
        {
            id: 6,
            img1: menTile2,
            img2: menProduct2,
            title: "Nike Tanktop",
            cols: 1,
            size: "Extra Large",
            color: "Brown",
            price: "$15",
        },
        {
            id: 7,
            img1: menTile1,
            img2: menProduct1,
            title: "Titans Hoodie",
            cols: 1,
            size: "Extra Large",
            color: "Brown",
            price: "$40",
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
                    <Grid container justify={"flex-start"}>
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

                        {/*<GridList cols={4} cellHeight={450} spacing={20}></GridList>*/}
                        <Grid container justify={"space-evenly"} xs>
                            {this.state.images.map((tile) => (
                                <StoreCard key={tile.id} img1={tile.img1} img2={tile.img2} title={tile.title} price={tile.price} handleClick={this.handleClick}/>






                                /*<GridListTile key={tile.img1} cols={tile.cols || 1} className={classes.tile}>
                                    <div className={classes.innerTile}>
                                        <div className={classes.images}>
                                            <a href={"/"}>
                                                <img className={classes.bottomImg} src={tile.img1} alt={tile.title} />
                                                <img className={classes.topImg} src={tile.img2} alt={tile.title} />
                                            </a>
                                            <Button onClick={this.handleClick} className={classes.cart}><ShoppingCart/></Button>
                                        </div>
                                        <div className={classes.contentDiv}>
                                                <Typography className={classes.content} variant={"h5"}>
                                                    {tile.title}
                                                </Typography>
                                                <Typography className={classes.content} variant={"h6"}>
                                                    {tile.price}
                                                </Typography>
                                        </div>
                                    </div>
                                </GridListTile>*/
                            ))}
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
