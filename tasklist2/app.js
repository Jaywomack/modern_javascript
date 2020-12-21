// Define UI Variables
const taskInput = document.getElementById('task-input');
const taskCollection = document.getElementById('collection');
const form = document.getElementById('form');
const clearAll = document.getElementById('clear-tasks');

// Load all of the event listeners
loadEventListeners();
// Load Event Listeners
function loadEventListeners() {
  form.addEventListener('submit', addTask);
  clearAll.addEventListener('click', clearTask);
  taskCollection.addEventListener('click', removeTask);
}

// Add task
function addTask(e) {
  if (taskInput.value === '') {
    alert('Please create a task.');
    e.preventDefault();
  } else {
    // Create the li
    const li = document.createElement('li');
    // Add classes
    li.className = 'collection-item';
    // append text content
    li.appendChild(document.createTextNode(taskInput.value));
    // Create <a> tag
    const link = document.createElement('a');
    // add classes
    link.className = 'delete-item secondary-content';
    // add innerHTML to the a tag
    link.innerHTML = '<i class = "fa fa-remove"></i>';
    // append the a tag to the li
    li.appendChild(link);
    // append the li to the ul
    taskCollection.appendChild(li);
    // Clear input
    taskInput.value = '';
    // prevent default behavior on submit

    e.preventDefault();
  }
}

// Remove task
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Delete item?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

// Clear task
function clearTask(e) {
  if (confirm('Delete all tasks?')) {
    while (taskCollection.firstChild) {
      taskCollection.removeChild(taskCollection.firstChild);
    }
  }
}
