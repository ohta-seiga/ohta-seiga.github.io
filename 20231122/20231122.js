function doFetch(){
  fetch("https://morimorihoge.github.io/teu2023f/tweets.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        let answerHtml = "<ul>";
        json.forEach(function(tweet){
          answerHtml += `<li>${tweet.name}</li>`;
        });
        answerHtml += "</ul>";
        document.querySelector('#answer').innerHTML = answerHtml;
      });
}

let doZipSearch = () => {
  let zipcode = document.querySelector('#zipcode').value;
  fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipcode}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        let answerHtml = "<ul>";
        console.log(json);
        json.results.forEach((result) => {
          answerHtml += `<li>${result.address1}${result.address2}${result.address3}</li>`;
        })
        answerHtml += "</ul>";
        document.querySelector('#answer').innerHTML = answerHtml;
      });
}