// Expressモジュールを読み込む
const express = require('express');
// Expressインスタンスを生成する
const app = express();
// ポート番号を指定する
const PORT = 8000;

app.get('/', (req, res) => {
  console.log('app.get(/)が実行されました');
  res.status(200).send('Hello, Express get method');
});

app.post('/', (req, res) => {
  console.log('app.post(/)が実行されました');
  res.status(200).send('Hello, Express post method');
});

app.listen(PORT, () => console.log(`listen on port... ${PORT}`));
