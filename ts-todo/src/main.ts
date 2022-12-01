import { v4 as uuidv4 } from "uuid";

type Task = {
  id: string
  title: string
  completed: boolean
  createdAt: Date
};

const list = document.querySelector<HTMLUListElement>("#list");
const form = document.querySelector("#new-task-form") as HTMLButtonElement | null;
const input = document.querySelector<HTMLInputElement>("#new-task-title");

function addListItem(task: Task) {
  const item = document.createElement("li");
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  label.append(checkbox, task.title);
  item.append(label);
  list?.append(item);
}

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input?.value == "" || input?.value == null) return;

  const newTask = {
    id: uuidv4(),
    title: input.value,
    completed: false,
    createdAt: new Date()
  };

  addListItem(newTask);
})

