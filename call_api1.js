// 第8回_JavaScript講座
// async-awaitでfetchする方法
async function callApi() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  console.log(users);
}

callApi();

// 【MEMO】
// 関数に async をつけることで非同期関数になる
// 非同期関数の中でawaitが利用可能になる
