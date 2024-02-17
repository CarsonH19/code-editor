import './style.css';

// Catching commonly used elements to minimize dom queries
const livePreviewFrame = document.getElementById('live-preview');
const htmlEditor = document.getElementById('html');
const cssEditor = document.getElementById('css');
const jsEditor = document.getElementById('js');

// Function to set up the live preview iframe and include necessary scripts
function initializeLivePreview() {
  livePreviewFrame.contentWindow.document.body.innerHTML = '';
  const styleElement = document.createElement('style');
  styleElement.setAttribute('id', 'live-preview-style');
  livePreviewFrame.contentWindow.document.head .appendChild(styleElement);
  const pagedJsScript = document.createElement('script');
  pagedJsScript.src = 'https://unpkg.com/pagedjs/dist/paged.legacy.polyfill.js';
  livePreviewFrame.contentWindow.document.head.appendChild(pagedJsScript); 
}

// Function to update the live preview iframe with the html code from editor
