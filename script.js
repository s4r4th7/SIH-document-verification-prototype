// DSentinel — upload interaction
// NOTE: There is no backend wired up yet. This shows a local mock preview
// so the flow feels real. Replace `mockExtract()` with a fetch() call to
// your OCR/extraction API once the backend exists.

const dropzone = document.getElementById('dropzone');
const fileInput = document.getElementById('fileInput');
const dropzoneHint = document.getElementById('dropzoneHint');
const resultEmpty = document.getElementById('resultEmpty');
const resultContent = document.getElementById('resultContent');
const resultDocType = document.getElementById('resultDocType');
const resultBadge = document.getElementById('resultBadge');
const fieldList = document.getElementById('fieldList');

dropzone.addEventListener('click', () => fileInput.click());

dropzone.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    fileInput.click();
  }
});

['dragenter', 'dragover'].forEach(evt => {
  dropzone.addEventListener(evt, (e) => {
    e.preventDefault();
    dropzone.classList.add('dragover');
  });
});
