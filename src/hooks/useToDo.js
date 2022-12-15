export const useToDo = (setToDoList, toDoList, setInput) => {
    const addToDo = (todo) => {
        const newTodo = {
            id: Math.floor(Math.random() * 10000),
            text: todo,
            completed : false
        };
        // Add the to-do to the list
        setToDoList(([...toDoList, newTodo]));
        // Clear input box
        setInput('');
    }

    const deleteToDo = (id) => {
        const newToDoList = toDoList.filter((todo) => todo.id !== id);
        setToDoList(newToDoList);
    }

    const editToDo = (id, newText) => {
        const updatedToDoList = [...toDoList].map((todo) => {
            if (todo.id === id) {
                todo.text = newText
            }
            return todo
        })
    setToDoList(updatedToDoList)
    }

    const checkToDo = (id) => {
        const checkedToDoList = [...toDoList].map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        })
        setToDoList(checkedToDoList);
    }

    return {addToDo, deleteToDo, editToDo, checkToDo}
}