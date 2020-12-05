import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Pallete from './Palette'
import seedColors from './seedColors'
import { generatePalette } from './colorHelpers'

class App extends Component {
  findPalette = (id) => {
    return seedColors.find((palette) => {
      return palette.id === id
    })
  }

  render() {
    console.log(generatePalette(seedColors[4]));
    return (
      <Switch>
        <Route  exact path="/" render={() => <h1>palette list goes here</h1>}/>
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