const root = document.getElementById("root")

const bigwrapper = document.createElement("div")
bigwrapper.classList.add("container")
const wrapperRow = document.createElement("div")
wrapperRow.classList.add("container-wrapper")
const deletAllButton = document.createElement("button")
deletAllButton.textContent = "Delete All" 
deletAllButton.classList.add("btn")
const addTodoTextField = document.createElement("input")
addTodoTextField.placeholder = "Enter todo ..."
addTodoTextField.classList.add("container-wrapper__input")
const addTodoButton = document.createElement("button")
addTodoButton.textContent = "Add"
addTodoButton.classList.add("btn")

wrapperRow.append(deletAllButton, addTodoTextField, addTodoButton)


const getToDo = () => {
const todoElement = document.createElement("div")
todoElement.classList.add("todo-item")
const completButton = document.createElement("button")
completButton.classList.add("btn-check")
completButton.textContent = "✓"
const todoTextElement = document.createElement("div")
todoTextElement.innerText = "Todo text"
todoTextElement.classList.add("todo-item__input")
const todoElementBlock = document.createElement("div")
todoElementBlock.classList.add("todo-item__block")
const blockClosetButton = document.createElement("button")
blockClosetButton.classList.add("btn-close")
blockClosetButton.textContent = "✗"
const blockTextElement = document.createElement("div")
blockTextElement.innerText = "Date"
blockTextElement.classList.add("todo-item__info")

todoElementBlock.append(blockClosetButton, blockTextElement)
todoElement.append(completButton, todoTextElement,todoElementBlock)

return todoElement;

}

const todos = Array(2).fill(null).map(getToDo);

bigwrapper.append(wrapperRow, ... todos)
root.append(bigwrapper)

