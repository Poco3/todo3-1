'use strict';

let num = 0;


const todos = [];
const todo = {
    comment: '',
    status: '作業中'
}

const output = document.getElementById('output');

//関数addTask
const addTask = () => {
    const input = document.getElementById('input').value;
    todo.comment = input
    todos.push(todo);
    displayTodos(todo);
    num++
}

//関数displayTodos
const displayTodos = (todo) => {
    const list = document.createElement('td');
    list.textContent = num;

    const th = document.createElement('td');
    th.textContent = todo.comment
    input.value = '';

    const Status = () => {
        const StatusButton = document.createElement('button');
        StatusButton.textContent = todo.status
        return StatusButton;
    }

    const Delete = () => {
        const DeleteButton = document.createElement('button');
        DeleteButton.textContent = '削除'
        return DeleteButton;
    }



    const table = document.getElementById('new-task');
    const tr = document.createElement('tr');
    table.appendChild(tr);
    table.appendChild(list);
    table.appendChild(th);
    table.appendChild(Status());
    table.appendChild(Delete());
};

output.addEventListener('click', addTask,);
