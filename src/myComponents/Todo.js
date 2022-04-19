import React from 'react'
import './todo.css';
export const Todo = (props) => {
    let { todo, onDelete } = props;
    return (
        <>
            <div className="card width"  >
                <div className="card-body">
                    <h5 className="card-title">{todo.title}</h5>
                    <p className="card-text">{todo.desc}</p>
                    <button className='btn btn-sm btn-danger' onClick={() => { onDelete(todo) }}>Delete</button>
                </div>
            </div> 
            {/* <div className="card" style="width: 18rem;">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a className="btn btn-primary">Go somewhere</a>
                    </div>
                </div> */}
        </>
    )
}
