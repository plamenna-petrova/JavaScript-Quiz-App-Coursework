# JavaScript Based Technologies Quiz App Coursework

## Idea and implementation

The project represents a quiz with a limited time for answering the questions. The questions are fetched from the Open Trivia DB API. The screen loads 
a single question, which once answered within the time limit, increases the score with 10, in case the answer is correct, or stores the previous score count, when it comes to 
answering wrongly. A correct answer is colored in grean and an incorrect one - in red. The quiz ends either when answers are given to all the questions (thre are no more questions left for answering) and the countdown is still on or
when the coundown reaches 0 seconds and hence the player has to stop playing the quiz abruptly. In the latter case the points reached before the time has ran out are taken into account.
In addition, on the main page of the quiz, there is button, which redirects to the rules of the game. The rules can be accessed via an accordion. Having gone through the quiz, the user
is shown a page, where the calculated scored percentage of the right answers is visualised and there are three options to choose : to enter an username and save it, to quit to the homepage or to play again. By choosing the option of
entering a username, the following data : the scored points, the scored percentage and the username is pushed to the local storage and formatted as json, where it is sorted by the taken values. Given that a player's score is
high enough, the player's name, the score and percentage will be visible by clicking on the high scores button on the home page. The high scores section saves the five highest results ordered
descendingly. Futhermore, during the game the points are refreshed after every question and there is a progress loading bar to display the progress reached so far.

## How to configure the project

Open Visual Studio Code and install the Live Server extension. Click on the Go Live button below and the project will be hosted on a localhost port. Run the Live Server
from the index.html page, standing for the home layout.

## The project

The Quiz App is written in Vanilla JavaScript with no frameworks as addons.

## File Structure

The project is divided into separate folders : 

- css 
  - app.css - the main css file, responsible for styling the entire applciation
  - game.css - the css file, which styles the quiz game - the container of the questions and the questions themselves, the progress bar, the coundown
  - highscores.css - style for the list of the five ranked highscores
  - rules.css - style for the rules accordion
- html
  - end.html - the end of the quiz page layout file
  - game.html - the quiz game layout file
  - highscores.html - the highscores layout file
  - index.html - the home page layout file
  - rules.html - the rules accordion layout file
- js
  - api.js - example data from the Open Trivia DB API
  - end.js - the end page coordinating script - calculates the scored percentage and sets highscores to the local storage
  - game.js - the script, responsible for the execution of the quiz logic - the fetching of questions API and the mapping of the questions jsons to objects. The incorrect_answers json keys along with their corresponding values are copied to an array, using a spread operator. Then the correct_answer json property is spliced into the answerChoices array at a random position 1 - 4. The counting starts from 1, not from 0. Finally, the answerChoices are for eached and are given the choice property plus indexes. The formattedQuestions are returned. The startGame anonymous function loads a new question and initializes the timer. The getNewQuestions() function in turn checks whether the length of the questions is 0 and whether the questions counter has surpassed the max questions const value. Here the progress text and the progress bar are also updated. A question is fetched at a random index, the choices are for eached and the choice text is inserted at the correct places. By executing a choices foreach again, to the selected answer is attached the correct or incorrect class and the points are incremented or saved. The timer is complex and parses both minutes and seconds.
  - highscores.js - the script implements logic for the mapping of the local storage high scores jsons to objects and interpolating them to html list items
  - rules.js - the rules accordion script
