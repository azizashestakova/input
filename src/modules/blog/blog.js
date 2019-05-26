'use strict';

export default class Blog {
  constructor() {
    const strings = [...document.querySelectorAll('.blog__post-description')];
    strings.forEach(string => {
      if (string.innerHTML.length > 100) {
        string.innerHTML = `${string.innerHTML.substring(0, 100)}...`;
      }
    });
  }
}