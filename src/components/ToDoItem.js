export const ToDoItem = ({todo, onDelete}) => {
    return <li>
        <div>{todo.text}</div>
        <button onClick={() => onDelete(todo.id)}>&times;</button>
    </li>
}