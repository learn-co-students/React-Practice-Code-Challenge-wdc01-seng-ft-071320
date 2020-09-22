import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const baseUrl = "http://localhost:3000/"
const sushiUrl = baseUrl + 'sushis/'

class App extends Component {
state = {
  sushis: [],
  currentSushiIndex : 0,
  eaten: [],
  money: 45
  
}

componentDidMount(){
  fetch(sushiUrl)
  .then(resp => resp.json())
  .then(sushis => this.setState({sushis}))
}

setFourSushis = () => {

  return this.state.sushis.slice(this.state.currentSushiIndex, this.state.currentSushiIndex + 4)
}

moreSushi = () => {
  this.setState({
    currentSushiIndex: this.state.currentSushiIndex + 4
  })
}


eatenSushi = (sushi) => {
  // let newSushis = this.state.sushis.map(sushi => {return {...sushi, eaten: false}})
let newArray = this.state.sushis

if(this.state.money >= sushi.price){

  if(!this.state.eaten.includes(sushi.id))
  this.setState({
    eaten: [...this.state.eaten, sushi.id],
    money: this.state.money - sushi.price
  })
  else if (this.state.money < sushi.price) 
    alert (`You need more money`)
}

}
  


  render() {
    return (
      <div className="app">
        <SushiContainer 
        sushis={this.setFourSushis()} 
        moreSushi={this.moreSushi} 
        eatenSushi={this.eatenSushi} 
        eaten={this.state.eaten}
        money={this.state.money}
        />

        <Table money={this.state.money} plates={this.state.eaten}/>
      </div>
    );
  }
}

export default App;