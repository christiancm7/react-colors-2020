import React, { Component } from 'react'
import './Palette.css'
import ColorBox from './ColorBox'
import Navbar from './Navbar'

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
        const { colors } = this.props.palette;
        const { level, format } = this.state
        const colorBoxes = colors[level].map(color => {
            return <ColorBox background={color[format]} name={color.name}/> 
        })
        return (
            <div className="Palette">
                <Navbar 
                    changeLevel={this.changeLevel} 
                    level={level}
                    handleChange={this.changeFormat}
                />
                {/* Navbar goes here */}
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
                {/* Footer goes here */}
            </div>
        )
    }
}

export default Palette;