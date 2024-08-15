import _ from 'lodash';
import './style.css';

let todolist = [];

class todos {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}
const content = document.getElementById('content');
const title = document.getElementById('title');
const description = document.getElementById('description');
const dueDate = document.getElementById('dueDate');
const priority = document.getElementById('priority');

const modalButton = document.getElementById('modalButton');
modalButton.addEventListener('click', displayModal)

const closeButton = document.getElementById('closeButton');
closeButton.addEventListener('click', closeModal)

const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', makeObject)

function displayModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
}

function closeModal(event) {
    event.preventDefault();
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

function makeObject(event) {
    event.preventDefault();
    const todo = new todos(
        title.value,
        description.value,
        dueDate.value,
        priority.value
    );
    todolist.push(todo);
    displayTodo()
    clearInput()
}
function clearInput() {
    title.value = ''
    description.value = ''
    dueDate.value = ''
}
function displayTodo() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear any existing content

    todolist.forEach((todo, index) => {
        const todoElem = document.createElement('div');
        todoElem.innerText = `${todo.title}\n${todo.description}\n${todo.dueDate}\n${todo.priority}\n`;

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', () => {
            deleteTodo(index); // Pass the index to the delete function
        });

        const x = document.createElement('input');
        x.setAttribute('type','checkbox');
        x.style.marginRight = '50px'; 

        todoElem.appendChild(x);
        todoElem.appendChild(deleteButton);
        content.appendChild(todoElem);
    });
}

function deleteTodo(index) {
    todolist.splice(index, 1); // Remove the item from the array
    displayTodo(); // Update the displayed list
}