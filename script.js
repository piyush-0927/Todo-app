// const input = document.getElementById("input-text");
// const btn = document.getElementById("input-btn");
// const list = document.getElementById("input-list");

// btn.addEventListener("click", function() {
//     const newTask = document.createElement("li");
//     newTask.innerText = input.value;

//     newTask.addEventListener("click", function() {
//         newTask.classList.toggle("completed");
//     })

//      const cutBtn = document.createElement("button");
//     cutBtn.innerText = "X";
//     cutBtn.classList.add("cut-btn");

// cutBtn.addEventListener("click", function(){
//     newTask.remove();
// })

//     newTask.append(cutBtn);

//     list.append(newTask);

//     input.value = "";
// })

const inputBox = document.getElementById("input-text");
const btn = document.getElementById("input-btn");
const listContainer = document.getElementById("input-list");

btn.addEventListener("click", AddTask);

function AddTask() {
    if (inputBox.value === "") {
        alert("you must add a task!");
    } else {
        let newTask = document.createElement("li");
        newTask.innerHTML = inputBox.value;
        listContainer.appendChild(newTask);

        let cutBtn = document.createElement("button");
        cutBtn.innerHTML = "X";
        cutBtn.classList.add("cut-btn");
        newTask.appendChild(cutBtn);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("completed");
        saveData();
    } 
    else if(e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();