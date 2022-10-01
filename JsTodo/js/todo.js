const todoForm = document.querySelector('.todo-form');
const toDoInput = todoForm.querySelector('input');
const todoList = document.querySelector('.todo-list');

todoForm.addEventListener("submit",submit);
//ToDo in (li in todo-list ul)

//Form has submit event and F5 -> preventDefault
function submit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        id : Date.now(),
        text : newToDo
    } 
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

function paintToDo(newToDo){
    const li = document.createElement('li');
    li.id = newToDo.id;
    const input = document.createElement('input');
    const span = document.createElement('span');
    const delBtn = document.createElement('button');
    li.appendChild(input);
    li.appendChild(span);
    li.appendChild(delBtn);
    input.type = "checkbox"
    span.innerText = newToDo.text; 
    delBtn.innerText ='❌';
    delBtn.addEventListener("click",deleteToDo);
    todoList.appendChild(li);
}

function deleteToDo(event){
    //remove parentElement of delBtn. -> li
    //which HTML Element do you remove?
    //delToDo typeof Id is string
    const delToDo = event.target.parentElement;
    delToDo.remove();
    //toDos typeof Id is number
    //renew Array toDos.
    //filter dose not modify original Array.
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(delToDo.id));
    saveToDos();
}

let toDos = [];

const TODOS_KEYS = "toDos"
//save in localStorage

function saveToDos(){
    //stringify : Get string in toDos Array
    //save data type of value -> string
    //localstorage save only text(string) ->JSON stringify
    localStorage.setItem(TODOS_KEYS,JSON.stringify(toDos));
}

const savedToDos = localStorage.getItem(TODOS_KEYS);

if(savedToDos != null){
    //saved String -> saved Array
    const parsedToDos = JSON.parse(savedToDos);
    //Array 내의 각각의 item에 대하여 => 적용
    //parsedToDos (Array) -> toDos (Array) : toDos isn't empty Array
    toDos = parsedToDos;
    //forEach(paintToDo) -> send item applied function
    parsedToDos.forEach(paintToDo);
}

// js에서 함수를 실행할때 함수가 어디서 적용 되는지 , 어떤 요소를 사용해서 함수를 적용 시키는지에 대한 정보를 제공 해줌. 

function toDoFilter(toDo , id){
    return toDo.id !== id;
}

