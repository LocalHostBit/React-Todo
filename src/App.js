import React, { Component } from 'react';
import './App.css';
import Navegacion from './components/navegacion';
import TodoList from './components/TodoList';


class App extends Component {
  render(){
    return(
      <div className="App">
        <Navegacion />
      <div className="container">
      <div className="col-md-12">
      <TodoList />
      </div>
        <div className="col-md-12 mt-4">
          <div className="card-header alert alert-info">
              Un simple Todo List
            </div>
            <div className="card-body">
              <p>Añade tus tareas pendientes, y si has temrinado, dale un check </p>
           </div>
           
        </div>
      </div>
    </div>
    );
  }
}

export default App;
