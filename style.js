function Task() {

    let TextBox = document.querySelector('.textbox');
    let addli = document.querySelector('.ul-list');
    let Text = document.createElement("Li");
    if (TextBox.value == '') {
        alert("Sorry Enter Task");

    }
    else {
        Text.append(document.createTextNode(TextBox.value));
        addli.append(Text);
        i+=1;
        click.innerHTML = i; 
        TextBox.value = '';

        let clear = document.createElement("Button");
        clear.append(document.createTextNode("Delete"));
        Text.append(clear);
        clear.addEventListener('click', function () {
            Text.remove();
            if(i>0){
              i--;
            click.innerHTML=i;   
            }
           
        });
        let start = document.createElement("Button");
        let startbtn = document.createTextNode("Start");
        start.append(startbtn);
        Text.append(start);
        start.addEventListener('click', function () {
            let progress = document.querySelector(".progress-ul");
            progress.append(Text);
            start.style.display = 'none';
            Text.append(Donebtn);
            i--;
            click.innerHTML=i; 
        });


        let Donebtn = document.createElement("button");
        Donebtn.append(document.createTextNode("Done"));

        Donebtn.addEventListener('click', function () {
            let complete = document.querySelector('.complete-ul');
            complete.append(Text);
            Donebtn.style.display = 'none';
            alert('Task done')
        });

    }
};
let btn =document.querySelector('.add-btn');
let click = document.querySelector('.clicks')
let i=0;
btn.addEventListener('click',function(){
      
});
 
