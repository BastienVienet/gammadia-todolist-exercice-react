import React from "react";

export const ToDoSetter = ({onAdd, input, setInput}) => {
    const handleEnterPress = event => {
        if (event.keyCode === 13) {
            onAdd(input);
        }
    };

    return (
        <> {/*same than React.Fragment */}
            <input onKeyDown={handleEnterPress}
                   type="text"
                   value={input}
                   onChange={(event) => setInput(event.target.value)}
            />
            <button onClick={() => onAdd(input)}>Add</button>
        </>
    )
}