import { Component } from "react";
import { Card,Button } from 'antd';

export default class ToDoListItem extends Component {

    componentDidUpdate() {
        console.log(`${this.props.text} - did update`)
    }

    componentWillUnmount() {
        console.log(`${this.props.text} - will unmount`)
    }

    render() {
      //  console.log(this.props)
        return (
            <>
    <Card
    title={this.props.text}
    bordered={false}
    style={{
      width: 300,
      marginBottom: '40px',
      backgroundColor: this.props.isCompleted ? 'green' : 'red'
    }}
  >
    <p>{this.props.isCompleted ? 'Completed' : 'Not Completed'}</p>
   <Button type="primary" onClick={() => this.props.toggleToDo(this.props._id)} >Change is completed</Button>
   <Button type="primary" danger onClick={() => this.props.deleteToDo(this.props._id)}>Remove</Button>
  </Card>
            </>
        )
    }
}