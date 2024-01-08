let applicationId = '1054087482094266163';

function fetchRankingData() {
  let apiUrl = 'https://app.rakuten.co.jp/services/api/IchibaItem/Ranking/20170628';

  let params = new URLSearchParams({
    applicationId: applicationId,
    elements: "rank,shopName,itemUrl,mediumImageUrls[0],mediumImageUrls",
    genreId: 567169,
  });

  fetch(`${apiUrl}?${params}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        displayRanking(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
}

function displayRanking(data) {
  let rankingListContainers = document.getElementsByClassName('rankingList');

  for (let i = 0; i < rankingListContainers.length; i++) {
    let rankingListContainer = rankingListContainers[i];
    let rankingItems = data.Items;

    if (rankingItems && rankingItems.length > 0) {
      // 最初の5つの要素だけを取り出す
      let top5Items = rankingItems.slice(0, 5);

      let listHTML = top5Items.map(item => `
      <div class="ranking-item">
        <span class="rank fs-4 ms-1 me-1">${item.Item.rank}</span><br>
        <a class="rank-name fs-5" href="${item.Item.itemUrl}" target="_blank">${item.Item.shopName}<br>
        <img src="${item.Item.mediumImageUrls[0].imageUrl}"></a>
      </div>`).join('');

      rankingListContainer.innerHTML = listHTML;
    } else {
      rankingListContainer.innerHTML = '<p>No ranking data available.</p>';
    }
  }
}

window.onload = fetchRankingData;