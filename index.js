const state = {
  bank: [],
  evens: [],
  odds: [],
};

function isEven(n) {
  return n % 2 === 0;
}
function inputForm {
  const div = document.createElement("div");
  const label = document.createElement("label");
  label.textContent = "Add number"
  const input = document.createElement("input");
  input.type = "number";
  const button = document.createElement("button");
  button.textContent = "add";
  button.addEventListener('click', () => {
    const value = parseInt(input.value);
    if (!isNaN(value)) {
      state.bank.push(value);
      input.value = "";
      render();
  }}
);
form.appendChild(label);
  form.appendChild(input);
  form.appendChild(button);
  return form;
}
function sortAll (){
    const controls = document.createElement("div");
  
    const sortOne = document.createElement("button");
    sortOne.textContent = "Sort 1";
    sortOne.addEventListener("click", () => {
      if (state.bank.length > 0) {
        const num = state.bank.shift();
        isEven(num) ? state.evens.push(num) : state.odds.push(num);
        render();
      }
    });
}
function NumberListComponent(titleText, numbers) {
  const container = document.createElement("div");

  const title = document.createElement("h2");
  title.textContent = titleText;
  container.appendChild(title);

  numbers.forEach((num) => {
    const input = document.createElement("input");
    input.type = "number";
    input.value = num;
    input.readOnly = true;
    input.classList.add("number-input");
    container.appendChild(input);
  });

  return container;
}
function render() {
  document.body.innerHTML = ""; // Clear document

  document.body.appendChild(InputFormComponent());
  document.body.appendChild(SortControlsComponent());
  document.body.appendChild(NumberListComponent("Bank", state.bank));
  document.body.appendChild(NumberListComponent("Even", state.evens));
  document.body.appendChild(NumberListComponent("Odd", state.odds));
}

render();