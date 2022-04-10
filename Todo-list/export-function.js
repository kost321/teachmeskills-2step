export function getTodo(todoObject, index, todos) {
    let todoElement = document.createElement('div')
    todoElement.classList.add('todo-item', (todoObject.isChecked ? 'complete' : undefined))
    todoElement.setAttribute('id', `todo-${todoObject.id}`)
  
    const todoTextElement = document.createElement('div')
    todoTextElement.classList.add('todo-text')
    todoTextElement.innerHTML = `<span>${todoObject.text}<span>`
  
    const completeButton = document.createElement('button')
    completeButton.classList.add('btn-todo-action', 'complete')
    completeButton.innerText = todoObject.isChecked ? '✓' : ''
    completeButton.addEventListener('click', () => {
      todoObject.isChecked = !todoObject.isChecked;
      completeButton.innerText = todoObject.isChecked ? '✓' : ''
      todoElement.classList.toggle('complete');
      // saveTodos(todos);
    })
    const columnWrapper = document.createElement('div')
    columnWrapper.classList.add('column-wrapper')
    const todoDeleteButton = document.createElement('button')
    todoDeleteButton.classList.add('btn-todo-action', 'delete')
    todoDeleteButton.innerText = 'X'
    todoDeleteButton.addEventListener('click', () => {
      todos.splice(index, 1);
      todoElement.remove();
      // saveTodos(todos)
    })
  
    const todoDatetimeBox = document.createElement('span')
    todoDatetimeBox.classList.add('column-wrapper-date')
    todoDatetimeBox.innerText = todoObject.date
  
    columnWrapper.append(todoDeleteButton, todoDatetimeBox)
  
    todoElement.append(completeButton, todoTextElement, columnWrapper)
  
    return todoElement;
  }