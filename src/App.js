import React, { useState } from 'react';
import Main from './components/Main';
import Header from './components/Header';

function App() {
    const [todos, setTodos] = useState([]);

    const handleToggleTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    const handleAddTodo = (text) => {
        if (text.trim() !== '') {
            const newTodo = { text, completed: false };
            setTodos([...todos, newTodo]);
        }
    };

    const handleRemoveTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div className='container'>
            <div className='header-wrapper'>
                <Header onAddTodo={handleAddTodo} />
            </div>
            <div className='main-wrapper'>
                <Main todos={todos} onToggleTodo={handleToggleTodo} onRemoveTodo={handleRemoveTodo} />
            </div>
        </div>
    );
}

export default App;
