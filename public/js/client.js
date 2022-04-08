const add = document.querySelector("#add");
const update = document.querySelector("#update");
const deletes = document.querySelector("#delete");
console.log(add);
add.addEventListener("click", async (event) => {
  event.preventDefault();
  const action = event.target.href;
  console.log(action);
  const response = await fetch(action, {
    method: "post",
    body: JSON.stringify({
      action,
    }),
    headers: {
      "Content-Type": "application/json",
      accept: "json",
    },
  });
});
