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
    start: 0
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
    let start = this.state.start
    let last = this.state.allSushi.length
    let end = start + 4

    if( end <= last - 1 ){
      start = start + 4
      end = start + 4
    } else {
      start = 0
      end = 4
    }

    this.setState({
      displaySushi: this.state.allSushi.slice(start,end),
      start
    })
  }

  eatSushi = (ateSushi) => {
    let eatenSushi = [...this.state.eatenSushi, ateSushi]

    if (this.state.balance >= ateSushi.price && !ateSushi.eaten){

      let allSushi = this.state.allSushi.map(sushi => {
        if (sushi.id === ateSushi.id){
          return {...sushi, eaten: true}
        } else return sushi
      })

      let displaySushi = allSushi.slice(this.state.start, this.state.start + 4)

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
      <div >
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