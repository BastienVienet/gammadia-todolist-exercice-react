import React from "react";
import StyledButton from "../styles/Button";
import StyledInput from "../styles/Input";

export const ToDoSetter = ({onAdd, input, setInput}) => {
    const handleEnterPress = event => {
        if (event.keyCode === 13) {
            onAdd(input);
        }
    };

    return (
        <> {/*same than React.Fragment */}
            <StyledInput onKeyDown={handleEnterPress}
                   type="text"
                   value={input}
                   onChange={(event) => setInput(event.target.value)}
            />
            <StyledButton onClick={() => onAdd(input)}>Add</StyledButton>
        </>
    )
}