import styles from './Section.module.css';

export class Section {
  #element;
  #title = '';
  #content;

  constructor() {
    this.#element = document.createElement('section');
    this.#element.classList.add(styles.root);
  }

  get element() {
    return this.#element;
  }

  set title(title) {
    this.#title = title;
  }

  set content(content) {
    this.#content = content;
  }

  #createContent() {
    this.#element.appendChild(this.#content);
  }

  render() {
    if (Boolean(this.#title)) {
      const title = document.createElement('h2');
      title.classList.add(styles.title);
      title.textContent = this.#title;
      this.#element.appendChild(title);
    }

    this.#createContent();
  }
}
