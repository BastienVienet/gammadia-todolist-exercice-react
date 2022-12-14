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
`

export const App = () => {

    const savedToDoList = localStorage.getItem('toDoList')
    const [toDoList, setToDoList] = useState(savedToDoList ? JSON.parse(savedToDoList): [])
    const [input, setInput] = useState("")
    const {triggerAlert} = useToDo()

    useEffect(() => {
        localStorage.setItem('toDoList', JSON.stringify(toDoList));
    }, [toDoList])

    const addTodo = (todo) => {
        const newTodo = {
            id: Math.floor(Math.random() * 10000),
            text: todo
        };
        // Add the to-do to the list
        setToDoList(([...toDoList, newTodo]));
        // Clear input box
        setInput('');
        triggerAlert(newTodo.id + ' - ' + todo);
    }

    const deleteTodo = (id) => {
        const newToDoList = toDoList.filter((todo) => todo.id !== id);
        setToDoList(newToDoList);
    }

    return (
        <Container>
            <h1>To do list</h1>
            <ToDoSetter onAdd={addTodo} input={input} setInput={setInput}></ToDoSetter>
            <ul>
                {toDoList.map((todo, index) => {
                    return <ToDoItem key={index} todo={todo} onDelete={deleteTodo}></ToDoItem>
                })}
            </ul>
        </Container>
    );
}
