import React, { useState } from 'react'

export const AddTodo = (props) => {
    let { addTodo } = props;
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert('title & descripotion can not be blank')
        }
        else {
            addTodo(title, desc);
            let td = JSON.parse(localStorage.getItem('todos'))
            console.log("td:)", td)
            let id = (td && td != null ? td.length + 1 : 0)
            let setData = { id: id, title: title, desc: desc }
            if (td && td != null) {
                localStorage.setItem('todos', JSON.stringify([...td, setData]))
                console.log("YES:)")
            }
            else {
                localStorage.setItem('todos', JSON.stringify([{ id: 1, title: title, desc: desc }]))
                console.log("NO:)")
            }
        }
    }

    return (
        <>
            <div className='container'>
                <form onSubmit={submit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Todos Title</label>
                        <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label">Todos Description</label>
                        <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" />
                    </div>
                    <button type="submit" className="btn btn-primary">Add Todo</button>
                </form>
            </div>
        </>
    )
}
