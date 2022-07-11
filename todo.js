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

var maintext = document.querySelector('.textbox');
var form = document.querySelector('.Form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var text = maintext.value.trim();
    if (text == '') {
        alert('enter task');
    }
    else {
        add(text);
        i += 1;
        click.innerHTML = i;
        maintext.value = '';
    }
    show();
});

function show() {
    var progress = document.querySelector(".progress-ul");
    progress.innerHTML = '';
    var addli = document.querySelector('.ul-list');
    addli.innerHTML = '';
    let complete = document.querySelector('.complete-ul');
    complete.innerHTML = "";
    
    for (i = 0; i < todo.length; i++) {
        let litext = document.createElement("li");
        litext.setAttribute('id', todo[i].id);
        litext.append(document.createTextNode(todo[i].text));
        if (todo[i].status == 0) {
            addli.append(litext);
            deletetodo(litext);
            starttodo(litext);
        }
        else if (todo[i].status === 1) {
            progress.append(litext);
            deletetodo(litext);
            donetodo(litext);
           
        }
        else if (todo[i].status === 2){
            complete.append(litext);
            deletetodo(litext);


        }
    }
}
function deletetodo(litext) {
    let clear = document.createElement("Button");
    clear.append(document.createTextNode("Delete"));
    litext.append(clear);
    clear.addEventListener('click', function () {
        let deleteli = litext.getAttribute('id');
        todo = todo.filter(Todoid => Todoid.id != deleteli);
        litext.remove();
        if (i > 0) {
            i--;
            click.innerHTML = i;
        }
    });
}
function starttodo(litext) {
    let start = document.createElement("Button");
    let startbtn = document.createTextNode("Start");
    start.append(startbtn);
    litext.append(start);
    start.addEventListener('click', function () {
        let startli = litext.getAttribute('id');
        todo[todo.findIndex(Todoid => Todoid.id == startli)].status=1;
        show();
       
    });
}
function donetodo(litext){
    let Donebtn = document.createElement("button");
    Donebtn.append(document.createTextNode("Done"));
    litext.append(Donebtn);
    Donebtn.addEventListener('click', function () {
        let startli = litext.getAttribute('id');
        todo[todo.findIndex(Todoid => Todoid.id == startli)].status=2;
        show();
        console.log(todo);

    })
}
let btn = document.querySelector('.add-btn');
let click = document.querySelector('.clicks')
let i = 0;
btn.addEventListener('click', function () {

});
