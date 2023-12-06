let modal = new bootstrap.Modal('#exampleModal');
modal.show()
function clickSecondButton() {
  document.querySelector("#exampleModal .modal-body").innerHTML = "2つ目のボタンが押されました";
  modal.show();
}