let activeStep = parseInt(sessionStorage.getItem('activeStep')) || 1;
const iframeIntroVideo = document.getElementById('introVideo');
const nextStepButton = document.getElementById('nextStepButton');
const introVideoWrapper = document.getElementById('introVideoWrapper');
const player = new Vimeo.Player(iframeIntroVideo);
const hasVehicle = document.querySelector(
  'input[name="vehicle"]:checked'
)?.value;
const hasUnderstood = document.querySelector(
  'input[name="position"]:checked'
)?.value;
const errorMessage = document.getElementById('errorMessage');
const scheduleStep = document.getElementById('scheduleStep');
const stepOne = document.getElementById('stepOne');
const questionnaireForm = document.forms['questionnaireForm'];

player.on('ended', function () {
  nextStepButton.disabled = false;
  stepOne.classList.add('active');
  nextStepButton.classList.add('bounce');
});

const activateStep2 = () => {
  introVideoWrapper.classList.add('hide');
  questionnaireForm.classList.add('show');
  nextStepButton.classList.remove('bounce');
  activeStep = 2;
  sessionStorage.setItem('activeStep', activeStep);
  nextStepButton.disabled = false;
  stepOne.classList.add('active');
};

const activateStep3 = () => {
  console.log('sada');
  questionnaireForm.classList.remove('show');
  questionnaireForm.classList.add('hide');
  scheduleStep.classList.add('show');
  errorMessage.innerHTML = '';
  errorMessage.style.display = 'none';
};

if (activeStep === 2) activateStep2();

nextStepButton.addEventListener('click', function () {
  if (activeStep === 1) {
    activateStep2();
  }

  // if (activeStep === 2) {
  //   if (hasVehicle === 'yes' && hasUnderstood === 'yes') {
  //     errorMessage.textContent = '';
  //     alert('Form submitted successfully!');
  //     questionnaireForm.submit(); // Manually submit the form
  //     activateStep3();
  //   } else {
  //     errorMessage.innerHTML =
  //       'You need to answer "Yes" to both questions to proceed.';
  //     errorMessage.style.display = 'block';
  //   }
  // }
});
