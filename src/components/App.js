import React, {useState} from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
`

function App() {

    const [toDoList, setToDoList] = useState([])
    const [input, setInput] = useState("")

    const addTodo = (todo) => {
        const newTodo = {
            id: Math.floor(Math.random() * 100),
            todo : todo
        };
        // Add the todo to the list
        setToDoList(([...toDoList, newTodo]));
        // Clear input box
        setInput('');
    }

    return (
        <Container>
            <h1>To do list</h1>
            <input type="text"
                   value={input}
                   onChange={(event) => setInput(event.target.value)}
            />
            <button onClick={() => addTodo(input)}>Add</button>
        </Container>
    );
}

export default App;
