const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];

	fruit.forEach( val => {
		val = val.toLowerCase();
		if (val.includes(str)){
			results.push(val);
		}
	});

	return results;
}

function searchHandler(e) {
	const inputValue = document.querySelector('#fruit').value;

	showSuggestions(search(inputValue), inputValue);
}

function showSuggestions(results, inputVal) {
	suggestions.innerHTML = '';
	if (inputVal === ''){
		suggestions.innerHTML = '';
	} else {
		results.forEach( fruit => {
			const newSuggestion = document.createElement('li');
			newSuggestion.innerText = fruit;
			newSuggestion.addEventListener('click', useSuggestion);
			suggestions.appendChild(newSuggestion);
		});
	}
}

function useSuggestion(e) {
	let clickedLi = e.target;
	let inputValue = document.querySelector('#fruit').value;
	input.value = clickedLi.innerText;
	console.log(clickedLi.innerText);
	console.log('inputValue = ' + inputValue)
}

input.addEventListener('keyup', searchHandler);