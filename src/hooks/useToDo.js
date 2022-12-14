export const useToDo = () => {
    const myAlert = (text) => {
        alert(text);
    }

    return {triggerAlert : myAlert}
}