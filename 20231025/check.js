function checkNumber(){
  if(Number(document.querySelector("#num").value) == 10) {
    window.alert("true");
  }else {
    window.alert("false");
  }
}

function checkAge() {
  if(Number(document.querySelector("#age").value) < 20) {
    let element = document.querySelector("#answer");
    element.innerHTML = "未成年";
  } else if (20 <=　Number(document.querySelector("#age").value) < 65) {
    let element = document.querySelector("#answer");
    element.innerHTML = "成人";
  } else if (Number(document.querySelector("#age").value) >= 65) {
    let element = document.querySelector("#answer");
    element.innerHTML = "高齢者";
  } else if (Number(document.querySelector("#age").value) <= 0) {
    let element = document.querySelector("#answer");
    element.innerHTML = "エラー";
  }
}

function calculateSum() {
  let sum = 0;
  for (let i = 0; i <= 10000; i++) {
    sum += i;
  }
  return sum;
}

// 50000を超えるまでの総和を計算する関数
function calculateSumExceeds50000() {
  let sum = 0;
  let num = 0;
  while (sum <= 50000) {
    sum += num;
    num++;
  }
  return sum;
}

// FizzBuzzを計算する関数
function calculateFizzBuzz() {
  let fizzBuzzList = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      fizzBuzzList.push("FizzBuzz");
    } else if (i % 3 === 0) {
      fizzBuzzList.push("Fizz");
    } else if (i % 5 === 0) {
      fizzBuzzList.push("Buzz");
    } else {
      fizzBuzzList.push(i);
    }
  }
  return fizzBuzzList;
}

// HTML要素に結果を表示する関数
function displayResults() {
  document.getElementById("sum").textContent = calculateSum();
  document.getElementById("sumExceeds").textContent = calculateSumExceeds50000();
  let fizzBuzzList = calculateFizzBuzz();
  let ul = document.getElementById("fizzBuzzList");
  fizzBuzzList.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
}

// 結果を表示する関数を呼び出す
displayResults();

function checkLeapYear() {
  // ユーザーが入力した年を取得
  let year = parseInt(document.getElementById("year").value);

  // 閏年の条件に基づいて判定
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    document.getElementById("result").textContent = year + "年は閏年です。";
  } else {
    document.getElementById("result").textContent = year + "年は平年です。";
  }
}