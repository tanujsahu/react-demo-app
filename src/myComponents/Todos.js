import React from 'react'
import { Todo } from './Todo';
export const Todos = (props) => {
    let { todos, onDelete } = props;
    return (
        <>
            <div className="container">
                <h3 >Todos List</h3>
                {todos.length === 0 ? 'Data Not Found' :
                    todos.map((obj) => {
                        return <Todo todo={obj} key={obj.id} onDelete={onDelete} />
                    })
                }
            </div>



        </>
    )
}
