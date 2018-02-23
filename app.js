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

		//clear input 
		taskInput.value = '';
		
		e.preventDefault();
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
