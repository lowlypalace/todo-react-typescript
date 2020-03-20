import React, {HTMLProps, ChangeEvent} from 'react'

interface Props extends HTMLProps<HTMLFormElement> {
    onInputChange: (event: ChangeEvent<HTMLInputElement>) => void
    inputValue: string;
}

const TodoForm = ({ onInputChange, ...props }: Props) => {
    return (
        <form {...props}>
            <input
            className="form-control"
            placeholder ="what would you like get done?"
            onChange = {onInputChange}
            />
            <button>Create</button>
        </form>
    )
}


export default TodoForm