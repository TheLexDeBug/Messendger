const formAddTask = document.getElementById("form-add-task") //создание новой задачи
const inputTask = document.getElementById ("name")//элемент, куда пользователь вводит название новой задачи
const container = document.querySelector(".tasks")//контейнер со списком задач
let tasks = [] //масив задач

//функционал добавления задач
formAddTask.addEventListener('submit', function(event){
    event.preventDefault()//отменяется событие по умолчанию: перезагрузка страницы

let nameTask = inputTask.value;//считываем, что пользователь ввёл в название задачи
let newTask = document.createElement('div');//создаём пустой тег див для задачи
newTask.innerHTML = `<span>${nameTask}</span>`//добавляем текст задачи в див

newTask.classList.add ('task')//добавляем у див класс таск
container.append(newTask)//добавляем задачу в контейнер задач

if(formAddTask.querySelector("#immediate").checked){ //если пользователь поставил галочку
    newTask.classList.add("immediate")//то у задачи добавляем класс immediate
}

tasks.push (newTask)//добавляем задачу массив

// console.log(divs)
// console.log(nods)
})


//функционал. Перенести все задачи в нижний регистр
const btnlowCase = document.getElementById("lowCase")
btnlowCase.addEventListener('click', function (){
    let newTasks =[...tasks]//Создаю новый массив на базе основного
    for (let i=0; i<newTasks.length; i++){ //перебираем все элементы массива
newTasks[i]=newTasks[i].innerHTML.toLowerCase() //перводим каждую задачу в регистр
    }

    container.innerHTML="";//очищаем контейнер

    for (let i in newTasks){ //перебираем массив и для каждого элемента создаём новую запись в контейнере
        let nameTask = inputTask.value;//считываем, что пользователь ввёл в название задачи
let newTask = document.createElement('div');//создаём пустой тег див для задачи
newTask.innerHTML = `<span>${nameTask[i]}</span>`//добавляем текст задачи в див

newTask.classList.add ('task')//добавляем у див класс таск
container.append(newTask)//добавляем задачу в контейнер задач

    }

    //сортировки по имени задач
    const btnlowCase = document.getElementById("btn1")
const btn1 = 
function compare (a,b){
    if (a.querySelector("span").innerHTML > b.querySelector("span").innerHTML)return 1
    if (a.querySelector("span").innerHTML == b.querySelector("span").innerHTML)return 0
    if (a.querySelector("span").innerHTML < b.querySelector ("span").innerHTML) return -1
}
})

//работа с NodeList
let divs= document.querySelectorAll("div")//статическая коллекция
// console.log(divs)

let nods= document.querySelector(".tasks").childNodes//динамическая коллекция
// console.log(nods)


 let tasks1= document.getElementById("tasks1")
 let container1= document.getElementById("container1")
 const btn1=document.getElementById("btn1")
 function compare (a,b){
     if (a.querySelector("span").innerHTML > b.querySelector("span").innerHTML)return 1
    if (a.querySelector("span").innerHTML == b.querySelector("span").innerHTML)return 0
    if (a.querySelector("span").innerHTML < b.querySelector ("span").innerHTML) return -1
 }
 btn1.addEventListener("click",function(){
    const btnlowCase = document.getElementById("btn1")
    let nameTasks = [...tasks].sort(compare)
    for (let i in newTasks){
        container.append(newTasks[i])
    }
 })

 let taskscnopka2= document.getElementById("taskscnopka2")
 let containercnopka2= document.getElementById("containercnopka2")
 const btncnopka2=document.getElementById("btncnopka2")
 function compare (a,b){
     if (a.querySelector("span").innerHTML > b.querySelector("span").innerHTML)return 1
    if (a.querySelector("span").innerHTML == b.querySelector("span").innerHTML)return 0
    if (a.querySelector("span").innerHTML < b.querySelector ("span").innerHTML) return -1
 }
 btn1.addEventListener("click",function(){
    const btnlowCase = document.getElementById("btncnopka2")
    let nameTasks = [...tasks].sort(compare)
    for (let i in newTasks){
        container.append(newTasks[i])
    }
 })
//  const btn4 = document.getElementById("btn4")//Клик по кнопке задание 6
// btn4.addEventListener("click", function(){
//     let value
//     newTasks=newTasks.filter(function(item){
//         return item.innerHTML.indexOf(value) !=-1
//     })