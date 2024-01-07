import { Component } from "react";
import ToDoListItem from "./ToDoListItem";

export default class ToDoList extends Component {

    render() {
      //  console.log(this.props)
        return (
            <>
            {this.props.todos.map((todo) => (
                <ToDoListItem 
                key={todo._id} 
                toggleToDo={this.props.toggleToDo} 
                deleteToDo={this.props.deleteToDo}
                {...todo}  />
            ))}
            </>
        )
    }

}