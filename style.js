function Task() {
    const TextBox = document.querySelector('.textbox');
    const addli = document.querySelector('.ul-list'); 
    const Text= document.createElement("Li");
    
    if(TextBox.value==''){
        alert("Sorry Enter Task");
    }
    else
    {
        Text.append(document.createTextNode(TextBox.value));
        addli.append(Text);
        TextBox.value = '';
    }
        const clear = document.createElement("Button");
        clear.append(document.createTextNode("Delete"));
        Text.append(clear);
        clear.addEventListener('click', function(){
        Text.remove();
    });



    const start = document.createElement("Button");
    const startbtn = document.createTextNode("Start");
    start.append(startbtn);
    Text.append(start);    
    start.addEventListener('click', function(){
        const progress = document.querySelector(".progress-ul");
        progress.append(Text); 
        start.style.display = 'none';
        Text.append(Donebtn);
    });

    
    const Donebtn = document.createElement("button");
    Donebtn.append(document.createTextNode("Done"));

    Donebtn.addEventListener('click',function(){
        let complete = document.querySelector('.complete-ul');
        complete.append(Text);
        Donebtn.style.display = 'none';
        alert('Task done')
        });
  };