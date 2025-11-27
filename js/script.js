let todos = JSON.parse(localStorage.getItem("todos")) || [];
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

function save() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function render() {
  list.innerHTML = "";
  todos.forEach((t, i) => {
    const div = document.createElement("div");
    div.className = "todo-item";
    div.innerHTML = `
<span>${t}</span>
<button onclick="edit(${i})">Sửa</button>
<button onclick="removeTodo(${i})">Xóa</button>
`;
    list.appendChild(div);
  });
}

function addTodo() {
  if (input.value.trim() === "") return;
  todos.push(input.value.trim());
  input.value = "";
  save();
  render();
}

document.getElementById("add-btn").onclick = addTodo;

function removeTodo(i) {
  todos.splice(i, 1);
  save();
  render();
}

function edit(i) {
  const newText = prompt("Sửa công việc:", todos[i]);
  if (newText !== null && newText.trim() !== "") {
    todos[i] = newText.trim();
    save();
    render();
  }
}

render();




