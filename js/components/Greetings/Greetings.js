import styles from './Greetings.module.css';

export class Greetings {
  #element;
  #greetings = '';
  #name = '';
  #position = '';

  constructor() {
    this.#element = document.createElement('div');
    this.#element.classList.add(styles.root);
  }

  get element() {
    return this.#element;
  }

  set greetings(greetings) {
    this.#greetings = greetings;
  }

  set name(name) {
    this.#name = name;
  }

  set position(position) {
    this.#position = position;
  }

  render() {
    this.#element.innerHTML = `
      <p class='${styles.greetings}'>${this.#greetings}</p>
      <div>
        <p class='name ${styles.name}'>${this.#name}</p>
        <p class='${styles.position}'>${this.#position}</p>
      </div>
    `;
  };
}
