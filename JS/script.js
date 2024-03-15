// function for the modal(RULES button)
var modal = document.getElementById("myModal");
var btn = document.getElementById("rules");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
        modal.style.display = "block";
}

span.onclick = function() {
        modal.style.display = "none";
}

// function to get the user's input from home page
function select(userChoice) {
        window.location.href = `/HTML/result.html?userChoice=${userChoice}`;
}

//logic to display the scorecard working
document.getElementById('player-score').textContent = localStorage.getItem('user-score') || 0;
document.getElementById('computer-score').textContent = localStorage.getItem('computer-score') || 0;


//To clear the local Storage uncomment below
// localStorage.clear()


