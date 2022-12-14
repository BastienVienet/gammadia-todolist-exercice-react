import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {ToDoItem} from "./ToDoItem";
import {ToDoSetter} from "./ToDoSetter";
import {useToDo} from "../hooks/useToDo";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  li {
    display: flex;
    flex-direction: row;
    button {
      margin-left: 10px;
    }
  }
`

export const App = () => {

    const savedToDoList = localStorage.getItem('toDoList')
    const [toDoList, setToDoList] = useState(savedToDoList ? JSON.parse(savedToDoList): [])
    const [input, setInput] = useState("")
    const {addToDo, deleteToDo, editToDo, checkToDo} = useToDo(setToDoList, toDoList, setInput)

    useEffect(() => {
        localStorage.setItem('toDoList', JSON.stringify(toDoList));
    }, [toDoList])

    return (
        <Container>
            <h1>To do list</h1>
            <ToDoSetter
                onAdd={addToDo}
                input={input}
                setInput={setInput}>
            </ToDoSetter>
            <ul>
                {toDoList.map((todo, index) => {
                    return <ToDoItem
                        key={index}
                        todo={todo}
                        onDelete={deleteToDo}
                        onCheckToDo={checkToDo}>
                    </ToDoItem>
                })}
            </ul>
        </Container>
    );
}
