const form = document.getElementById("commentForm");
const nicknameInput = document.getElementById("nickname");
const commentInput = document.getElementById("comment");
const commentContainer = document.getElementById("commentContainer");

// firestoreのインスタンスを初期化
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

// コメント一覧を更新する関数
function updateComment() {
  db.collection("comments")
      .get()
      .then((querySnapshot) => {
        // コメント一覧の配列
        const comments = [];

        querySnapshot.forEach((doc) => {
          comments.push(doc.data());
        });

        renderComment(comments);
      });
}

// コメントを描画する関数
function renderComment(comments) {
  commentContainer.innerHTML = '';
  comments.forEach((comment) => {
    commentContainer.innerHTML += createCommentNode(comment);
  });
}

// コメントのノードを作成してくれる関数
function createCommentNode(comment) {
  return `<li>
    <div class="uk-comment uk-comment-primary">
      <div class="uk-comment-header">
        <h5 class="uk-comment-title">${comment.nickname}</h5>
      </div>
      <div class="uk-comment-body">
        ${comment.comment}
      </div>
    </div>
  </li>`;
}
