import React from 'react';

const Todo = (props) => {
    const {todo} = props
    return ( 
        <li className="list-group-item todo">
        <span style={{textDecoration: todo.completed ? "line-through": "" }} >{todo.title}</span>
            <div>
                <button className={`ml-4 btn btn-${todo.completed ? "" : "outline-"}success`} 
                onCLick={() => props.handleCheck(todo.id)}
                >✔️
                </button>
                <button className='btn btn-outline-danger ml-4' 
                onClick={() => props.handleDelete(todo.id)}
                >Delete
                </button>
            </div>
        </li>
     );
}
 
export default Todo;