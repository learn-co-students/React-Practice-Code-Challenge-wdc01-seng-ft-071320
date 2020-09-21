import React from 'react'

const Wallet = (props) => {
  return (
    <form onSubmit={(e) => props.addMoney(e, e.target[0].value)}>
        <label>Add Money to Wallet:
            <input type="number" name="wallet" />
        </label>
        <input type="submit" value="submit"/>
    </form>
  )
}

export default Wallet