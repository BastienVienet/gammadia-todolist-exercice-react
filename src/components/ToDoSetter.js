import React from "react";


export const ToDoSetter = ({input, setInput, onAdd}) => {
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
            <button onClick={() => onAdd(input)}>Add</button>
        </div>

    )

}