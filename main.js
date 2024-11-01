"use strict";
const input = document.querySelector('input');
const shuffled = document.querySelector('ul');

function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.trunc(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	
	return array;
}

function toItem(string) {
	let li = document.createElement("li");
	li.textContent = string;
	return li;
}

input.onchange = function() {
	let reader = new FileReader();
	reader.onload = () => {
		shuffled.innerHTML = '';
		shuffled.append(
			...shuffle(event.target.result.trim().split(/\s+^\s*/m)).map(toItem)
		);
	}
	reader.readAsText(input.files[0]);
}

if (input.value) input.onchange();
