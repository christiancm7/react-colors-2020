import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import { styles } from './styles/PaletteStyles'
import PaletteFooter from './PaletteFooter'

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