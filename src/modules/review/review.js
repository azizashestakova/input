'use strict';

export default class Review {
  constructor() {
    this.start = null;
    this.current = 0;
    this.working = false;
    const dots = [...document.querySelectorAll('.review__dot-button')];
    const slider = document.querySelector('.review__slider');
    if (slider) {
      dots.forEach(dot => {
        dot.addEventListener('click', () => {
          if (this.working) return;
          this.working = true;
          const index = Number(dot.dataset.index);
          requestAnimationFrame(timestamp => this.animate(timestamp, slider, index));
        });
      });
    }
  }

  animate(timestamp, slider, index) {
    if (!this.start) this.start = timestamp;
    const progress = timestamp - this.start;
    slider.style.transform = `translateX(${-25 * this.current - 25 * (index - this.current) / 2000 * progress}%)`;
    if (progress < 2000) {
      requestAnimationFrame(timestamp => this.animate(timestamp, slider, index));
    } else {
      this.working = false;
      this.start = null;
      this.current = index;
    }
  }
}