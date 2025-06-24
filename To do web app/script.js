function addTask() {
  const taskInput = document.getElementById("task-input");
  const timeInput = document.getElementById("task-time");

  const taskText = taskInput.value.trim();
  const taskTime = timeInput.value;

  if (!taskText) return alert("Task cannot be empty!");

  const li = document.createElement("li");
  li.innerHTML = `
    <strong>${taskText}</strong>
    <br><small>${taskTime ? `⏰ ${new Date(taskTime).toLocaleString()}` : ''}</small>
    <div class="task-actions">
      <button onclick="toggleComplete(this)">✅</button>
      <button onclick="editTask(this)">✏️</button>
      <button onclick="deleteTask(this)">🗑️</button>
    </div>
  `;

  document.getElementById("task-list").appendChild(li);

  taskInput.value = "";
  timeInput.value = "";
}

function toggleComplete(btn) {
  btn.parentElement.parentElement.classList.toggle("completed");
}

function deleteTask(btn) {
  const li = btn.parentElement.parentElement;
  li.remove();
}

function editTask(btn) {
  const li = btn.parentElement.parentElement;
  const taskText = li.querySelector("strong").textContent;
  const taskInput = document.getElementById("task-input");
  const timeInput = document.getElementById("task-time");

  taskInput.value = taskText;
  timeInput.focus();
  li.remove();
}
