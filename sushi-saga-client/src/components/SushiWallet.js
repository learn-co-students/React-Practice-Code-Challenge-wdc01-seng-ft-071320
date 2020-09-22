import React from 'react'

const SushiWallet = (props) => {


    return (

        <div>
            <label>Withdraw:</label>
            <input
                 type='number'
                 placeholder='Add money...' 
                 onChange= {props.changeWithdrawalAmmount}
            />
                  <button onClick={props.addMoney}>I WANT MONEY</button>

        </div>
    )
       
    

}