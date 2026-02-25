let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function showTasks(){
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task,index)=>{
        let li = document.createElement("li");

        li.innerHTML = `
        <span onclick="toggleTask(${index})">${task.text}</span>
        <button onclick="deleteTask(${index})">X</button>
        `;

        if(task.completed){
            li.classList.add("completed");
        }

        list.appendChild(li);
    });

    localStorage.setItem("tasks",JSON.stringify(tasks));
}

function addTask(){
    let input = document.getElementById("taskInput");

    if(input.value==="") return;

    tasks.push({
        text:input.value,
        completed:false
    });

    input.value="";
    showTasks();
}

function deleteTask(index){
    tasks.splice(index,1);
    showTasks();
}

function toggleTask(index){
    tasks[index].completed=!tasks[index].completed;
    showTasks();
}

showTasks();
