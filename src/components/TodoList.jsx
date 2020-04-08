import React, { Component } from 'react';
import Todo from '../components/Todo';

class TodoList extends Component {
    state = { 
            todoList: [
                {id: 1, title: "Meeting with React", completed: false},
                {id: 2, title: "Shooping Visual Code", completed: false},
                {id: 3, title: "Learn English", completed: false},
            ],
            title: ""
        }
/* Primero Creamos el HandleChange en el Input */
        handleChange = (e) => {
            const title = e.target.value;
            this.setState({title})
        }
/* Segundo el HandleSubmit en el Form */
        handleSubmit = (e) => {
            e.preventDefault();
            const data = {id: Date.now(), title: this.state.title, completed: false}
            const todoList = [ data, ...this.state.todoList];
            this.setState({ todoList, title:"" });
        }

        handleDelete = (id) => {
            const todoList = this.state.todoList.filter( todo => todo.id !== id );
            this.setState({ todoList });
        }

        handleCheck = (id) => {
            const { todoList } = this.state;
            const index = todoList.findIndex( todo => todo.id === id );
            todoList[index].completed = !todoList[index].completed
            this.setState ({ todoList });
        }



    render() { 
        return ( <div>
            <h2 className="alert alert-success mt-4">Todo List from Eva</h2>
            <form className="ml-4 myform" onSubmit={this.handleSubmit}>
                <input type="text" className="form-control" value={this.state.title} onChange={this.handleChange}/>
                <button className="btn btn-primary">ADD</button>
            </form>
            <ul className="list-group mt-4">
                {this.state.todoList.map(todo => (
                   <Todo key={todo.id} todo={todo} handleDelete={this.handleDelete}/>
                    ))}
            </ul>
        </div> );
    }
}
 
export default TodoList;