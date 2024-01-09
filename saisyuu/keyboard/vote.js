let keyboard;
let userkeyboard = JSON.parse(localStorage.getItem('userkeyboard')) || {};

// ページ読み込み時にFirebaseからデータを読み込む
window.onload = function() {
  // Initialize votes as an empty object
  keyboard = {};

  // Load existing votes from Firebase
  db.collection("keyboard").onSnapshot((snapshot) => {
    snapshot.forEach((doc) => {
      keyboard[doc.id] = doc.data().count;
    });

    // Update options and ranking
    updateOptions();
    updateRanking();
  });
};

function vote() {
  let selectedOption = document.getElementById('options').value;

  if (!hasAlreadyVoted(selectedOption)) {
    // Increment vote count for the selected option in Firebase
    db.collection("keyboard").doc(selectedOption).update({
      count: firebase.firestore.FieldValue.increment(1)
    });

    // Update user's voted options in localStorage
    userkeyboard[selectedOption] = true;
    localStorage.setItem('userkeyboard', JSON.stringify(userkeyboard));

    // Update ranking
    updateRanking();
  } else {
    alert('すでに投票済みです。同じ選択肢には再度投票できません。');
  }
}

function addNewOption() {
  let newOption = document.getElementById('newOption').value.trim();
  if (newOption) {
    // Add new option to Firebase with an initial count of 0
    db.collection("keyboard").doc(newOption).set({
      count: 0
    });

    // Vote for the newly added option
    voteForOption(newOption);

    // Update options and ranking
    updateOptions();
    updateRanking();
  }
}

function voteForOption(option) {
  // Increment vote count for the selected option in Firebase
  db.collection("keyboard").doc(option).update({
    count: firebase.firestore.FieldValue.increment(1)
  });

  // Update user's voted options in localStorage
  userkeyboard[option] = true;
  localStorage.setItem('userkeyboard', JSON.stringify(userkeyboard));
}

function hasAlreadyVoted(selectedOption) {
  return userkeyboard[selectedOption];
}

function updateOptions() {
  let optionsSelect = document.getElementById('options');
  optionsSelect.innerHTML = '';
  for (const option in keyboard) {
    if (keyboard.hasOwnProperty(option)) {
      addOptionToSelect(optionsSelect, option);
    }
  }
}

function addOptionToSelect(selectElement, option) {
  const optionElement = document.createElement('option');
  optionElement.value = option;
  optionElement.text = option;
  selectElement.appendChild(optionElement);
}

function updateRanking() {
  let rankingList = document.getElementById('rankingList');
  // Sort options by vote count in descending order
  let sortedVotes = Object.entries(keyboard).sort((a, b) => b[1] - a[1]);
  rankingList.innerHTML = '';
  for (const [option, count] of sortedVotes) {
    const listItem = document.createElement('li');
    listItem.textContent = `${option}: ${count}票`;
    rankingList.appendChild(listItem);
  }
}

function handleKeyPress(event) {
  if (event.key === 'Enter') {
    addNewOption();
  }
}