document.getElementById('next-button').addEventListener('click', function () {
  const vehicle = document.querySelector('input[name="vehicle"]:checked');
  const position = document.querySelector('input[name="position"]:checked');
  const errorMessage = document.getElementById('errorMessage');
  const scheduleSection = document.getElementById('scheduleSection');
  
  errorMessage.innerHTML = '';

  if (vehicle?.value === 'yes' && position?.value === 'yes') {
    scheduleSection.style.display = 'block';
    scheduleSection.scrollIntoView({ behavior: 'smooth' });
    errorMessage.style.display = 'none';
  } else {
    scheduleSection.style.display = 'none';
    errorMessage.innerHTML =
      'You need to answer "Yes" to both questions to proceed.';
    errorMessage.style.display = 'block';
  }
});
