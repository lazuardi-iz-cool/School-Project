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

  if (text.toLowerCase() === "gendies") {
    document.body.style.backgroundColor = "#8B0000";
    stats.style.color = "#FFD700";
    stats.textContent = "System Update: Gendies me-rewrite baris kode hidupku menjadi lebih bermakna :D.";
    
    setTimeout(() => {
      alert("Terima kasih karena telah membuatku 'terlihat'. Aku bukan lagi NPC/figuran, dan itu karenanmu.");
    }, 100);
    
    setTimeout(() => {
      document.body.style.backgroundColor = "#121212";
      stats.style.color = "#888";
      updateStats();
    }, 9000);
    input.value = "";
    return;
  }
  
  if (text === "") return;

  const li = document.createElement("li");
  li.textContent = text;

  li.addEventListener("dblclick", () => {
    li.remove();
    updateStats();
  });

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