'use strict';

let num = 0;
      
      
const todos = [];
const todo = {
   comment: '',
   status: "作業中"
    }

const output = document.getElementById("output");

//関数addTask
const addTask = () => {
const input = document.getElementById('input').value;
todo.comment = input
todos.push(todo)
displayTodos(todo)
num++
}

//関数displayTodos
const displayTodos = (todo) => {
const list = document.createElement("td");
list.textContent = num;

const th = document.createElement('td');
th.textContent = todo.comment
input.value ='';

const stbtn1 = () =>{
const btn1 = document.createElement("button");
btn1.textContent = todo.status
return btn1;
}

const stbtn2 = () =>{
const btn2 = document.createElement("button")
btn2.textContent ='削除'
return btn2;
}



const tBody = document.getElementById('new-task')
const tr = document.createElement('tr');
tBody.appendChild(tr);
tBody.appendChild(list);
tBody.appendChild(th);
tBody.appendChild(stbtn1());
tBody.appendChild(stbtn2());
};

output.addEventListener('click', addTask,);