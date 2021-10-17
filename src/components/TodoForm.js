import React from 'react'

const TodoForm = (props) => {
    return (
        <div className="container">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    {props.goal}
                </label>
                <i className="far fa-times-circle"></i>
            </div>
        </div>
    )
}

export default TodoForm
