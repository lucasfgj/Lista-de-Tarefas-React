import React from 'react';

const Todo = ({todo, removeTodo, completeTodo}) => {
    return (
            <div className='todo' style={{textDecoration: todo.isCompleted ? "line-through" : "none"}}>
                <div className='content'>
                    <p>{todo.text}</p>
                    <p className='category'>({todo.category})</p>
                </div>
                <div>
                    <button className='completo'onClick={() => completeTodo(todo.id)}>Completar</button>
                    <button className='remover' onClick={() => removeTodo(todo.id)}>X</button>
                </div>
            </div>
    );
};

export default Todo
