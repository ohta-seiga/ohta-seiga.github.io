let doZipSearch = () => {
  let zipcode = document.querySelector('#zipcode').value;
  fetch("https://sheets.googleapis.com/v4/spreadsheets/1dDHlI3E-MrO6uMFMm0NUEkA0kbx-JrTnWnFNXFkjP3w/values/sheet1?key=AIzaSyCD62JukhZKvKAzLPZfXBx93CUQCqQ82b4", {mode: "cors"})
      .then((request) => { return request.json(); })
      .then((json) => { console.log(json); })
        json.results.forEach((result) => {
          answerHtml += `<li>${result.address1}${result.address2}${result.address3}</li>`;
        })
        answerHtml += "</ul>";
        document.querySelector('#answer').innerHTML = answerHtml;
}