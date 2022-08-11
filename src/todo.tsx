import React, {FormEvent, useEffect, useState} from 'react';

const Todo = () => {
    const [todos, setTodos] = useState<string[]>([])
    const [name, setName] = useState<string>('')

    const onInput = (e: FormEvent<HTMLInputElement>) => {
        const target = (e.target as HTMLInputElement)
        if (!(name === '' && target.value === '')) {
            setName(target.value)
        }
    }

    const addTodo = () => {
        if (name !== '') {
            setTodos(prevState => [...prevState, name])
        }
    }

    const removeTodo = (index: number) => {
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
