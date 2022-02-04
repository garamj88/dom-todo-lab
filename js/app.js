
// 5. Create cached ele ref for each ele with its id - button, input, ul
  // moved toDoLi & toDoIpt back out to global for rstBtn
const sbmtBtn = document.getElementById('submit-button');
const rstBtn = document.getElementById('reset-button');
const toDoLi = document.getElementById('todo-list');
const toDoIpt = document.getElementById('todo-ipt');

// 6. addEventListner to the sbmtBtn to click evt, when clicked
sbmtBtn.addEventListener('click', function (evt) {

  // create a new element: li (= newLi)
  const newLi = document.createElement('li');
  // set new li to the input value
  newLi.textContent = toDoIpt.value;

  // Level-up 1:  do not add empty entry to the toDoLi => only add string that is not empty
  if (toDoIpt.value !== "") {
    // add the new li to/inside ul (=toDoLi)
    toDoLi.appendChild(newLi);
  }
  // reset input to an empty str
  toDoIpt.value = "";
});

// remove all to-do's of the ul
rstBtn.addEventListener('click', function(evt) {
  toDoLi.innerHTML = '';
})
