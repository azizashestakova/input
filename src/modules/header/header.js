'use strict';

export default class Header {
  constructor() {
    let currentPosition = document.documentElement.scrollTop;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop > currentPosition && document.documentElement.scrollTop > 0 || document.documentElement.scrollTop === 0) {
        header.classList.remove('active');
        currentPosition = document.documentElement.scrollTop;
      } else if (document.documentElement.scrollTop < currentPosition && document.documentElement.scrollTop > 0) {
        header.classList.add('active');
        currentPosition = document.documentElement.scrollTop;
      } else {
        return false;
      }
    });
  }
}