# JavaScript Based Technologies Quiz App Coursework

## Idea and implementation

The project represents a quiz with a limited time for answering the given questions. The questions are fetched from the Open Trivia DB API. The screen loads 
a single question, which once answered within the time limit, increases the score with 10, in case the answer is correct, or stores the previous score count, when it comes to 
answering wrongly. A correct answer is colored in grean and an incorrect one - in red. The quiz ends either when answers are given to all the questions and the countdown is still on or
when the coundown reaches 0 seconds and hence the player has to stop playing the quiz abruptly. In the latter case the points reached before the time has ran out are taken into account.
In addition, on the main page of the quiz, there is button, which redirects to the rules of the game. The rules can be accessed via an accordion. Having gone through the quiz, the user
is shown a page, where the calculated scored percentage of the right answers is visualised and there are three options to choose : to enter an username and save it, to quit to the homepage or to play again. By choosing the option of
entering a username, the following data : the scored points, the scored percentage and the username is pushed to the local storage and formatted as json, where it is sorted by the taken values. Given that a player's score is
high enough, the player's name, the score and percentage will be visible by clicking on the high scores button on the home page. The high scores section saves the five highest results ordered
descendingly. Futhermore, during the game the points are refreshed after every question and there is a progress loading bar to display the progress reached so far.
