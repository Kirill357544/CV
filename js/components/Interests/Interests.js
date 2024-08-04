import { Chip } from '../Chip/Chip';

import styles from './Interests.module.css';

export class Interests {
  #element;
  #interests = [];

  constructor() {
    this.#element = document.createElement('div');
    this.#element.classList.add(styles.root);
  }

  get element() {
    return this.#element;
  }

  set interests(interests) {
    return this.#interests = interests;
  }

  #createInterests() {
    return this.#interests.map(interest => {
      const chip = new Chip();
      chip.size = 'large';
      chip.variant = 'secondary';
      chip.label = interest;
      chip.render();
      return chip.element;
    });
  }

  render() {
    this.#createInterests().forEach(chip => {
      this.#element.appendChild(chip);
    });
  }
}
