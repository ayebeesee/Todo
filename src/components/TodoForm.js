import React, {useState} from 'react';

const TodoForm = props => {
    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
        })

        setInput('')
    }

    return (
        <form className='todo-form' onSubmit = {handleSubmit}>
            {props.edit ? ( // 👈 props로 받아온 값에서 Key값으로 edit이 true이면 아래의 태그가 랜더링됩니다.
                <>
                    <input
                        type="text"
                        placeholder="Update your item"
                        name="text"
                        className="todo-input edit"
                        value={input}
                        onChange={handleChange}
                    ></input>
                    <button className="todo-button edit">update</button>
                </>
            ) : ( // props.edit이 false이면 아래의 태그가 랜더링됩니다.
                <>
                    <input
                        type="text"
                        placeholder="Add a todo"
                        name="text"
                        className="todo-input"
                        value={input}
                        onChange={handleChange}
                    ></input>
                    <button className="todo-button">Add</button>
                </>
            )}
        </form>
    )
}

export default TodoForm