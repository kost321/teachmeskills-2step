const root = document.getElementById('root')

// ----------------- Action Panel -----------------

const bigWrapper = document.createElement('div')
bigWrapper.classList.add('container')

const wrapperRow = document.createElement('div')
wrapperRow.classList.add('container-wrapper')

const deleteAllButton = document.createElement('button')
deleteAllButton.textContent = 'Delete All'
deleteAllButton.classList.add('btn')

const addTodoTextField = document.createElement('input')
addTodoTextField.placeholder = 'Enter todo...'
addTodoTextField.setAttribute('id', 'todo-input')

const addTodoButton = document.createElement('button')
addTodoButton.textContent = 'Add'
addTodoButton.classList.add('btn')

wrapperRow.append(deleteAllButton, addTodoTextField, addTodoButton)

// ----------------- Todos -----------------

function getTodo(text) {
  const todoElement = document.createElement('div')
  todoElement.classList.add('todo-item')
  todoElement.setAttribute('id', `todo-${Math.floor(Math.random() * 1000) + 1}`)

  const completeButton = document.createElement('button')
  completeButton.classList.add('btn-todo-action', 'complete')
  completeButton.innerText = '✓'
  completeButton.addEventListener('click', () => {
    completeButton.innerText = completeButton.innerText === '' ? "✓" : ''
    todoElement.classList.toggle('complete');
    todoTextElement.classList.toggle('complete');
  })

  const todoTextElement = document.createElement('div')
  todoTextElement.classList.add('todo-text')
  todoTextElement.innerHTML = `<span>${text}<span>`

  const columnWrapper = document.createElement('div')
  columnWrapper.classList.add('column-wrapper')

  const todoDeleteButton = document.createElement('button')
  todoDeleteButton.classList.add('btn-todo-action', 'delete')
  todoDeleteButton.innerText = 'X'
  todoDeleteButton.addEventListener('click',() => todoElement.remove())

  const todoDatetimeBox = document.createElement('span')
  todoDatetimeBox.classList.add('column-wrapper-date')
  todoDatetimeBox.innerText = (new Date()).toLocaleString()

  columnWrapper.append(todoDeleteButton, todoDatetimeBox)

  todoElement.append(completeButton, todoTextElement, columnWrapper)

  return todoElement;
}

// ----------------- Render section -----------------

// let todos = TodoController.generateTodos(2);

bigWrapper.append(wrapperRow)
root.append(bigWrapper)


const createTodo = () => {
    const text = addTodoTextField.value;
    bigWrapper.append(getTodo(text));
    addTodoTextField.value = "";
  }

  addTodoButton.addEventListener('click', createTodo)

  const deleteAll = () => {
    const todoItems = document.querySelectorAll('.todo-item');
    todoItems.forEach((item) => item.remove());
  }

  deleteAllButton.addEventListener('click',deleteAll)