const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')
console.log(id)

const form = document.querySelector('.form')
form.elements.order_id.value = id
console.log(form)

// form.addEventListener('submit', (event) => {
// 	// event.preventDefault()
// 	console.log(event);
// })