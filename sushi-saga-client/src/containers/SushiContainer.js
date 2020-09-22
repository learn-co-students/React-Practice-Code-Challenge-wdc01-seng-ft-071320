import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
  
            //  Render Sushi components here!
             props.sushis.map(sushi=><Sushi sushi={sushi} key={sushi.id} eatSushi={props.eatSushi} eatenSushi={props.eatenSushi}/>)
  
        }
        <MoreButton moreSushi={props.moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer