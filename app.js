const inputEl = document.querySelector("#input");
const submitBtnEl = document.querySelector("#btn");
const formEl = document.querySelector("form");
const taskEl = document.querySelector(".task");
const taskWrapperEl = document.querySelector(".task-wrapper");
const macWrapperEl = document.querySelector(".mac-wrapper");
const maximiseEl = document.querySelector(".green");
console.log(maximiseEl);
const smallEl = document.querySelector(".yellow");
const dangerBtnEl = document.querySelector(".red");
const deleteAppEl = document.querySelector(".app-delete");


deleteAppEl.addEventListener("dblclick", ()=>{
  macWrapperEl.style.display = "block";
})

dangerBtnEl.addEventListener("click", ()=>{
  macWrapperEl.style.display = "none";
  console.log("clicked");
  deleteAppEl.style.display = "block";
})

smallEl.addEventListener("click", () => {
  macWrapperEl.style.maxWidth = "500px";
  formEl.style.flexDirection = "column";
});

maximiseEl.addEventListener("click", () => {
  macWrapperEl.style.maxWidth = "1110px";
  formEl.style.flexDirection = "row";
});

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
});

submitBtnEl.addEventListener("click", () => {
  if (inputEl.value === "") {
    window.alert("Input field cann't be empty. Please add a task...");
  } else {
    console.log("task added");
    const taskInput = inputEl.value;
    console.log(taskInput);

    const taskContainerEl = document.createElement("div");
    console.log(taskContainerEl);
    taskContainerEl.classList.add("task-container");
    taskWrapperEl.appendChild(taskContainerEl);
    const taskEl = document.createElement("input");
    taskEl.type = "text";
    taskEl.readOnly = true;
    taskEl.classList.add("task");
    taskContainerEl.appendChild(taskEl);
    taskEl.value = taskInput;

    const actionsEl = document.createElement("div");
    actionsEl.classList.add("actions");
    taskContainerEl.appendChild(actionsEl);
    const editActionEl = document.createElement("button");
    editActionEl.classList.add("action", "edit");
    actionsEl.appendChild(editActionEl);
    const editIconEl = document.createElement("i");
    editIconEl.classList.add("bx", "bx-edit");
    editActionEl.appendChild(editIconEl);
    const deleteActionEl = document.createElement("button");
    deleteActionEl.classList.add("action", "delete");
    actionsEl.appendChild(deleteActionEl);
    const deleteIconEl = document.createElement("i");
    deleteIconEl.classList.add("bx", "bx-x");
    deleteActionEl.appendChild(deleteIconEl);

    deleteActionEl.addEventListener("click", () => {
      taskWrapperEl.removeChild(taskContainerEl);
    });

    editActionEl.addEventListener("click", () => {
      editIconEl.classList.toggle("bx-save");
      if (taskEl.readOnly) {
        taskEl.readOnly = false;
        taskEl.focus();
        editIconEl.classList = "bx bx-save";
      } else {
        taskEl.readOnly = true;
        editIconEl.classList = "bx bx-edit";
      }
    });
  }
});
