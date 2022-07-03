function todo() {
    let TextBox = document.querySelector('.textbox');
    let Button = document.querySelector('.add-btn');
    let addli = document.querySelector('.ul-list');
    let Start=document.createElement("Button");
    let Text= document.createElement("Li");
    if(TextBox.value===''){
        alert("please enter task");
    }
    else
    {
        
        Text.append(document.createTextNode(TextBox.value));
        addli.append(Text);
    }

        let clear = document.createElement("Button");
        clear.append(document.createTextNode("Delete"));
        clear.style.marginLeft = '10px';
        Text.append(clear);
        clear.addEventListener('click', function () {
        Text.remove();
    });
    
}