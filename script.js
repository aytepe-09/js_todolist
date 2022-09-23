const addToDo = document.getElementById('addToDo');
const toDoContainer = document.getElementById('toDoContainer');
const inputText = document.getElementById('inputText');
const clearToDo = document.getElementById('clearToDo');

function changefunc(val) {
    
    console.log("The input value has changed. The new value is: " + val);
}

addToDo.addEventListener('click',function(){

    let paragraph = document.createElement('li');
    paragraph.innerHTML=inputText.value;
    
    paragraph.classList.add('paragraph-styling');
    toDoContainer.append(paragraph);
    if (inputText.value === '') {
        alert("You must write something!");
      }
    inputText.value= '';  //Add işlemi yaptıktan sonra da inputText 'in içerisini sıfırla.

    
    paragraph.addEventListener('click',function(){
    
        paragraph.style.textDecoration='line-through';
        
    })
    paragraph.addEventListener('dblclick',function(){
        paragraph.style.textDecoration='double';
        paragraph.remove(); //dbl click olan paragp'ı remove et  
        //Ya da toDoContainer.removechild(paragraph)  //İkisi de aynı işlevi görür
    })
    clearToDo.addEventListener('click',function(){
        paragraph.remove();  // ya da paragraph.style.display = none;
    })

})

