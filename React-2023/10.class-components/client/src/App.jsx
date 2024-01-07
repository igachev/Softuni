


import React from 'react';
import ToDoList from './components/ToDoList';
import ToDoContext from './contexts/ToDoContext';
import Header from './components/Header';


class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      name:'Pesho'
    }
  }

  componentDidMount() {
    fetch('http://localhost:3030/jsonstore/todos')
    .then((res) => res.json())
    .then((result) => {
      this.setState({
        todos: Object.values(result)
      })
    })
  }

  toggleTodo(todoId) {
    this.setState({
      todos: this.state.todos.map((todo) => todo._id === todoId ? {...todo,isCompleted: !todo.isCompleted} : todo)
    })
  }

  deleteTodo(todoId) {
    this.setState({
      todos: this.state.todos.filter((todo) => todo._id !== todoId)
    })
  }

  render() {
  return (
    <>
    <ToDoContext.Provider value={{name: this.state.name}}>
     <Header />
     
     <ToDoList 
     todos={this.state.todos} 
     toggleToDo={this.toggleTodo.bind(this)}
     deleteToDo={this.deleteTodo.bind(this)}
     />
     
     </ToDoContext.Provider>
    </>
  )
  }
  
}

export default App
