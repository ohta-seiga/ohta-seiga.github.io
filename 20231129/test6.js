const form = document.getElementById("votingForm");

const db = firebase.firestore();


// 最初にコメント一覧を取得して表示する。
window.addEventListener("load", (ev) => {updateComment()});

form.addEventListener("submit", (ev) => {
  // formが送信されるのを防ぐ
  ev.preventDefault();

  // formDataのオブジェクトを作成
  const formData = {
    nickname: nicknameInput.value || "名無しのジャクソン",
    comment: commentInput.value,
  };

  console.log(formData);

  // firebaseにデータを送信
  db.collection("comments")
      .add(formData)
      .then(function () {
        console.log("送信されました");
        nicknameInput.value = "";
        commentInput.value = "";

        // コメントの保存が成功したら、コメントの一覧を取得して表示する
        updateComment();
      })
      .catch(function (err) {
        console.error("エラーが発生しました：", err);
      });
});

function updateRankingFromFirestore() {
  db.collection('UseDeviceKeyborad').doc('lUUJZQJ6F9nbgxQxs1lm').onSnapshot((doc) => {
    if (doc.exists) {
      votes = doc.data() || {}; // 既存のデータを使用するか、空のオブジェクトで初期化
    }

    updateOptions();
    updateRanking();
  });
}

// ページ読み込み時にFirestoreからデータを取得
document.addEventListener('DOMContentLoaded', function() {
  updateRankingFromFirestore();
});
function vote() {
  let selectedOption = document.getElementById('options').value;
  if (!hasAlreadyVoted(selectedOption)) {
    votes[selectedOption]++;
    updateRanking();
    saveToFirestore();
  } else {
    alert('すでに投票済みです。同じ選択肢には再度投票できません。');
  }
}

function addNewOption() {
  let newOption = document.getElementById('newOption').value.trim();
  if (newOption && !votes.hasOwnProperty(newOption)) {
    votes[newOption] = 1;
    updateOptions();
    document.getElementById('newOption').value = '';
    saveToFirestore();
    location.reload();
  }
}

function hasAlreadyVoted(selectedOption) {
  return votes[selectedOption] > 0;
}

function updateOptions() {
  let optionsSelect = document.getElementById('options');
  optionsSelect.innerHTML = '';
  for (const option in votes) {
    if (votes.hasOwnProperty(option)) {
      const optionElement = document.createElement('option');
      optionElement.value = option;
      optionElement.text = option;
      optionsSelect.appendChild(optionElement);
    }
  }
}

function updateRanking() {
  let rankingList = document.getElementById('rankingList');
  let sortedVotes = Object.entries(votes).sort((a, b) => b[1] - a[1]);
  rankingList.innerHTML = '';
  for (const [option, count] of sortedVotes) {
    const listItem = document.createElement('li');
    listItem.textContent = `${option}: ${count}票`;
    rankingList.appendChild(listItem);
  }
}

function saveToFirestore() {
  // Firestoreの 'votingData' コレクション内の 'votes' ドキュメントに投票を保存
  db.collection('UseDeviceKeyborad').doc('lUUJZQJ6F9nbgxQxs1lm').set(votes)
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
}

function handleKeyPress(event) {
  if (event.key === 'Enter') {
    addNewOption();
  }
}