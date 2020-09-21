import React from 'react'

const MoreButton = (props) => {
    return props.money <= 0 ? 
    <button disabled='true'>More sushi!</button> 
    :
    <button onClick={()=> props.moreSushi()}>
            More sushi!
          </button>
}

export default MoreButton