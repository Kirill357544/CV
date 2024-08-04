import { classNames } from '../../utils/classNames';
import { Chip } from '../Chip/Chip';
import styles from './ExperienceCard.module.css';

export class ExperienceCard {
  #element;
  #startOfPeriod;
  #endOfPeriod;
  #position;
  #description;
  #responsibilities;
  #isLast;

  constructor(isLast = false) {
    this.#isLast = isLast;
    this.#element = document.createElement('div');
    this.#element.classList.add(...classNames(styles.root, this.#isLast && styles.last));
  }

  get element() {
    return this.#element;
  }

  set startOfPeriod(startOfPeriod) {
    if (startOfPeriod instanceof Date) {
      this.#startOfPeriod = `${startOfPeriod.toLocaleString('en-GB', { month: 'short', year: 'numeric' })}`;
    } else {
      this.#startOfPeriod = startOfPeriod;
    }
  }

  set endOfPeriod(endOfPeriod) {
    if (endOfPeriod instanceof Date) {
      this.#endOfPeriod = `${endOfPeriod.toLocaleString('en-US', { month: 'short', year: 'numeric' })}`;
    } else {
      this.#endOfPeriod = endOfPeriod;
    }
  }

  set position(position) {
    this.#position = position;
  }

  set description(description) {
    this.#description = description;
  }

  set responsibilities(responsibilities) {
    this.#responsibilities = responsibilities;
  }

  render() {
    this.#element.innerHTML = `
      <div class='title ${styles.title}'>
        <div class='${styles.period}'>
          <span>${this.#startOfPeriod}</span>
            &nbsp;-&nbsp;
          <span>${this.#endOfPeriod}</span>
        </div>
      </div>
      <div class='${styles.info}'>
        <div class='${styles.role}'>
          <span>${this.#position}</span>
          <span class='${styles.description}'>${this.#description}</span>
        </div>
        <div>
          <ul class='${styles.responsibilities}'>
            ${this.#responsibilities.map(responsibility =>
              `<li>${responsibility}</li>`
            ).join('')}
          </ul>
        </div>
      </div>
    `;

    if (this.#isLast) {
      const chip = new Chip();
      chip.label = 'most recent';
      chip.size = 'small';
      chip.variant = 'primary';
      chip.render();
      this.#element.querySelector('.title').appendChild(chip.element);
    }
  }
}
