const input = document.getElementById("todo-input");
const button = document.getElementById("add-btn");
const list = document.getElementById("todo-list");
const clearBtn = document.getElementById("clear-btn");
const stats = document.getElementById("todo-stats");

function updateStats() {
  const count = list.children.length;
  stats.textContent = `Total Tugas: ${count}`;
}

function clearAll() {
  list.innerHTML = "";
  updateStats();
}

clearBtn.addEventListener("click", clearAll)

function addTodo() {
  const text = input.value;
  
  if (text === "") return;

  const li = document.createElement("li");
  li.textContent = text;

  li.addEventListener("dblclick", () => {
    li.remove();
    updateStats();
  });

  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  })

  list.appendChild(li);
  updateStats();

  input.value = ""
  input.focus();
}

button.addEventListener("click", addTodo);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
})