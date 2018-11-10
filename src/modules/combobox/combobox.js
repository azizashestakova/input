'use strict';

export default class Combobox {
	constructor() {
		this.combobox = document.getElementById('combobox');
		if(this.combobox) {			
			this.dropdown 	= this.combobox.querySelector('.combobox__dropdown');
			this.list 	  	= this.combobox.querySelector('.combobox__list');
			this.input 			= this.combobox.querySelector('.combobox__field');
      let ajax = new XMLHttpRequest();
      ajax.open('GET', `/data/combobox${this.combobox.dataset.type === '1' ? '_50' : ''}.json`, true);
      ajax.send();
      ajax.onload = e => {
				this.data = JSON.parse(ajax.responseText);
				this.render(this.data);
				this.active();
				this.search();
				this.placeholder();
			};
		}
	}
	render(data) {
		let html = '';
		for(let value of data) html += `<li class="combobox__list-item" data-id="${value.id}">${value.city}</li>`;
		this.list.innerHTML = html;		
	}
	active() {
		if(this.combobox.dataset.type === '1') {
			this.combobox.classList.add('combobox_50');
			this.input.addEventListener('click', () => this.dropdown.classList.add('combobox__dropdown_active'));
		} else {
			this.input.addEventListener('keyup', event => {
				let value = event.target.value;
				this.dropdown.classList[value ? 'add' : 'remove']('combobox__dropdown_active');
			});
		}
		document.addEventListener('click', event => {
      if(!event.target.closest('#combobox')) this.dropdown.classList.remove('combobox__dropdown_active');
		});
	}
	search() {
		this.input.addEventListener('keyup', event => {
			let value = event.target.value;
			console.log(this.data);
			let data = this.data.filter(element => element.city.indexOf(value) !== -1);
			this.render(data);
		});
	}
	placeholder() {
		if(this.combobox.dataset.type === '1') {
			this.input.placeholder = 'Начните вводить код или название';
		} else {
			this.input.addEventListener('focus', event => {
				event.target.placeholder = 'Начните вводить код или название';
			});
			this.input.addEventListener('blur', event => {
				event.target.placeholder = 'Введите или выберите из списка';
			});
		}
	}
}