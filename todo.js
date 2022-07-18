'use strict'

let todo = [];
function add(text) {
    let task = {
        text,
        id: Date.now(),
        status: 0
    };
    todo.push(task);
    console.log(todo);
}

let mainText = document.querySelector('.textbox');
let form = document.querySelector('.Form');
form.addEventListener('submit',function (event) {
    event.preventDefault();
    let text = mainText.value.trim();
    if (text == '') {
        alert('enter task');
    }
    else {
        add(text);
        i += 1;
        click.innerHTML = i;
        mainText.value = '';
    }
    show();
});

function show() {
    let progress = document.querySelector(".progress-ul");
    progress.innerHTML = ' ';
    let addLi = document.querySelector('.ul-list');
    addLi.innerHTML = ' ';
    let complete = document.querySelector('.complete-ul');
    complete.innerHTML = ' ';
    
    for (i = 0; i < todo.length; i++) {
        let liText = document.createElement("li");
        liText.setAttribute('id', todo[i].id);
        liText.append(document.createTextNode(todo[i].text));
        if (todo[i].status == 0) {
            addLi.append(liText);
            deletetodo(liText);
            starttodo(liText);
        }
        else if (todo[i].status === 1) {
            progress.append(liText);
            deletetodo(liText);
            donetodo(liText);   
        }
        else if (todo[i].status === 2){
            complete.append(liText);
            deletetodo(liText);
        }
    }
}
function deletetodo(liText) {
    let clear = document.createElement("Button");
    clear.append(document.createTextNode("Delete"));
    liText.append(clear);
    clear.addEventListener('click', function () {
        let deleteli = liText.getAttribute('id');
        todo = todo.filter(Todoid => Todoid.id != deleteli);
        liText.remove();
        if (i > 0) {
            i--;
            click.innerHTML = i;
        }
    });
}
function starttodo(liText) {
    let start = document.createElement("Button");
    start.append(document.createTextNode("Start")); 
    liText.append(start);
    start.addEventListener('click', function () {
        let startli = liText.getAttribute('id');
        todo[todo.findIndex(Todoid => Todoid.id == startli)].status=1;
        show();
    });
}
function donetodo(liText){
    let Donebtn = document.createElement("button");
    Donebtn.append(document.createTextNode("Done"));
    liText.append(Donebtn);
    Donebtn.addEventListener('click', function () {
        let startli = liText.getAttribute('id');
        todo[todo.findIndex(Todoid => Todoid.id == startli)].status=2;
        show();
        console.log(todo);
    })
}
let btn = document.querySelector('.add-btn');
let click = document.querySelector('.clicks')
let i = 0;

