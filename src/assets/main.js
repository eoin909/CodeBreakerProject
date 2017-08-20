let answer = document.getElementById('answer').value;
let attempt = document.getElementById('attempt').value;
let code = document.getElementById('code');
let guessingDiv = document.getElementById('guessing-div');
let message = document.getElementById('message');
let replayDiv = document.getElementById('replay-div');
let results = document.getElementById('results');


function guess() {
  let userGuess = document.getElementById('user-guess').value;

  if(answer == ''){
    setHiddenFields();
  }
  if(validateInput(userGuess)){
    attempt+=1;
    if(!getResults(userGuess)){
      if(attempt > 9){
        setMessage('You Lose! cunt :(');
        code.className += " failure";
        showAnswer();
      }else {
        setMessage("incorrect try again");
      }
  }
    else if (attempt<10){
      setMessage("you win cunt");
      code.className += " success";
      showAnswer();
    }
  }
}

function validateInput(string){
  if(string.toString().length!=4){
    setMessage('Guesses must be exactly 4 characters long.');
    return false;
  }
  else{
    return true;
  }
}

//sets hidden answer
function setHiddenFields(){
  answer = Math.floor(Math.random()*9999);
  answer =  answer.toString();

  while(answer.length<4){
    answer = "0" + answer;
  }
 
  if(attempt.toString() == ''){
    attempt=0;
  }
}

function setMessage(string){
  message.innerHTML = string;
}

function getResults(guess) {

    var input = guess.toString();
    answerString = answer.toString();
    let correct = 0;
   let html = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';

   for(var j=0; j<input.length; j++){
     if(input.charAt(j)==answerString.charAt(j)){
       html += '<span class="glyphicon glyphicon-ok"></span>';
       correct++;
     }
     else if (answerString.indexOf(input.charAt(j))> -1) {
       html += '<span class="glyphicon glyphicon-transfer"></span>';
     }else {
       html += '<span class="glyphicon glyphicon-remove"></span>';
     }
   }

   html += '</div></div>';
  results.innerHTML += html;

   if (correct==4){
     return true;
   }
   else {
     return false;
   }

}
function showAnswer() {
  code.innerHTML = answer;
  guessingDiv.style = "display:none";
  replayDiv.style = "display:block";
}
