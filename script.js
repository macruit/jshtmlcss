menu.onclick = function myFunction(){
var x= document.getElementById('myTopnav');
if(x.className === 'topnav'){
    x.className += " responsive";
} else{
    x.className = 'topnav';
}
}


// Todo List

let input = document.getElementById('todo-input');
let btn = document.querySelector('.todo-button');
let result = document.querySelector('.todo-out');

//Button Input onclick
btn.addEventListener('click', (e) =>{
    
    if(input === '') return
    createDeleteElements(input.value)
    input.value = '';
});
//Button Input click Ende


function createDeleteElements(value){
    

    const btn = document.createElement('button');
    const li = document.createElement('li');

    li.className = 'li';
    li.textContent = value;

    btn.className = 'btn';
    btn.textContent = '-';
    li.appendChild(btn);

btn.addEventListener('click', (e) =>{
    
    result.removeChild(li);
})

li.addEventListener('click', (e) => {
    li.classList.toggle('li-active');
})

    result.appendChild(li);
}





// Todo lis END