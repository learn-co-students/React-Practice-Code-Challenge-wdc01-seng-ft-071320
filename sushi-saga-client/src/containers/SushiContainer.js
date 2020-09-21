import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  const sushi = props.fourSushis.map(sushi => <Sushi key={sushi.id} sushi={sushi} eatSushi={props.eatSushi} availableBudget={props.availableBudget}/>)

  return (
    <Fragment>
      <div className="belt">
        {
          sushi
        }
        <MoreButton displaySushis={props.displaySushis}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer