import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import './Palette.css'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import PaletteFooter from './PaletteFooter'

const styles = {
    palette: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
    },
    colors: {
        height: "90%",
    }
}

class Palette extends Component {
    state = {
        level: 500,
        format: 'hex'
    }
    changeLevel = (level) => {
        this.setState({
            level
        })
    }

    changeFormat = (val) => {
       this.setState({ format: val}) 
    }

    render() {
        const { classes } = this.props;
        const { colors, paletteName, emoji, id } = this.props.palette;
        const { level, format } = this.state
        const colorBoxes = colors[level].map(color => {
            return <ColorBox 
                        background={color[format]} 
                        name={color.name} 
                        key={color.id}
                        moreUrl={`/palette/${id}/${color.id}`}
                        showingFullPalette
                    /> 
        })
        return (
            <div className={classes.palette}>
                <Navbar 
                    changeLevel={this.changeLevel} 
                    level={level}
                    handleChange={this.changeFormat}
                    showingAllColors
                />
                <div className={classes.colors}>
                    {colorBoxes}
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        )
    }
}

export default withStyles(styles)(Palette);