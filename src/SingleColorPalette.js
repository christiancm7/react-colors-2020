import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import PaletteFooter from './PaletteFooter'
import { withStyles } from '@material-ui/styles'
import { styles } from './styles/PaletteStyles'
import ColorBox from './ColorBox'

class SingleColorPalette extends Component {
    constructor(props){
        super(props)
        this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    }
    state = { format: "hex" }

    gatherShades = (palette, colorToFilterBy) => {
        let shades = []
        let allColors = palette.colors;

        for(let key in allColors){
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            )
        }
        // return all shades of a given color and remove the 50 value 
        return shades.slice(1)
    }

    changeFormat = (val) => {
        this.setState({ format: val}) 
     }

    render() {
        const { classes } = this.props;
        const { format } = this.state;
        const { paletteName, emoji, id } = this.props.palette;
        const colorBoxes = this._shades.map(color => {
            return <ColorBox 
                key={color.name} 
                name={color.name} 
                background={color[format]} 
                showingFullPalette={false} 
            />
        })
        return (
            <div className={classes.palette}>
                <Navbar handleChange={this.changeFormat} showingAllColors={false}/>
                <div className={classes.colors}>
                    {colorBoxes}
                    <div className={classes.goBack}>
                        <Link to={`/palette/${id}`}>Go Back</Link>
                    </div>
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji}/>
            </div>
        )
    }
}
export default withStyles(styles)(SingleColorPalette)
