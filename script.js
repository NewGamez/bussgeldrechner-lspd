const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const totalDisplay = document.getElementById('total');

function updateTotal() {
  let total = 0;
  checkboxes.forEach(cb => {
    if (cb.checked) {
      total += parseInt(cb.getAttribute('data-amount'));
    }
  });
  totalDisplay.textContent = `Gesamt: ${total} €`;
}

checkboxes.forEach(cb => {
  cb.addEventListener('change', updateTotal);
});
