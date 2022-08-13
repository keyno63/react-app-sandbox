import {FormEvent, useEffect, useState} from 'react';

const FetchApi = () => {
    const [name, setName] = useState('')
    const [value, setValue] = useState('')
    const [id, setId] = useState('')

    useEffect(() => {
        if (id === '') {
            return
        }
        fetch(`https://api.github.com/users/${id}`)
            .then(res => res.json())
            .then(data => setName(data.name))
            .catch(err => {
                console.log(err)
            })
        },
        [id]
    )

    const onInput = (e: FormEvent<HTMLInputElement>) => {
        setValue((e.target as HTMLInputElement).value)
    }

    const onClick = () => {
        console.log(`value is ${value}, name is ${name}`)
        setId(value)
    }

    return (
        <div>
            <input type='text' onInput={onInput}></input>
            <button onClick={onClick}>Do fetch!</button>
            <p>GitHub. ID は[{id}]、名前は[{name}]</p>
        </div>
    )
}

export default FetchApi
