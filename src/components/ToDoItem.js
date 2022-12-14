import { MdDelete } from 'react-icons/md'
import styled from "styled-components";

const ToggleLi = styled.li`
${(props) => props.checked ? "text-decoration-line: line-through;" : ""}
`

export const ToDoItem = ({todo, onDelete, onCheckToDo}) => {
    return <ToggleLi checked={todo.completed}>
        <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onCheckToDo(todo.id)}
        ></input>
        <div>{todo.text}</div>
        <button onClick={() => onDelete(todo.id)}><MdDelete></MdDelete></button>
    </ToggleLi>
}