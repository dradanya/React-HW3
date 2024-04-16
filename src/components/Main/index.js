import React from 'react';
import './main-module.css';

const Main = ({ todos, onToggleTodo, onRemoveTodo }) => {
    return (
        <div>
            <div className='main-text'>
                {todos.map((todo, index) => (
                    <div key={index} className='todo-block'>
                        <div className='todo-content'>
                            <input
                                type='checkbox'
                                checked={todo.completed}
                                onChange={() => onToggleTodo(index)}
                                className='todo-checkbox'
                            />
                            <div className={todo.completed ? 'todo-text completed' : 'todo-text'}>
                                {todo.text}
                            </div>
                        </div>
                        <button className='remove-btn' onClick={() => onRemoveTodo(index)}>
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Main;