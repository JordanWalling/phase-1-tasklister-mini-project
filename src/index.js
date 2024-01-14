document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const tasksArray = [];
  const ul = document.querySelector("#tasks");
  const form = document.getElementById("create-task-form");

  // submit form listener
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const inputValue = document.querySelector("#new-task-description").value;
    const priority = document.querySelector(".priority");

    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.textContent = "x";
    delBtn.addEventListener("click", (e) => {
      e.target.parentElement.remove();
    });

    li.className = priority.value;
    li.textContent = inputValue;
    li.appendChild(delBtn);

    tasksArray.push(li);
    console.log(tasksArray);
    form.reset();

    tasksArray.sort((a, b) => {
      const priorityOrder = { high: 1, medium: 2, low: 3 };
      return priorityOrder[a.className] - priorityOrder[b.className];
    });
    ul.innerHTML = "";

    tasksArray.map((task) => {
      ul.appendChild(task);
    });
  });
});
