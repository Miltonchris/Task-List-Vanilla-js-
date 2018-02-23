// localStorage.setItem('name', 'Jess');
// localStorage.setItem('age', '19');


//set session
// sessionStorage.setItem('name', 'Jess');

//remove from local
// localStorage.removeItem('name');

// get from storage with a variable 
const name = localStorage.getItem('name');
const age = localStorage.getItem('age');

// // clear loca storage
// localStorage.clear();

// console.log(`Name: ${name}`, `Age: ${age}`);

document.querySelector('form').addEventListener('submit', function(e){
  const task = document.getElementById('task').value;

  localStorage.setItem('task', task);
  e.preventDefault();
  alert('Task saved');
});