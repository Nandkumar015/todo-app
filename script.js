function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const taskList = document.getElementById("taskList");
  const li = document.createElement("li");

  li.textContent = taskText;

  // Toggle completed
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // Right-click to delete
  li.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    li.remove();
  });

  taskList.appendChild(li);
  taskInput.value = "";
}
