// 第8回_JavaScript講座
// fetch thenを利用してAPIを叩く方法
function callApi() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(function(res) {
      return res.json();
    })
    .then(function(users) {
      console.log(users);
    });
}

callApi();

// 【MEMO】
// async-awaitの方が後発技術
// エラーハンドリングもasync-awaitの方が優れているため特段の理由がなければasync-awaitの利用を推奨
