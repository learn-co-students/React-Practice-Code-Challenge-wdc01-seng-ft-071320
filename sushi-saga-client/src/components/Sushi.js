import React, { Fragment } from 'react'

const Sushi = (props) => {
  let {  eaten , img_url , name, price } = props.sushi
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => props.eatSushi(props.sushi)}>
        { eaten ? null : <img src={img_url} width="100%" alt="hi"/>}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi