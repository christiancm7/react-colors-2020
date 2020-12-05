import React, { Component } from 'react'
import Pallete from './Palette'
import seedColors from './seedColors'
import { generatePalette } from './colorHelpers'

class App extends Component {
  render() {
    console.log(generatePalette(seedColors[4]));
    return (
      <Switch>
        <Route  exact path="/" render={() => <h1>palette list goes here</h1>}/>
        <Route  exact path="/palette/:id" render={() => <h1>individual palette</h1>} />
      </Switch>
      
      // <div>
      //   <Pallete palette={generatePalette(seedColors[4])} />
      // </div>
    )
  }
}

export default App;