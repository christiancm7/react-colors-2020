import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Palette from './Palette'
import PaletteList from './PaletteList'
import SingleColorPalette from './SingleColorPalette'
import NewPaletteForm from './NewPalletForm'
import { seedColors } from './seedColors'
import { generatePalette } from './colorHelpers'

class App extends Component {
  savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));

  state = {
    palettes: this.savedPalettes || seedColors
  }
  findPalette = (id) => {
    return this.state.palettes.find((palette) => {
      return palette.id === id
    })
  }

  savePalette = (newPalette) => {
    this.setState({ palettes: [...this.state.palettes, newPalette]}, 
        this.syncLocalStorage
      )
  }

  syncLocalStorage = ()  => {
    //Save palette to local storage
    window.localStorage.setItem(
        "palettes", JSON.stringify(this.state.palettes)
      )
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path='/palette/new'
          render={routeProps => (
            <NewPaletteForm
              savePalette={this.savePalette}
              palettes={this.state.palettes}
              {...routeProps}
            />
          )}
        />
        <Route
          exact
          path='/palette/:paletteId/:colorId'
          render={routeProps => (
            <SingleColorPalette
              colorId={routeProps.match.params.colorId}
              palette={generatePalette(
                this.findPalette(routeProps.match.params.paletteId)
              )}
            />
          )}
        />
        <Route
          exact
          path='/'
          render={routeProps => (
            <PaletteList palettes={this.state.palettes} {...routeProps} />
          )}
        />
        <Route
          exact
          path='/palette/:id'
          render={routeProps => (
            <Palette
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