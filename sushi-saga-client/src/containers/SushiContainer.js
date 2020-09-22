import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'


const SushiContainer = (props) => {

  return (
   
    <Fragment >
      <div className="belt">
        {

          props.displaySushi.map((sushi) => {
          return <Sushi 
                  key = {sushi.id}
                  sushi= {sushi}
                  eat={props.eat}
                  eatenSushi={props.eatenSushi}
                />
        })
      }
        
        <MoreButton moreSushi={props.moreSushi}/>
      </div>
    </Fragment>
  )}



export default SushiContainer