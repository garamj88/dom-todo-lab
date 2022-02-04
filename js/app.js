
// 5. Create cached ele ref for each ele with its id - button, input, ul
  // (moved input, ul inside the sbmtBtn)
const sbmtBtn = document.getElementById('submit-button');

// 6. addEventListner to the sbmtBtn to click evt, when clicked
sbmtBtn.addEventListener('click', function(evt) {
  const toDoIpt = document.getElementById('todo-ipt');

  // create a new element: li (= newLi)
  const newLi = document.createElement('li');  
  // set new li to the input value
  newLi.textContent = toDoIpt.value;
  
  // reset input to an empty str
  toDoIpt.value = "";

  const toDoLi = document.getElementById('todo-list');
  // add the new li to/inside ul (=toDoLi)
  toDoLi.appendChild(newLi);
});