function mes(){
  console.log("Hallo my page");
}

function  today(mon, day, week) {
  console.log(`今日は${mon}月${day}日(${week}曜日)です`);
}

function year(last, now = 2023){
  console.log(`今年は${now}年です`);
  console.log(`去年は${last}年です`);
}

function kakezan(){
  return 2021 * 1010;
}

function hikisuu(a, b){
  return a * b;
}

function warizan(a, b){
  return a * b % 10;
}

function warizan2(a, b){
  return parseInt(a * b % 100 /10);
}