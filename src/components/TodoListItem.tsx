import React from 'react'
import { Todo } from './Todo'

interface Props {
    todo: Todo
}

 const nTodoListItem = ({todo} : Props) => {
    return(
        <div>
            <li>{todo.task}</li>
        </div>
    )
}

export default TodoListItem