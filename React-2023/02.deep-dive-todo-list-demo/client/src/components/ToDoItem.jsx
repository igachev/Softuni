export function ToDoItem(props) {
  
    return (
        <tr className={`todo ${props.isCompleted ? 'is-completed' : ''}`}>
                <td>{props.text}</td>
                <td>{props.isCompleted ? 'Completed' : 'Not Completed'}</td>
                <td className="todo-action">
                  <button className="btn todo-btn" onClick={ () => props.changeIsCompleted(props.index)}>Change status</button>
                </td>
              </tr>
    )
}