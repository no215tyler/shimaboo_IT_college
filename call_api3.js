// 第8回_JavaScript講座
// xhrを利用してAPIを叩く方法
function callApi() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  xhr.responseType = "json";
  xhr.send();
  xhr.onload = function() {
    console.log(xhr.response);
  };
}

callApi();

// 【MEMO】
// 技術的には古い方法、一般ユースはあまりされないためasync-awaitを覚えればOK
// メリットとしてはファイルをアップロードするプラグインを自作する場合などに進捗を出すことができる
// 【補足】
// Node.jsで実行するとエラーになる（ブラウザは実行可）
