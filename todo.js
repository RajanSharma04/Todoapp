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
        i+=1;
        click.innerHTML = i; 
        maintext.value = '';
    }
    render();
});

function render() {
    var addli = document.querySelector('.ul-list');
    addli.innerHTML = '';
    for (i = 0; i < todo.length; i++) {
        if (todo[i].status == 0) {
            let litext = document.createElement("li");
            litext.setAttribute('id', todo[i].id);
            litext.append(document.createTextNode(todo[i].text));
            addli.append(litext);
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
        if(i>0){
            i--;
          click.innerHTML=i;   
          }
    });
}
let btn =document.querySelector('.add-btn');
let click = document.querySelector('.clicks')
let i=0;
btn.addEventListener('click',function(){
      
});
 