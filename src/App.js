import './App.css';
import { Header } from './myComponents/Header';
import { Todos } from './myComponents/Todos';
import { Footer } from './myComponents/Footer';
import React, { useState } from 'react';
import { AddTodo } from './myComponents/AddTodo'
// import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// import { About } from './myComponents/About'
function App() {

  //------------------ start routes ---------------------
  // let routes = [{
  //   path: '/about',
  //   component: About
  // }]
  //------------------ end routes ---------------------

  //-------------- setTodos list after we added any todo
  const addTodo = (title, desc) => {
    const id = (todos.length) + 1
    const myTodos = { id: id, title: title, desc: desc }
    setTodos([...todos, myTodos])
  }

  //-------------- setTodos list after we deleted any todo
  const onDelete = (todo) => {
    console.log("On Delete works::_)", todo);
    setTodos(todos.filter((e) => { return e !== todo }))
  }
  let todosList = JSON.parse(localStorage.getItem('todos'))
  console.log("No:)", localStorage.getItem('todos'));
  const [todos, setTodos] = useState(todosList != null ? todosList : [])
  return (
    <>

      <Header title="My TitleList" searchBar={true} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />

    </>
  );



}

export default App;
