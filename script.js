const body = document.getElementById('gradient');
const css = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');

const init = () => {
	color1.value = '#2bc0e4';
	color2.value = '#eaecc6';
	body.style.background = `linear-gradient(to bottom, ${color1.value} 25%, ${color2.value} 75%)`;
	css.textContent = body.style.background + ';';
}

const setGradient = () => {
	body.style.background = `linear-gradient(to bottom, ${color1.value}, ${color2.value})`;
	css.textContent = body.style.background + ';';
}

init();

color1.addEventListener('input',setGradient);

color2.addEventListener('input', setGradient);



