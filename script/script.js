document.addEventListener('DOMContentLoaded', function() {
	let result;
	let length = document.getElementById('length');
	let popup = document.querySelector('.popup');
	let width = document.getElementById('width');

	let calculate = document.getElementById('calculate');
	calculate.onclick = function() {
		if (popup.classList.contains('animation_popup')) {
			popup.classList.remove('animation_popup');
			popup.classList.add('scale');
			
			setTimeout (function() {
			  popup.classList.remove('scale');
		      popup.classList.add('animation_popup');
		    }, 500);
		} else {
			popup.classList.add('animation_popup');
		}
		setTimeout (function() {
			result = parseInt(length.value) * parseInt(width.value);
			let packs6 = result / 6;
			let packs8 = result / 8;
			document.getElementById('packs6').innerHTML = packs6.toFixed(2);
			document.getElementById('packs8').innerHTML = packs8.toFixed(2);

			console.log('Результат: ' + result);
			console.log('Результат пачек по 6шт: ' +  packs6.toFixed(2));
			console.log('Результат пачек по 8шт: ' + packs8.toFixed(2));
		}, 400);	
	};
});