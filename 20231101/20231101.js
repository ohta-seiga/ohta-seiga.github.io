function doCheckAnswers(){
  let answer = document.querySelector('#answer');
  let input = document.querySelector('#input_string').value;

  // answer-listのうちのどれか一つに一致したら正解
  let output;
  let answerList = document.querySelectorAll('ul.answer-list li');
  let isCorrect = false; // 正解したかどうかのフラグ
  Array.from(answerList).forEach(function(answer){
    if(answer.innerHTML == input){
      isCorrect = true;
    }
  });
  if(isCorrect){
    output = '正解';
  }else{
    output = '不正解';
  }
  answer.innerHTML = output;
}

