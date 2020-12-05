import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Pallete from './Palette'
import PaletteList from './PaletteList'
import { seedColors } from './seedColors'
import { generatePalette } from './colorHelpers'

class App extends Component {
  findPalette = (id) => {
    return seedColors.find((palette) => {
      return palette.id === id
    })
  }

  render() {
    return (
      <Switch>
        <Route  exact path="/" render={() => <PaletteList palettes={seedColors} />}/>
        <Route  
          exact 
          path="/palette/:id" 
          render={(routeProps) => (
            <Pallete palette={generatePalette(
              this.findPalette(routeProps.match.params.id)
            )}
          />
        )} 
        />
      </Switch>
      
      // <div>
      //   <Pallete palette={generatePalette(seedColors[4])} />
      // </div>
    )
  }
}

export default App;