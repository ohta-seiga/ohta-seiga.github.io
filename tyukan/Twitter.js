let answer = document.querySelector('#answer');

let outputHtml = '<ul>';

// Array.forEach()を使って書く
let appendLi = function(tweet){
  outputHtml += `<hr><ol><img src='${tweet.avatar}' width="8%" alt="imege"> 
  <span><b>${tweet.name}</b>: ${tweet.message} <i>${tweet.tweetedAt}</i></span></ol>`;
}
tweets.forEach(appendLi);

function btAll(){
  let element = document.querySelector("#answer");

  // Clear outputHtml before appending new content
  outputHtml = '<ul>';

  // Use forEach to iterate over the specified indices
  tweets.forEach(appendLi);
  outputHtml += '</ul>';
  element.innerHTML = outputHtml;
}
function btSanrou() {
  let element = document.querySelector("#answer");

  // Clear outputHtml before appending new content
  outputHtml = '<ul>';

  // Define the indices to display (0, 3, 4)
  let indicesToDisplay = [0, 4, 10];

  // Use forEach to iterate over the specified indices
  indicesToDisplay.forEach(function(index) {
    let tweet = tweets[index];
    appendLi(tweet);
  });

  outputHtml += '</ul>';
  element.innerHTML = outputHtml;
}
function btZirou() {
  let element = document.querySelector("#answer");

  // Clear outputHtml before appending new content
  outputHtml = '<ul>';

  // Define the indices to display (0, 3, 4)
  let indicesToDisplay = [1, 2, 9];

  // Use forEach to iterate over the specified indices
  indicesToDisplay.forEach(function (index) {
    let tweet = tweets[index];
    appendLi(tweet);

  });

  outputHtml += '</ul>';
  element.innerHTML = outputHtml;
}
function btTarou(){
  let element = document.querySelector("#answer");

  // Clear outputHtml before appending new content
  outputHtml = '<ul>';

  // Define the indices to display (0, 3, 4)
  let indicesToDisplay = [3, 5, 6, 7, 8];

  // Use forEach to iterate over the specified indices
  indicesToDisplay.forEach(function(index) {
    let tweet = tweets[index];
    appendLi(tweet);

  });

  outputHtml += '</ul>';
  element.innerHTML = outputHtml;
}


outputHtml += '</ul>';
answer.innerHTML = outputHtml;

