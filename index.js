var readlineSync = require("readline-sync");

var question1 = {
  "question": "Which Sport do I follow? ",
  "answer": "cricket"
};

var question2 = {
  "question": "Where am I from ? ",
  "answer": "hubli"
};

var question3 = {
  "question": "Which team do I support in IPL ? ",
  "answer": "rcb"
};

var question4 = {
  "question": "My favourite character from SUITS would be ? ",
  "answer": "donna"
};


function playGame(questions, username){
  var result = {"name": username, "score": 0};
  var score = 0;
  for(var i=0; i<questions.length; i++){
    question = questions[i].question;
    answer =  questions[i].answer;
    console.log("---------------------\n");
    var userAnswer = readlineSync.question(question);
    if(userAnswer.toLowerCase() === answer){
      score += 1;
      console.log("Correct Answer !!!");
    }
    else{
      console.log("Wrong Answer !!!");
    }
    console.log("Current Score : "+score);
  }
  result.score = score;
  return result;
}


function highScoreCheck(userScore, highScores){
  var res = userScore;
  var beatsHighScore = false;
  for(var i=0;i<highScores.length;i++){
    if(userScore.score > highScores[i].score){
      if(beatsHighScore){
        if (highScores[i].score > res.score){
          res = highScores[i];
        }
      }
      else{
          res = highScores[i];
      }
      beatsHighScore = true;
    }    
  }
  if(beatsHighScore){
    console.log("Congratulations you are now one of the High Scorers !!!!");
    console.log("Your Score : "+userScore.score);
    console.log("You have surpassed "+res.name+" with score "+res.score);
    console.log("Please send Screenshot of the same for the scores to be updated...!!!!");
    
  }
}

var questions = [question1,question2,question3,question4];
var highScores = [{"name":"Vijay", "score": 4}, {"name":"Ram", "score": 3}, {"name":"Ramesh", "score": 2}];

var userName = readlineSync.question("What's your Name ? : ");
console.log("Welcome  "+userName+" DO YOU KNOW Vijay ?");

var userScore = playGame(questions, userName);

console.log("\n----------------\n");
console.log("--------- Current High Scores -----------");
console.log("Name : Score");
for(var i=0;i<highScores.length;i++){
  console.log(highScores[i].name+" : "+highScores[i].score);
}

console.log("\n----------------\n");
highScoreCheck(userScore, highScores);
