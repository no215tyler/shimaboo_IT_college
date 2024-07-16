// 第9回_JavaScript講座

// DOM
const button = document.getElementById('addBtn');
const lists = document.getElementById('lists');

// 関数（メソッド）
const addList = (user) => {
  const list = document.createElement("li"); // 要素を作成することができる
  list.innerText = user.name;
  lists.appendChild(list);
}

async function getUsers() {
  // データのやり取り
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();
  return users;
};

async function listUsers() {
  const users = await getUsers();
  // DOM操作
  users.forEach(addList);
};

// イベントリスナー
window.addEventListener('load', listUsers);
button.addEventListener('click', listUsers);

// 【MEMO】
// getUsers関数でAPIを叩き、レスポンスを受けるまでに時差が生じるためDOM操作を待機させるために、
// listUsers関数でもasync-awaitを用いる

// リファクタリング①: 同じ記述を共通化する => 関数化
// リファクタリング②: 処理を分解する => 匿名関数を関数化
// リファクタリング③: 順序を整理する => 例: async functionを近くに置く...etc
//                  addEventListenerはwindowが対象になるコードが上の方など
// リファクタリング④: コメントを追加する
