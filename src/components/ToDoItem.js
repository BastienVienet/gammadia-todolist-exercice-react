import {useRef, useState} from "react";
import styled from "styled-components";
import StyledButton from "../styles/Button";
import {MdCancel, MdDelete, MdEdit, MdSave} from 'react-icons/md'

const ToggleLi = styled.li`
  ${(props) => props.checked ? "text-decoration-line: line-through;" : ""}
`

export const ToDoItem = ({todo, onDelete, onEdit, onCheckToDo, filter}) => {

    const [isEditing, setIsEditing] = useState(false)
    const todoOldTextRef = useRef(null);
    const inputTextRef = useRef(null);

    if ((filter === "completed" && !todo.completed) || (filter === "to_be_done" && todo.completed)) {
        return null
    }

    return (
        (isEditing) ? (
            <li>
                <input ref={inputTextRef}
                       type="text"
                       defaultValue={todo.text}
                />
                <StyledButton onClick={() => {
                    onEdit(todo.id, inputTextRef.current.value)
                    setIsEditing(false)
                }
                }><MdSave></MdSave></StyledButton>
                <StyledButton onClick={() => setIsEditing(false)}><MdCancel></MdCancel></StyledButton>
            </li>
        ) : (
            <ToggleLi checked={todo.completed}>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onCheckToDo(todo.id)}
                ></input>
                <div ref={todoOldTextRef}>{todo.text}</div>
                <StyledButton onClick={() => onDelete(todo.id)}><MdDelete></MdDelete></StyledButton>
                <StyledButton onClick={() => setIsEditing(true)}><MdEdit></MdEdit></StyledButton>
            </ToggleLi>
        )
    )
}