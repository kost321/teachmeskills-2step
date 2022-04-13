const root = document.getElementById('root')

//---------------- Action Panel ------------

const bigWrapper = document.createElement('div')
bigWrapper.classList.add('container')

const todosContainer = document.createElement('div')
todosContainer.classList.add('todosContainerClass')

const wrapperRow = document.createElement('div')
wrapperRow.classList.add('container__block')

const elementDeleteAll = document.createElement('button')
elementDeleteAll.classList.add('block__btn')
elementDeleteAll.textContent = "Delete All"



const elementDeleteLast = document.createElement('button')
elementDeleteLast.classList.add('block__btn')
elementDeleteLast.textContent = "Delete Last"

const addTodoTextField = document.createElement('input')
addTodoTextField.classList.add('block__input')
addTodoTextField.placeholder = 'Enter todo...'

const elementAdd = document.createElement('button')
elementAdd.classList.add('block__btn')
elementAdd.textContent = "Add"

wrapperRow.append(elementDeleteAll,elementDeleteLast,addTodoTextField,elementAdd)


const wrapper = document.createElement('div')
wrapper.classList.add('container__block')

const elemText = document.createElement('text')
elemText.classList.add('block__text-add')
elemText.textContent = "All : 0"

const elemCondition = document.createElement('text')
elemCondition.classList.add('block__text-completed')
elemCondition.textContent = "Completed : 0"

const elemShow = document.createElement('button')
elemShow.classList.add('block__btn')
elemShow.textContent = "Show All"

const elemCompleted = document.createElement('button')
elemCompleted.classList.add('block__btn-comleted')
elemCompleted.textContent = "Show Completed"

const addTextField = document.createElement('input')
addTextField.classList.add('block__input')
addTextField.placeholder = 'Search'

wrapper.append(elemText, elemCondition,elemShow,elemCompleted,addTextField)


//----------------- Todos -----------------
function getTodo(text) {
  const todoElement = document.createElement('div')
  todoElement.classList.add('todo-item')
  

  const completeButton = document.createElement('button')
  completeButton.classList.add('btn-todo-action',)
  completeButton.innerText = ''
  completeButton.addEventListener('click', () => {
    completeButton.innerText = completeButton.innerText === '' ? "✓" : ''
    todoElement.classList.toggle('complete');
    todoTextElement.classList.toggle('complete-text');
    showAllCompleted()

  })

  const todoTextElement = document.createElement('div')
  todoTextElement.classList.add('todo-text')
  todoTextElement.innerHTML = `<span>${text}<span>`

  const columnWrapper = document.createElement('div')
  columnWrapper.classList.add('column-wrapper')

  const todoDeleteButton = document.createElement('button')
  todoDeleteButton.classList.add('btn-todo-action',)
  todoDeleteButton.innerText = 'X'
  todoDeleteButton.addEventListener('click',() => todoElement.remove())
  todoDeleteButton.addEventListener('click', showAll)
  todoDeleteButton.addEventListener('click', showAllCompleted)
  

  const todoDatetimeBox = document.createElement('span')
  todoDatetimeBox.classList.add('column-wrapper-date')
  todoDatetimeBox.innerText = (new Date()).toLocaleString()

  columnWrapper.append(todoDeleteButton, todoDatetimeBox)

  todoElement.append(completeButton, todoTextElement, columnWrapper)

  return todoElement
}


const createTodo = () => {
    const text = addTodoTextField.value;
    todosContainer.append(getTodo(text));
    addTodoTextField.value = "";
  }
elementAdd.addEventListener('click',createTodo)


//--------------DeleteAll-----------------

const deleteAll = () => {
    const todoItems = document.querySelectorAll('.todo-item');
    todoItems.forEach((item) => item.remove());
    elementDeleteAll.addEventListener('click', showAll)
    elementDeleteAll.addEventListener('click', showAllCompleted)
  }
  elementDeleteAll.addEventListener('click',deleteAll)


//----------------Delete Last------------------

  const deletelast = () => {
    const todoItems = document.querySelectorAll('.todo-item');
    const todoItemsLast = todoItems[todoItems.length - 1];
    todoItemsLast.remove();
    elementDeleteLast.addEventListener('click', showAll)
    elementDeleteLast.addEventListener('click', showAllCompleted)
  }
  elementDeleteLast.addEventListener('click',deletelast)


//-------------------All-----------------------

const showAll = () => {
  const todosContainer =  document.querySelector('.todosContainerClass');
  const todoItems = document.querySelector('.block__text-add');
  todoItems.textContent = `All : ${todosContainer.children.length}`
}
elementAdd.addEventListener('click',showAll)

//-----------------Completed-------------------

const showAllCompleted = () => {
  const todosContainer =  document.querySelector('.todosContainerClass');
  const todoComplited = document.querySelector('.block__text-completed');
  todoComplited.textContent = `Completed : ${document.querySelectorAll('.complete').length}`
}

elementAdd.addEventListener('click',showAllCompleted)

//----------------ShowAll----------------------

const showAllTodos = () => {
  const todosElements = document.querySelector('block__btn');
  let todosContainer =  document.querySelector('.todosContainerClass');
  todosContainer = document.querySelectorAll('.todo-item:not(.complete)').forEach(e=> e.style.visibility= "visible")
}

elemShow.addEventListener('click',showAllTodos)

// //---------------showAComleted--------------

const showAllTodosCompleted = () => {
  const todosElement = document.querySelector('block__btn-comleted');
  let todosContainer =  document.querySelector('.todosContainerClass');
  todosContainer = document.querySelectorAll('.todo-item:not(.complete)').forEach(e=> e.style.visibility= "hidden")
  console.log(todosContainer)
}

elemCompleted.addEventListener('click',showAllTodosCompleted)


//---------------search---------------


const search = () => {
  const todosElements = document.querySelector('block__input');
  let todosContainer =  document.querySelector('.todosContainerClass');
  let todoItem = document.querySelector('.todo-text')
  let todotemcomplete = document.querySelectorAll('.todo-item.complete')
    if (todosElements === todoItem) {
      todosContainer = todotemcomplete;
      console.log(todosContainer)
    } else {
 
      
    }

  }
 

addTextField.addEventListener('click',search)


bigWrapper.append(wrapperRow,wrapper,todosContainer)


root.append(bigWrapper)
