import React, { Component } from 'react'
import propTypes from 'prop-types'
import './Todos'

class TodoItem extends Component {
getStyle = () => {
return{
background: 'orange',
padding: '10px',
borderBottom: '1px #ccc dotted',
textDecoration: this.props.todo.completed? 'line-through' : 'none'
}
}

  render(){
  return(
  <div style={this.getStyle()}>
  <p>
  <input type="checkbox" onChange={this.props.markComplete.bind(this, this.props.todo.id)} /> {' '}
  {this.props.todo.title}
  <button onClick={this.props.delTodo.bind(this, this.props.todo.id)} style={btnStyle}>x</button>
  </p>
  </div>
  )
  }
}

TodoItem.propTypes = {
todo: propTypes.object.isRequired
}

const btnStyle = {
background: '#ff0000',
color: '#fff',
border: ' ',
padding: '5px, 10px',
borderRadius: '50%',
cursor: 'pointer',
float: 'right'
}

export default TodoItem;
