import React, {useEffect, useState} from 'react';

const Todo = () => {
    const [todos, setTodos] = useState([])
    const [name, setName] = useState('')

    const onInput = (e) => {
        if (!(name === '' && e.target.value === '')) {
            setName(e.target.value)
        }
    }

    const addTodo = () => {
        if (name !== '') {
            setTodos(prevState => [...prevState, name])
        }
    }

    const removeTodo = (index) => {
        setTodos(prevState => [...prevState.slice(0, index), ...prevState.slice(index + 1)])
    }

    useEffect(() => console.log("first rendered"), [])
    useEffect(() => console.log("name is...", name), [name])

    return (<div>
            <input type="text" onInput={onInput}></input>
            <button onClick={addTodo} >登録</button>
            <ul>
                {todos.map((todo, index) => <li key={index}>
                    {todo}
                    <button onClick={ () => { removeTodo(index) }}>削除</button>
                </li>)}
            </ul>
        </div>
    );
}

export default Todo;
