
const params = new URLSearchParams(window.location.search);
const userChoice = params.get('userChoice');
const computerChoice = compInput();

// function to select random computer choice
function compInput(){
    var imgArr=['paper','scissor','stone'];
    var number = Math.floor(Math.random()*imgArr.length);  
    return imgArr[number]; 
}

// function to redirect to win,lose or tie page
function finalLogic(userChoice,computerChoice){
    const queryParams = `?userChoice=${userChoice}&computerChoice=${computerChoice}&computerChoiceClass=${computerChoice}&userChoiceClass=${userChoice}`;
    if (userChoice === computerChoice) {
        window.location.href = 'tie.html'+ queryParams;
      } else if (
        (userChoice === 'stone' && computerChoice === 'scissor') ||
        (userChoice === 'paper' && computerChoice === 'stone') ||
        (userChoice === 'scissor' && computerChoice === 'paper')
      ) {
        window.location.href = 'win.html'+queryParams;
      } else {
    
        window.location.href = 'lose.html'+queryParams;
      }
      
}

// function to determine winner based on user and computer choice
function determineWinner(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
        return 'tie';
        } else if (
        (userChoice === 'stone' && computerChoice === 'scissor') ||
        (userChoice === 'paper' && computerChoice === 'stone') ||
        (userChoice === 'scissor' && computerChoice === 'paper')
        ) {
        return 'user';
        } else {
        return 'computer';
        }
}

// function to update score on scorecard
function updateScore(result) {
        let userScore = parseInt(localStorage.getItem('user-score')) || 0;
        let computerScore = parseInt(localStorage.getItem('computer-score')) || 0;
        
        if (result === 'user') {
          ++userScore;
        } else if (result === 'computer') {
          ++computerScore;
        }
        
        localStorage.setItem('user-score', userScore);
        localStorage.setItem('computer-score', computerScore);
        
        document.getElementById('user-score').textContent = userScore;
        document.getElementById('computer-score').textContent = computerScore;

}

//function calls
finalLogic(userChoice, computerChoice);
const result = determineWinner(userChoice, computerChoice);
updateScore(result);