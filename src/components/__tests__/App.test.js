import {render, renderHook, screen} from '@testing-library/react'
import {App} from "../App";
import {useToDo} from '../../hooks/useToDo';

jest.mock("../ToDoSetter", () => ({
    ToDoSetter: () => null
}))

describe('Global app test', () => {

    it("should build with empty state", () => {
        render(<App/>)
        screen.getByTestId("todo-list")
        expect(screen.queryAllByTestId("todo-item")).toHaveLength(0)
    })

    it("should build with default state", () => {
        const mockToDo = {"completed": false, "id": 5678, "text": "toto"}
        global.localStorage.setItem("toDoList", JSON.stringify([mockToDo, {...mockToDo, id: 3456, completed: true}]))
        render(<App/>)
        expect(screen.queryAllByTestId("todo-item")).toHaveLength(2)
    })

    it("should add a new todo to the todo list", () => {
        const spy = jest.fn()
        const props = { // Mock de props
            setToDoList: spy,
            toDoList: [],
            setInput: () => {
            }
        }
        const {result} = renderHook(() => useToDo(props))
        result.current.addToDo("test")
        expect(spy).toHaveBeenCalledWith([{"completed": false, "id": expect.any(Number), "text": "test"}]
        )
    })

    it("should keep existing todos when adding a new todo", () => {
        const spy = jest.fn()
        const mockToDo = {"completed": false, "id": 5678, "text": "toto"}
        const props = { // Mock de props
            setToDoList: spy,
            toDoList: [mockToDo],
            setInput: () => {
            }
        }
        const {result} = renderHook(() => useToDo(props))
        result.current.addToDo("test")
        expect(spy).toHaveBeenCalledWith([mockToDo, {"completed": false, "id": expect.any(Number), "text": "test"}]
        )
    })
})