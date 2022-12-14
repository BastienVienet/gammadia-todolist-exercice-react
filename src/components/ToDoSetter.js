import React from "react";

export const ToDoSetter = ({onAdd, input, setInput, toDoEditing, editingText, setEditingText}) => {
    const handleEnterPress = event => {
        if (event.keyCode === 13) {
            onAdd(input);
        }
    };

    return (
        <div>
            <input onKeyDown={handleEnterPress}
                   type="text"
                   value={input}
                   onChange={(event) => setInput(event.target.value)}
            />
        </div>
    )
}