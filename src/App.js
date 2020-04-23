import React, { useReducer, useState, useEffect } from 'react';
import './components/TodoComponents/Todo.css'
import TodoList from './components/TodoComponents/TodoList';
import { TodoData } from './data';
import TodoForm from './components/TodoComponents/TodoForm';
import Reducer, { ADD_ITEM, REMOVE_ITEM, COMPLETE} from './components/Reducer';

const App = () => {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  const [state, dispatch] = useReducer(Reducer, TodoData)

   const handler = (itemID) =>{
        dispatch({type: COMPLETE, payload: itemID})
  }
  
  const addItem = (name) =>{
    dispatch({type: ADD_ITEM, payload: name})
  }
  const onClear = (e) =>{
    e.preventDefault();
    dispatch({type: REMOVE_ITEM})
  }
    return(
      <div className="container">
        <div className="borderlands">
        <h2>The To-do's</h2>
        <TodoList  data = {state} toggleCompleted = {handler}/>
        <TodoForm addItem = {addItem} onClear={onClear}/>
        </div>
      </div>
    );
}

export default App;
