'use strict';

export default class Icon {
  constructor() {
    const icons = document.getElementById('hidden-svg');
    if (icons) {
      const url = icons.dataset.path;
      const ajax = new XMLHttpRequest();
      ajax.open('GET', url, true);
      ajax.send();
      ajax.onload = e => icons.innerHTML = ajax.responseText;
    }
  }
}