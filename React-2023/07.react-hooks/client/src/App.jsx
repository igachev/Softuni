
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import { useEffect, useState } from 'react';
import AddTodoModal from './components/AddTodoModal';
import { TodoContext } from './contexts/todoContext';

const baseUrl = 'http://localhost:3030/jsonstore/todos'

function App() {
 
const [todos,setTodos] = useState([]);
const [showAddTodo,setShowAddTodo] = useState(false);

useEffect(() => {
    fetch(baseUrl)
    .then((response) => response.json())
    .then((result) => setTodos(Object.values(result)))
},[]);

const onTodoAddSubmit = async (values) => {
  console.log(values)
  const response = await fetch(baseUrl,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
  });
  const result = await response.json()
  setShowAddTodo(false)
  setTodos((state) => ([...state,result]))
  return result
}

const onTodoAddClick = () => {
  setShowAddTodo(true)
}

const onTodoAddClose = () => {
  setShowAddTodo(false)
}

const onTodoDeleteClick = async (todoId) => {
  const response = await fetch(`${baseUrl}/${todoId}`,{
    method: 'DELETE'
  })

  setTodos((state) => state.filter((todo) => todo._id !== todoId))
}

const contextValue = {
  onTodoDeleteClick
}

  return (
    <TodoContext.Provider value={contextValue}>
   <div>
    <Header />

    <ToDoList 
    todos={todos} 
    onTodoAddClick={onTodoAddClick}
    />

    <AddTodoModal 
    show={showAddTodo} 
    onTodoAddSubmit={onTodoAddSubmit} 
    onTodoAddClose={onTodoAddClose} 
    />

   </div>
   </TodoContext.Provider>
  )
  
}

export default App
