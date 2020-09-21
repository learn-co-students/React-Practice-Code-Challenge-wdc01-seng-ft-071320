import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Wallet from './components/Wallet'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  
  state = {
    allSushi: [],
    currentSushiIndex: 0,
    currentFourSushi: [],
    budget: 40,
    moneySpent: 0,
    plates: []
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(sushi => this.setState({
      allSushi: sushi.map(sushi => {return {...sushi, eaten: false}}),
      currentFourSushi: sushi.slice(this.state.currentSushiIndex, this.state.currentSushiIndex + 4).map(sushi => {return {...sushi, eaten: false}})
    }))
  }

  getMoreSushi = () => {
    let newIndex = this.state.currentSushiIndex + 4

    let sushiArrayLength = this.state.allSushi.length
      if (newIndex > sushiArrayLength - 4){
        this.setState({
        currentSushiIndex: 0 
       })}
      else{
        this.setState({
        currentSushiIndex: newIndex
      })
    }
      this.setState({
      currentFourSushi: this.state.allSushi.slice(this.state.currentSushiIndex, this.state.currentSushiIndex + 4)
      })
    }
  
  eatSushi = (id, price) => {
    let newCurrentArray = this.state.currentFourSushi.map(sushi => {
      if(sushi.id === id || price > this.state.budget){
        sushi.eaten = true
      }
      return sushi
    })

    let updatedAllSushi = this.state.allSushi.map(sushi => {
      if(sushi.id === id || price > this.state.budget){
        sushi.eaten = true
      }
      return sushi
    })

    
    if (price <= this.state.budget){

      // Filter eaten sushis for plate array
      let eatenSushi = [...this.state.plates, id]

      // calculate money spent
      let totalMoneySpent = this.state.moneySpent + price

      // Set state with new values
      this.setState({
        allSushi: updatedAllSushi,
        currentFourSushi: newCurrentArray,
        plates: eatenSushi,
        moneySpent: totalMoneySpent,
        budget: this.state.budget - price
      })

  }}

  addMoney = (e, value) => {
    e.preventDefault()
    let money = parseInt(value)
    
    this.setState({
      budget: this.state.budget + money
    })
  }

  render() {

    return (
      <div className="app">
        <SushiContainer eatSushi={this.eatSushi} getMoreSushi={this.getMoreSushi} currentFourSushi={this.state.currentFourSushi}/>
        <Table plates={this.state.plates} budget={this.state.budget}/>
        <Wallet addMoney={this.addMoney}/>
      </div>
    );
  }
}

export default App;