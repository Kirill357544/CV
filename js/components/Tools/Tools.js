import { Chip } from '../Chip/Chip';
import styles from './Tools.module.css';

export class Tools {
  #element;
  #title = '';
  #tools = [];

  constructor() {
    this.#element = document.createElement('div');
    this.#element.classList.add(styles.root);
  }

  get element() {
    return this.#element;
  }

  set title(title) {
    this.#title = title;
  }

  set tools(tools) {
    this.#tools = tools;
  }

  #createChip() {
    const chip = new Chip();
    chip.label = this.#title;
    chip.size = 'small';
    chip.variant = 'tertiary';
    chip.element.classList.add(styles.title);
    chip.render();
    return chip.element;
  }

  render() {
    this.#element.innerHTML = `
      ${this.#createChip().outerHTML}
      <ul class='${styles.tools}'>
        ${this.#tools.map(tool =>
          `<li class='${styles.tool}'>
            <img alt='tool' src='${tool}' />
          </li>`
        ).join('')}
      </ul>
    `;
  }
}
