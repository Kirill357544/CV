import { jsPDF } from 'jspdf';

export class DownloadButton {
  #element;

  constructor() {
    this.#element = document.createElement('button');
    this.#element.textContent = 'Download as .PDF';
    this.#element.addEventListener('click', () => {
      const doc = new jsPDF();
      doc.html(document.getElementById('cv'), {
        callback: function (doc) {
          doc.save('CV.pdf');
        }
      });
    });
  }

  get element() {
    return this.#element;
  }
}
