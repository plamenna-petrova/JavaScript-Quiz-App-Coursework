
const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const scorePercent = document.getElementById("scorePercent");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const HIGHEST_POSSIBLE_SCORE = 100;

var scoredPoints = mostRecentScore;

var scoredPercentage = ((Number(mostRecentScore)/Number(HIGHEST_POSSIBLE_SCORE))*100) + "%";

finalScore.innerHTML = scoredPercentage;

username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.value;     
});

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        // score: Math.floor(Math.random()*100)
        score: scoredPoints,
        percentage: scoredPercentage,
        name: username.value
    };
    highScores.push(score);
    highScores.sort( (a,b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.assign("../html/index.html");
};

