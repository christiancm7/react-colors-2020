import React from 'react'
import { withStyles } from '@material-ui/styles'

const styles = {
    root: {
        backgroundColor: props => (props.color),
        width: "20%",
        height: "25%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.5px",
    }
}

 const DraggableColorBox = (props) => {
     const { color, classes } = props;
    return (
        <div className={classes.root}>
            {color}
        </div>
    )
}

export default withStyles(styles)(DraggableColorBox);
