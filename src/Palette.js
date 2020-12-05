import React, { Component } from 'react'
import './Palette.css'
import ColorBox from './ColorBox'
import Navbar from './Navbar'

class Palette extends Component {
    state = {
        level: 500
    }
    changeLevel = (level) => {
        this.setState({
            level
        })
    }

    render() {
        const { colors } = this.props.palette;
        const { level } = this.state
        const colorBoxes = this.props.palette.colors[level].map(color => {
            return <ColorBox background={color.hex} name={color.name}/> 
        })
        return (
            <div className="Palette">
                <Navbar changeLevel={this.changeLevel} level={level}/>
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