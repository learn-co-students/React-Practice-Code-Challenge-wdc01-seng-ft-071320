import React from 'react'

const MoreButton = (props) => {
    return <button onClick={() => props.displaySushis()}>
            More sushi!
          </button>
}

export default MoreButton