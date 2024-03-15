const params = new URLSearchParams(window.location.search);
const userChoice = params.get('userChoice');
const computerChoice = params.get('computerChoice');
const userChoiceClass = params.get('userChoiceClass');
const computerChoiceClass = params.get('computerChoiceClass');

const userChoiceImg = document.getElementById('userChoiceImg');
userChoiceImg.src = `../${userChoice}.svg`;
if (userChoiceClass) {
  userChoiceImg.classList.add(userChoiceClass);
}

const computerChoiceImg = document.getElementById('computerChoiceImg');
computerChoiceImg.src = `../${computerChoice}.svg`;
if (computerChoiceClass) {
  computerChoiceImg.classList.add(computerChoiceClass);
}

