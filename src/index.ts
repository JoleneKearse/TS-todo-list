import { v4 as uuidv4 } from "uuid";

type Task = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
};

const list = document.querySelector<HTMLUListElement>("#list");
const form = document.getElementById("#new-task-form") as HTMLFormElement;
const input = document.querySelector<HTMLInputElement>("#new-task-title");

function addListItem(task: Task) {
  const item = document.createElement("li");
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  label.append(checkbox, task.title);
  item.append(label);
  list?.append(item);
  console.log(label);
}

form?.addEventListener("submit", (e) => {
  console.log(input?.value);
  e.preventDefault();

  if (!input?.value) return; // checks for all falsy values like "", undefined , null etc.

  const newTask = {
    id: uuidv4(),
    title: input.value,
    completed: false,
    createdAt: new Date()
  };

  addListItem(newTask);
});
