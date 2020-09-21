import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Form from './components/Form'
// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    allSushi: [],
    displaySushi: [],
    balance: 100,
    eatenSushi: [],
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(sushis => {
      let allSushi = sushis.map(sushi => ({...sushi, eaten: false}))
      this.setState({ 
      allSushi,
      displaySushi: allSushi.slice(0,4)
     })
    })
  }

  moreSushi = () => {
    let start = this.state.displaySushi.slice(-1).pop().id
    let last = this.state.allSushi.slice(-1).pop().id
    let end = 0
    if( start !== last ){
      end = start + 4
    } else {
      start = 0
      end = 4
    }
    this.setState({displaySushi: this.state.allSushi.slice(start,end)})
  }

  eatSushi = (ateSushi) => {
    let eatenSushi = [...this.state.eatenSushi, ateSushi]
    if (this.state.balance >= ateSushi.price){
      let allSushi = this.state.allSushi.map(sushi => {
        if (sushi.id === ateSushi.id){
          return {...sushi, eaten: !sushi.eaten}
        } else return sushi
      })
      let displaySushi = allSushi.slice(0,4)
      let balance = this.state.balance - ateSushi.price
      this.setState({
        allSushi,
        displaySushi,
        balance,
        eatenSushi
      })
    }
  }

  addMoney = (event) => {
    event.preventDefault()
    let balance = this.state.balance + parseInt(event.target.balance.value,10)
    event.target.reset()
    this.setState({balance})
  }

  render() {
    return (
      <div>
          <Form addMoney={this.addMoney} />
        <div className="app">
          <SushiContainer 
              displaySushi={this.state.displaySushi} 
              moreSushi={this.moreSushi} 
              eatSushi={this.eatSushi} 
              />
          <Table 
              balance={this.state.balance} 
              eatenSushi={this.state.eatenSushi}  
              />
        </div>
      </div>
    );
  }
}

export default App;