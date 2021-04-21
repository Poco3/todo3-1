'use strict';

let num = 0;


const todos = [];
const todo = {
    comment: '',
    status: '作業中'
};

const output = document.getElementById('output');

//関数addTask
const addTask = () => {
    const input = document.getElementById('input').value;
    todo.comment = input;
    todos.push(todo);
    displayTodos(todo);
    num++
};

//関数displayTodos
const displayTodos = (todo) => {
    const list = document.createElement('td');
    list.textContent = num;

    const th = document.createElement('td');
    th.textContent = todo.comment;
    input.value = '';

    const Status = () => {
        const changeStatus = document.createElement('button');
        changeStatus.textContent = todo.status;
        return changeStatus;
    };

    const Delete = () => {
        const changeDelete = document.createElement('button');
        changeDelete.textContent = '削除';
        return changeDelete;
    };



    const table = document.getElementById('new-task');
    
    const tr = document.createElement('tr');
    table.appendChild(tr);
    tr.appendChild(list);
    tr.appendChild(th);
    tr.appendChild(Status());
    tr.appendChild(Delete());
};

output.addEventListener('click', addTask,);
