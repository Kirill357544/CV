import styles from './Chip.module.css';

export class Chip {
  #element;
  #size = 'small';
  #variant = 'primary'
  #label = '';

  constructor() {
    this.#element = document.createElement('span');
    this.#element.classList.add(styles.root);
  }

  get element() {
    return this.#element;
  }

  set size(size) {
    this.#element.classList.remove(styles[this.#size]);
    this.#element.classList.add(styles[size]);
    this.#size = size;
  }

  set variant(variant) {
    this.#element.classList.remove(styles[this.#variant]);
    this.#element.classList.add(styles[variant]);
    this.#size = variant;
  }

  set label(label) {
    this.#label = label;
  }

  render() {
    this.#element.innerHTML = `
      ${this.#label}
    `;
  }
}
