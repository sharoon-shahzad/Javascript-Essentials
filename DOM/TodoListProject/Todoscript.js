// 



const task = document.querySelector('#taskInput');
const addTaskBtn = document.querySelector('#addTaskBtn');
const taskList = document.querySelector('#taskList');
const taskItem = document.querySelector('.taskItem');
const clearCompleteBtn = document.getElementById('clearCompleteBtn');


// steps and algo for the adding task 
// user enters the task in the input field 
// user clicks the add task button
// the task is added to the list-> in this case lis the array of tasks to store the task added by the user
// when task is done it should be removed from the array and the list
            // it should take the addTask function to add the task to the list


const TaksArray = [];

function addTask() {
  const taskContent = task.value.trim();
  const isValidInput = /^[a-zA-Z ]+$/.test(taskContent);
  if (isValidInput) {
    TaksArray.push(taskContent);
    console.log(TaksArray);
    task.value = "";
    // renderTask();
    displayTasks();
  } else {
    alert("Please enter a valid task");
  }
}


addTaskBtn.addEventListener('click', addTask);


function displayTasks() {
    taskList.innerHTML = "";
    TaksArray.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
            <label for="task-${index}">${task.text}</label>`;
        li.querySelector("input").addEventListener("change", () => toggleTask(index));
        taskList.appendChild(li);
    });
}
//! corner cases
// input field should check if user enters
        //! numers , special character any white spaces expect string