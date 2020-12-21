// create DOM variables
const app = document.querySelector('.app');
const taskInput = document.getElementById('task');
const form = document.getElementById('form');
const addTaskButton = document.querySelector('.task-btn');
const collection = document.querySelector('.collection');
const clearAllButton = document.querySelector('.clear-all');

// call load events function
loadEventListeners();
// load all the event listeners
function loadEventListeners() {
  form.addEventListener('submit', addTask);
  collection.addEventListener('click', deleteTask);
  clearAllButton.addEventListener('click', clearTasks);
}

// add task
function addTask(e) {
  if (taskInput.value === '') {
    alert('Please Enter a Task.');
  } else {
    // create li
    const li = document.createElement('li');
    // append text node to li
    li.append(document.createTextNode(taskInput.value));
    // add classes to li
    li.classList =
      'list-group-item d-flex justify-content-between align-items-center text-dark bg-light my-1';
    // create span
    const span = document.createElement('span');
    // add text content to span
    span.append(document.createTextNode('X'));
    // add classes to span
    span.classList = 'badge badge-danger badge-pill p-2 delete-item';
    // append span to li
    li.appendChild(span);
    // append li to collection
    collection.appendChild(li);
    // prevent default behavior
    e.preventDefault();
  }
  taskInput.value = '';
}

// delete task
function deleteTask(e) {
  if (e.target.className === 'badge badge-danger badge-pill p-2 delete-item') {
    if (confirm('Delete task?')) {
      e.target.parentElement.remove();
    }
  }
}

// clear tasks
function clearTasks(e) {
  collection.innerHTML = '';
}
