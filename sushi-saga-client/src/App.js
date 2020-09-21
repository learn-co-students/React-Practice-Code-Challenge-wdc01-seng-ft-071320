import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Form from './components/Form'

// Endpoint!
const API = "http://localhost:3000/sushis/"

class App extends Component {

  state={
    sushis: [],
    fourSushis: [],
    emptyPlates: [],
    availableBudget: 100
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(sushisArray => {
      let sushiObj = {}
      let sushis = sushisArray.map(sushi => sushiObj = {...sushi, eaten: false})
      this.setState({
        sushis 
      })
      this.displaySushis()
  })
  }

  displaySushis = () => {
    let currentFourSushis = this.state.sushis.slice(0, 4)
    this.setState({
      fourSushis: currentFourSushis,
      sushis: this.state.sushis.filter(sushi => !currentFourSushis.includes(sushi))
    })
  }

  eatSushi = (clickedSushi) => {
    if (this.state.availableBudget >= clickedSushi.price){
    let updateCurrentSushis = this.state.fourSushis.map(sushi => {
      if (sushi === clickedSushi){
        sushi = {...sushi, eaten: true}
      }
      return sushi
    })
    this.setState({
      fourSushis: updateCurrentSushis
    })
    this.emptyPlate(clickedSushi)}
  }

  emptyPlate = (eatenSushi) => {

    this.setState({
      emptyPlates: [...this.state.emptyPlates, eatenSushi.Id]
    })
    this.payMeal(eatenSushi.price)
  }

  payMeal = (cost) => {
    this.setState({
      availableBudget: this.state.availableBudget - cost
    })
  }
  
  increaseBudget = (e) => {
    e.preventDefault()
    let additionalAmount = parseInt(e.target[0].value)
    e.target.reset()
    this.setState({
      availableBudget: this.state.availableBudget + additionalAmount
    })
  }


  render() {
    return (
      <div className="app">
        <Form increaseBudget={this.increaseBudget}/>
        <SushiContainer fourSushis={this.state.fourSushis} eatSushi={this.eatSushi} displaySushis={this.displaySushis} availableBudget={this.state.availableBudget}/>
        <Table emptyPlates={this.state.emptyPlates} availableBudget={this.state.availableBudget}/>
      </div>
    );
  }
}

export default App;