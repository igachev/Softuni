import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { TodoContext } from '../contexts/todoContext';

export default function ToDoItem({
    _id,
    text,
    isCompleted,
   
}) {

    const {onTodoDeleteClick} = useContext(TodoContext)

    return (
        <ListGroup.Item action style={{display: 'flex', justifyContent: 'space-between'}} >
          {text}
          <Button variant="dark" onClick={() => onTodoDeleteClick(_id)}>X</Button>
        </ListGroup.Item>
    )

}