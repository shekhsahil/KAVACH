const fileInput = document.getElementById('file-input');
const addBtn = document.querySelector('.add-button');
const removeBtn = document.querySelector('.remove-button');

addBtn.addEventListener('click', () => {
  const newFileInput = document.createElement('input');
  newFileInput.type = 'file';
  newFileInput.name = 'file';
  newFileInput.multiple = true;
  fileInput.parentNode.insertBefore(newFileInput, fileInput.nextSibling);
});

removeBtn.addEventListener('click', () => {
  const fileInputs = document.querySelectorAll('input[type="file"]');
  if (fileInputs.length > 1) {
    fileInputs[fileInputs.length - 1].remove();
  }
});
