import React from 'react'
import { withStyles } from '@material-ui/styles'

const styles = {
    main: {
        backgroundColor: "purple",
        border: "3px solid teal"
    },
    secondary: {
        backgroundColor: "pink"
    }
}

const MiniPalette = (props) => {
    const { classes } = props;
    console.log(classes);
    // withStyles maps a classes to props
    return (
        <div>
            Mini Palette
        </div>
    )
}

export default withStyles(styles)(MiniPalette)
