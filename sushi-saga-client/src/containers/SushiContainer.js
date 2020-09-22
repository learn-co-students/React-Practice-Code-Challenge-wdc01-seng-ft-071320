import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
      props.sushis.map( sushi => < Sushi key={ sushi.id} 
        sushi={sushi} 
        ateMeAlready={props.ateMeAlready} 
        eatenSushi={props.eatenSushi}/>)
        }
        <MoreButton  nextFourSushi={props.nextFourSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer