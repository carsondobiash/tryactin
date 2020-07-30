import React from 'react';
import '../App.css';
import { withStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, Collapse, Checkbox, FormControlLabel } from '@material-ui/core';
import { ExpandMore, ExpandLess } from '@material-ui/icons';


const useStyles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    subtitle: {
        fontFamily: "Barlow Condensed",
        fontSize: "1.5em"
    },
    label: {
        fontFamily: "Barlow Condensed",
        fontSize: ".8em"
    }
});

class Filter extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }

    render(){
        const { classes } = this.props;
        return (
            <div>
                <ListItem button onClick={() => this.setState({open: !this.state.open})}>
                    <ListItemText classes={{primary: classes.subtitle}} primary={this.props.title}/>
                    {this.state.open ? <ExpandLess/> : <ExpandMore/>}
                </ListItem>
                <Collapse in={this.state.open} timeout={"auto"} unmountOnExit>
                    <List className={classes.subtitle}>

                        {this.props.filters.map((filter) => (
                            <ListItem key={filter}>
                                <FormControlLabel control={<Checkbox onChange={this.props.filter} name={this.props.title} value={filter} />} classes={{label: classes.label}} label={filter}/>
                            </ListItem>
                        ))}

                    </List>
                </Collapse>
            </div>
        );
    }
}

export default withStyles(useStyles)(Filter);
