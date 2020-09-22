import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state={
    sushis: [],
   index: 0,
   eatenSushi: [],
   wallet: 200
  }

  componentDidMount() {
    fetch(API) 
    .then(res => res.json() )
    .then(sushiData => this.setState({
      sushis: sushiData
    }))
  }

 nextFourSushi = () => {
   let index = this.state.index

 if(index >= this.state.sushis.length - 4 ) 
   index = -4
    this.setState({ index: index + 4})
 }
  

ateMeAlready = (sushi) => {
  if(!this.state.eatenSushi.includes(sushi.id) && this.state.wallet >= sushi.price)
  this.setState({
    eatenSushi: [...this.state.eatenSushi, sushi.id],
    wallet: this.state.wallet - sushi.price
  })
  else if( !this.state.eatenSushi.includes(sushi.id) && this.state.wallet <= sushi.price )
  alert("Not enough money!")
}





  render() {
    const fourSushi = this.state.sushis.slice(this.state.index, this.state.index + 4 )
    return (
      <div className="app">
        <SushiContainer 
        sushis={ fourSushi }
        nextFourSushi={this.nextFourSushi} 
        moreSushi={this.moreSushi}
        ateMeAlready={this.ateMeAlready}
        eatenSushi={this.state.eatenSushi}
        />


        <Table eatenSushi={this.state.eatenSushi}
              wallet={this.state.wallet}
        />
      </div>
    );
  }
}

export default App;