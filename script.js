// Task 0: First Script
console.log("Student: Kaussar, Group: MT2406");
alert("Hello teacher, this is my defense!");

// Task 1: Variables & Operators
let name = "Student";
let age = 18;
let isStudying = true;

console.log(`Name: ${name}, Age: ${age}, Studying: ${isStudying}`);
console.log("Age + 5 = ", age + 5);

// Task 2: Changing Content
const changeTextBtn = document.getElementById("changeTextBtn");
const paragraph = document.getElementById("paragraph");

changeTextBtn.addEventListener("click", () => {
    paragraph.textContent = "I'm not joking, I really wanna go home!";
});

// Task 3: Changing Styles
const styleBox = document.getElementById("styleBox");
const changeBgBtn = document.getElementById("changeBgBtn");
const changeFontBtn = document.getElementById("changeFontBtn");

changeBgBtn.addEventListener("click", () => {
    styleBox.style.backgroundColor =
        styleBox.style.backgroundColor === "pink" ? "#fff" : "pink";
});

changeFontBtn.addEventListener("click", () => {
    styleBox.style.fontSize =
        styleBox.style.fontSize === "20px" ? "16px" : "20px";
});

// Task 4: Creating & Removing Elements
const addItemBtn = document.getElementById("addItemBtn");
const removeItemBtn = document.getElementById("removeItemBtn");
const itemList = document.getElementById("itemList");

addItemBtn.addEventListener("click", () => {
    const newItem = document.createElement("li");
    newItem.textContent = "Car";
    itemList.appendChild(newItem);
});

removeItemBtn.addEventListener("click", () => {
    if (itemList.lastElementChild) {
        itemList.removeChild(itemList.lastElementChild);
    }
});

// Task 5: Mouse Events (Improved text effect)
const colorBox = document.getElementById("colorBox");
const hoverText = document.getElementById("hoverText");

colorBox.addEventListener("mouseover", () => {
    colorBox.style.backgroundColor = "black";
    hoverText.textContent = "Whoa! Cool, right?";
});

colorBox.addEventListener("mouseout", () => {
    colorBox.style.backgroundColor = "#f6a3ce";
    hoverText.textContent = "Hover over me!";
});

// Task 6: Keyboard Events
const inputField = document.getElementById("inputField");
const displayInput = document.getElementById("displayInput");

inputField.addEventListener("keyup", () => {
    displayInput.textContent = inputField.value;
});

// Task 7: Form Validation
const form = document.getElementById("simpleForm");
const error = document.getElementById("error");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.name.value || !form.email.value || !form.password.value) {
        error.textContent = "Please fill in all fields.";
    } else {
        error.textContent = "";
        alert("Form submitted successfully!");
        form.reset();
    }
});

// Task 8: Mini Project – To‑Do List
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
let tasks = [];

function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task.text;

        if (task.completed) li.classList.add("completed");

        li.addEventListener("click", () => {
            tasks[index].completed = !tasks[index].completed;
            renderTasks();
        });

        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            tasks.splice(index, 1);
            renderTasks();
        });

        li.appendChild(delBtn);
        taskList.appendChild(li);
    });
}

addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        tasks.push({ text: taskText, completed: false });
        taskInput.value = "";
        renderTasks();
    }
});
