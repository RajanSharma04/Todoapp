const button = document.querySelector('#btn2');
const TextBox = document.querySelector('#textbox');
const addli = document.querySelector("#addli");

button.addEventListener('click',function(){
    const text = document.createElement("Li");
    const content = document.createTextNode(TextBox.value);
    TextBox.value= ' ';

    text.append(content);
    addli.append(text);
    alert('item add');
});