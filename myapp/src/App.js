import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Todos from './components/Todos'
import './components/Style.css'
import Header from './components/layOut/Header'
import About from './components/pages/About'
import AddTodo from './components/AddTodo'
import axios from 'axios'

class App extends Component{
constructor(props){
super(props)
this.state = {
todos: []
}
}

componentDidMount(){
axios.get('https://jsonplaceholder.typicode.com/todos')
.then(res => this.setState({ todos: res.data }))
}

markComplete = (id) => {
this.setState({
todos: this.state.todos.map(todo => {
if(todo.id === id){
todo.completed = !todo.completed
}
return todo
})
})
}

delTodo = (id) => {
axios.delete(`https://jsonplaceholder.typicode.com/todos ${id}`)
.then(res => this.setState({
todos: [...this.state.todos.filter(
todo => todo.id !== id)]}))
}

addTodo = (title) => {
axios.post('https://jsonplaceholder.typicode.com/todos', {title, completed: false})
.then(res => this.setState({
todos: [...this.state.todos, res.data]
}))
}

  render(){
  return (
    <Router>
     <Header />
     <Route exact path="/" render={props => (
     <React.Fragment>
     <AddTodo addTodo={this.addTodo} />
     <Todos todos={this.state.todos} markComplete={this.markComplete}
     delTodo={this.delTodo} />
     </React.Fragment>
     )} />

     <Route path="/about" component={About} />
    </Router>
  )
  }
}

export default App;
