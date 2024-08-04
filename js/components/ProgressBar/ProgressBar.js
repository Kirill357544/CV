import styles from './ProgressBar.module.css';

export class ProgressBar {
  #element;
  #title = '';
  #progress = 0;

  constructor() {
    this.#element = document.createElement('div');
    this.#element.classList.add(styles.root);
  }

  get element() {
    return this.#element;
  }

  set title(title) {
    return this.#title = title;
  }

  set progress(progress) {
    return this.#progress = progress;
  }

  render() {
    this.#element.innerHTML = `
      <span class='${styles.title}'>${this.#title}</span>
      <div class='${styles.progress}' style='width:${this.#progress}%'></div>
    `;
  }
}
