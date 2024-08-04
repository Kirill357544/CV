import { Summary } from './pages/Summary/Summary.js';
import { DownloadButton } from './components/DownloadButton/DownloadButton.js';
import '../css/style.css';

const app = document.querySelector('#app');

function createSummary() {
  const summary = new Summary();
  const downloadButton = new DownloadButton();
  summary.render();
  app.appendChild(summary.element);
  app.appendChild(downloadButton.element);
}

createSummary();
