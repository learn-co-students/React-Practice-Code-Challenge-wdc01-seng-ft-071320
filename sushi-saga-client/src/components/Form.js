import React, { Fragment } from 'react'

const Form = (props) => {
    return(
        <Fragment>

        <div >
            <form onSubmit={ props.addMoney }>
                <input type="text"  name="balance" pattern="[0-9]*" />
                <button type="submit">Add Money</button>
            </form>
        </div>
        </Fragment>
    )
}

export default Form