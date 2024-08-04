import styles from './Avatar.module.css';

export class Avatar {
  #element;
  #url = '';

  constructor() {
    this.#element = document.createElement('div');
  }

  get element() {
    return this.#element;
  }

  set url(url) {
    this.#url = url;
  }

  render() {
    this.#element.innerHTML = `
      <img
        class='${styles.avatar}'
        alt='Profile avatar'
        src='${this.#url}'
      />
    `;
  }
}
