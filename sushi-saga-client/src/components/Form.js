import React from 'react'
import App from '../App'

const Form = (props) => {
    return(
        <form onSubmit={(e) => props.increaseBudget(e)}>
            <input placeholder='Add $$' />
            <input type='submit' value='Add Money'/>
        </form>
    )
}
export default Form