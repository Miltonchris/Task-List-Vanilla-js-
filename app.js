// Selectors 
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearButton = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

loadEventListeners();

function loadEventListeners() {
	form.addEventListener('submit', addTask);
	//removing with deligation
	taskList.addEventListener('click', removeTask);

	clearButton.addEventListener('click', clearAll);

	//Filter through tasks 
	filter.addEventListener('keyup', filterTasks);
}

function addTask(e) {
	if(taskInput.value === ''){
		alert('Please add your task');
}
		// create item 
		const li = document.createElement('li');
		li.className = 'collection-item';
		//append text node to the li 
		li.appendChild(document.createTextNode(taskInput.value));

		const link = document.createElement('a');
		link.className = 'delete-item secondary-content';

		//remove icon on the link
		link.innerHTML = '<i class ="fa fa-remove"></i>';
		//appen link to the li 
		li.appendChild(link);

		//append child to the list 

		taskList.appendChild(li);

		//save to local storage 
		storeTasksLocal(taskInput.value);

		taskInput.value = '';
		
		e.preventDefault();
}

function storeTasksLocal(task){
	let tasks;

	if(localStorage.getItem('tasks') === null){
		tasks = [];
	}else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}
	tasks.push(task);

	localStorage.setItem('tasks', JSON.stringify(tasks));
}

// removing task 
function removeTask(e) {
	if(e.target.parentElement.classList.contains('delete-item')){
		if(confirm('Are you sure?')){
			e.target.parentElement.parentElement.remove();
		}
	}
}

//Clear ALL 
function clearAll() {
	while(taskList.firstChild) {
		taskList.removeChild(taskList.firstChild);
	}
}

// filter
function filterTasks(e) {
	const text = e.target.value.toLowerCase();

	document.querySelectorAll('.collection-item').forEach(function (task){
		const item = task.firstChild.textContent;
		if (item.toLowerCase().indexOf(text) != -1) {
			task.style.display = 'block';
		}else{
			task.style.display = 'none';
		}
	});
}