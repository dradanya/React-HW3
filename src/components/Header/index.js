import { useState } from 'react';
import './header-module.css';

const Header = ({onAddTodo}) => {
    const [inputText, setInputText] = useState('');

    const handleChange = (event) => {
        setInputText(event.target.value);
    };

    const handleClick = () => {
        onAddTodo(inputText);
        setInputText('');
    };

    return (
        <div>
            <input
                className='input'
                placeholder='Add a Todo...'
                value={inputText}
                onChange={handleChange}
            />
            <button className='add-btn' onClick={handleClick}>
                Add
            </button>
        </div>
    );
};

export default Header;