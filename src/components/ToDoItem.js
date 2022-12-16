import {useRef, useState} from "react";
import {MdCancel, MdDelete, MdEdit, MdSave} from 'react-icons/md'
import StyledButton from "../styles/Button";
import StyledListItem from "../styles/ListItem";
import StyledCheckbox from "../styles/Checkbox";
import StyledInput from "../styles/Input";
import styled from "styled-components";

const MyInput = styled(StyledInput)`
  display: inline;
  margin-left: 57px;
  min-width: 0;
  width: 300px;
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
            <StyledListItem>
                <MyInput ref={inputTextRef}
                       type="text"
                       defaultValue={todo.text}
                />
                <div className="ml-auto">
                    <StyledButton onClick={() => {
                        onEdit(todo.id, inputTextRef.current.value)
                        setIsEditing(false)
                    }
                    }><MdSave></MdSave></StyledButton>
                    <StyledButton onClick={() => setIsEditing(false)}><MdCancel></MdCancel></StyledButton>
                </div>
            </StyledListItem>
        ) : (
            <StyledListItem checked={todo.completed}>
                <StyledCheckbox
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onCheckToDo(todo.id)}
                ></StyledCheckbox>
                <div ref={todoOldTextRef}>{todo.text}</div>
                <div className="ml-auto">
                    <StyledButton onClick={() => onDelete(todo.id)}><MdDelete></MdDelete></StyledButton>
                    <StyledButton onClick={() => setIsEditing(true)}><MdEdit></MdEdit></StyledButton>
                </div>
            </StyledListItem>
        )
    )
}