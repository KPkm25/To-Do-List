// we need 3 different constructors-
//Task (id,title,isCompleted)
// UI -add,create,edit,delete tasks
// localstorage -save data in localstorage

import UI from "./ui.js";
import Task from "./task.js";
//import LS from "./ls.js";
//import FW from "./fw.js";

const ui=new UI()
//const fw=new FW()

ui.showAllTasks();

document.querySelector('.AddTaskBtn').addEventListener('click',e=>{
    const taskTitle=document.querySelector('#newtaskID').value
    //console.log(taskTitle)

    if(taskTitle.length>0){
        const task=new Task(taskTitle)

    ui.addToUI(task)
    ui.resetForm()

    console.log(task)

    }
    
})

document.querySelector('.task-list').addEventListener('click',e=>{
    //console.log(e.target.className)

    // if(e.target.className==='task__op_delete md hydrated'){
    //     console.log("Delete button pressed")
    // }


    if(e.target.className.includes('task__op_edit')){
        ui.editTask(e);
    }


    if(e.target.className.includes('task__op_delete')){
     //   console.log("Delete button pressed")
     ui.deleteTask(e);
    }

    if(e.target.className.includes('task-check')){
        ui.completeTask(e)
       // fw.fire(e)
    }
})

document.querySelector('.EditTaskBtn').addEventListener('click',(e)=>{

    ui.updateTask(e)
})

document.querySelector('.CancelTaskBtn').addEventListener('click',(e)=>{
    
    ui.cancelTask(e)
})