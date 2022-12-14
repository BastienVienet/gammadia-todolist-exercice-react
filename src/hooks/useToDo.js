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

    const editToDo = (id) => {

    }

    const checkToDo = (id) => {
        const updatedToDo = [...toDoList].map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        })
        setToDoList(updatedToDo);
    }

    return {addToDo, deleteToDo, editToDo, checkToDo}
}