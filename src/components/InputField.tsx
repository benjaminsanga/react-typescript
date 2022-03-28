import React, { useRef } from 'react'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({todo, setTodo, handleAdd}: Props) => {

    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form onSubmit={(e) => {
                handleAdd(e)
                inputRef.current?.blur()
            }}>
            <input type="input" 
            ref={inputRef} 
            value={todo} 
            onChange={
                (e) => setTodo(e.target.value)
            }
            placeholder='Enter a task' />
            <button className="input__submit" type='submit'>
                Go
            </button>
        </form>
    )                         
}

export default InputField