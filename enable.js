const removeDisabled = el =>
  el.removeAttribute('disabled');

document
  .querySelectorAll('[disabled]')
  .forEach(removeDisabled);
