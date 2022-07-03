function todo() {
    const TextBox = document.querySelector('.textbox');
    const addli = document.querySelector('.ul-list'); 
    const Text= document.createElement("Li");
    const checkbtn = document.createElement("button");
    if(TextBox.value===''){
        alert("please enter task");
    }
    else
    {
        
        Text.append(document.createTextNode(TextBox.value));
        addli.append(Text);
       TextBox.value = ' ';
    }

        const clear = document.createElement("Button");
        clear.append(document.createTextNode("Delete"));
        Text.append(clear);
        clear.addEventListener('click', function () {
        Text.remove();

    });
    const start = document.createElement("Button");
    const startbtn = document.createTextNode("Start");
    start.append(startbtn);
    Text.append(start);    
    start.addEventListener('click', function(){
        const progress = document.querySelector(".progress-ul");
        progress.append(Text); 
        Text.append(checkbtn);
    });
    checkbtn.append(document.createTextNode("Done"));

    checkbtn.addEventListener('click',function(){
        let complete = document.querySelector('.complete-ul');
        complete.append(Text);
        });
};