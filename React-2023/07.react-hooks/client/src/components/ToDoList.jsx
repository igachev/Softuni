import ListGroup from 'react-bootstrap/ListGroup';
import ToDoItem from './ToDoItem';
import Button from 'react-bootstrap/Button';

export default function ToDoList({
    todos,
    onTodoAddClick,
    
}) {
  
    return (
        <div style={{width: '30%',margin: '10px auto'}}>
            <h1>Todo List</h1>
        <ListGroup style={{marginBottom: '10px'}}>
        
       {todos.map((todo) =>
        <ToDoItem key={todo._id} {...todo}  />
       )}

      </ListGroup>
      <Button variant="primary" onClick={onTodoAddClick}>Add</Button>{' '}
      </div>
    )
}