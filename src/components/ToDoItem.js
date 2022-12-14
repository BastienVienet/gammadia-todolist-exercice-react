import { MdDelete } from 'react-icons/md'

export const ToDoItem = ({todo, onDelete, onCheckToDo}) => {
    return <li>
        <div>{todo.text}</div>
        <button onClick={() => onDelete(todo.id)}><MdDelete></MdDelete></button>
        <input
            type="checkbox"
            onChange={() => onCheckToDo(todo.id)}
        ></input>
    </li>
}