document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('search_button').addEventListener('click', function () {
    let keyword = document.getElementById('search_area').value;

    let xhr = new XMLHttpRequest();
    let url = 'https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706';
    let params = 'applicationId=1054087482094266163&keyword=' + keyword;

    xhr.open('GET', url + '?' + params, true);

    xhr.onload = function () {
      if (xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        if (data.count > 0) {
          let ul = document.querySelector('ul');

          data.Items.forEach(function (item) {
            let li = document.createElement('li');
            let a = document.createElement('a');
            let img = document.createElement('img');

            a.href = item.Item.itemUrl;
            img.src = item.Item.mediumImageUrls[0].imageUrl;

            a.appendChild(img);
            li.appendChild(a);
            ul.appendChild(li);
          });
        }
      }
    };

    xhr.onerror = function () {
      console.log('Error making the request.');
    };

    xhr.send();
  });
});
