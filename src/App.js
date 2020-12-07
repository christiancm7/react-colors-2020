import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Pallete from './Palette'
import PaletteList from './PaletteList'
import SingleColorPalette from './SingleColorPalette'
import NewPaletteForm from './NewPalletForm'
import { seedColors } from './seedColors'
import { generatePalette } from './colorHelpers'

class App extends Component {
  state = {
    palettes: seedColors
  }
  findPalette = (id) => {
    return this.state.palettes.find((palette) => {
      return palette.id === id
    })
  }

  savePalette = (newPalette) => {
    this.setState({ palettes: [...this.state.palettes, newPalette]})
  }

  render() {
    return (
      <Switch>
        <Route 
          exact 
          path="/palette/new"
          render={(routeProps) => <NewPaletteForm savePalette={this.savePalette} {...routeProps} />} 
        />
        <Route 
          exact 
          path="/palette/:paletteId/:colorId" 
          render={(routeProps) => (
            <SingleColorPalette
              colorId={routeProps.match.params.colorId} 
              palette={generatePalette(
              this.findPalette(routeProps.match.params.paletteId)
            )}
          />
        )}
          />
        )} 
        />
        <Route  
          exact 
          path="/" 
          render={(routeProps) => <PaletteList palettes={this.state.palettes} {...routeProps} />}
        />
        <Route  
          exact 
          path="/palette/:id" 
          render={(routeProps) => (
            <Pallete 
              palette={generatePalette(
              this.findPalette(routeProps.match.params.id)
            )}
          />
        )} 
        />
      </Switch>
    )
  }
}

export default App;