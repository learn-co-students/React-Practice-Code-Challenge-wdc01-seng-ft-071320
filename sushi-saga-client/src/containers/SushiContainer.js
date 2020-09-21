import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
// let fourSushis = props.sushis.map(sushi => <Sushi sushi={sushi}/>)

  return (
    <Fragment>
      <div className="belt">
        {
          
          /* 
             Render Sushi components here!
          */
         props.sushis.map(sushi => <Sushi 
          sushi={sushi} 
          eatenSushi={props.eatenSushi} 
          eaten={props.eaten}
          />)
        }
        <MoreButton 
        moreSushi={props.moreSushi}
        money={props.money}
        />
        
      </div>
    </Fragment>
  )
}

export default SushiContainer