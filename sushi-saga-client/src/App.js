import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

//setting the state aka the api
    state = {
      sushis:[],
      displayIndex: 0,
      eaten:[],
      money:200,
      withdrawal:0
     
      
    }

//  waiting till the info loads then it will fetch the array of sushis
  componentDidMount(){
    fetch(API)
    .then(res=> res.json())
    .then (sushis => this.setState({
      sushis: sushis
    })
    )
  }
//arrow functions implicitely return 4 sushi 
  displaySushi = () =>  this.state.sushis.slice(this.state.displayIndex,this.state.displayIndex + 4)
    
  

  }

  moreSushi = () => {
    
    this.setState({
      displayIndex: this.state.displayIndex + 4
    })
  }
  changeWithdrawalAmmount = (e) => this.setState({
    withdrawal: parseInt(e.target.value)

  })

  addMoney = () => {
    this.setState({

      money: this.state.money + this.state.withdrawal
    })

  }
  
  eat = (sushi) => {
    let isEaten = !this.state.eaten.includes(sushi.id)
    if( isEaten && this.state.moeny >= sushi.price)
    this.setState({
        money: this.state.money - sushi.price,
        eaten:[...this.state.eaten,sushi.id]
    })
    else if (isEaten && this.state.money < sushi.price)
      alert(`You don't have enough funds!`)
  }

  render() {
    return (
      <div className="app">
        <SushiWallet 
        changeWithdrawalAmmount={this.changeWithdrawalAmmount}
        addMoney={this.addMoney}
       />
        <SushiContainer 
        displaySushi={this.displaySushi}
        moreSushi={this.moreSushi}
        eat={this.eat}
        eatenSushi={this.state.eaten}
        />
        <Table eatenSushi={this.state.eaten}
                bank={this.state.money}/>
      </div>
    );
  }
}

export default App;