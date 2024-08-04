import { classNames } from '../../utils/classNames';
import styles from './EducationCard.module.css';

export class EducationCard {
  #element;
  #periodStart;
  #periodEnd;
  #title;
  #tags;
  #institution;
  #isFavorite = false;

  constructor() {
    this.#element = document.createElement('div');
    this.#element.classList.add(styles.root);
  }

  get element() {
    return this.#element;
  }

  set isFavorite(isFavorite) {
    if (isFavorite) {
      this.#element.classList.add(styles.favorite);
    } else {
      this.#element.classList.remove(styles.favorite);
    }

    this.#isFavorite = isFavorite;
  }

  set periodStart(periodStart) {
    if (periodStart instanceof Date) {
      this.#periodStart = `${periodStart.toLocaleString('en-GB', { month: 'short', year: 'numeric' })}`;
    } else {
      this.#periodStart = periodStart;
    }
  }

  set periodEnd(periodEnd) {
    if (periodEnd instanceof Date) {
      this.#periodEnd = `${periodEnd.toLocaleString('en-US', { month: 'short', year: 'numeric' })}`;
    } else {
      this.#periodEnd = periodEnd;
    }
  }

  set title(title) {
    this.#title = title;
  }

  set tags(tags) {
    this.#tags = tags;
  }

  set institution(institution) {
    this.#institution = institution;
  }

  render() {
    this.#element.innerHTML = `
      <div class='${styles.period}'>
        <span>${this.#periodStart}</span>
          &nbsp;-&nbsp;
        <span>${this.#periodEnd}</span>
      </div>
      <span class='${styles.title}'>${this.#title}</span>
      <p class='${styles.tags}'>${this.#tags.join(' ')}</p>
      <span class='${styles.institution}'>${this.#institution }</span>
    `;
  }
}
