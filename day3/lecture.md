# 講義メモ
## function
- functionは変数に小さなプログラムを代入できる
```
const 変数 = function (変数2) {
    return 変数2を用いたプログラム…;
};
▼使う時
変数(代入値=変数2)
```
## 配列
- 配列は[○,○,…]で続ける。呼び出すときは変数[インデックス番号]
  - インデックス番号は0から始まる
- 変数.push('')：配列に追加
- 変数.join('')：配列を’’で連結
## オブジェクト
- オブジェクトは変数の箱の中に箱（プロパティと呼ぶ）がたくさん入ってるもの
```
const todo = {must: '準備', due: '8/2', status: 'done'}
// 変数"todo"の中のプロパティ"must"に「準備」、プロパティ"due"に「8/2」、プロパティ"status"に「done」を入れる
```
- データの呼び出しは`変数.プロパティ`or`変数['プロパティ']`
  - 前者はプロパティに変数が使えるが、後者は使えない
## for文
- for文は実行を繰り返す
```
for (初期化; 繰り返し条件; 実⾏後の処理）｛
実⾏する内容
}
f[]
ex)
for (let i = 0; i < 10; i++) {
console.log(i + '回⽬');
}
```
- forEach文は配列専用で実行を繰り返す
```
配列.forEach( (val, index) => {
実⾏する内容
});
▼例
const arr = ['kin', 'Gr', 'Of', 'Mw'];
arr.forEach((val, index) => {
console.log(val, index);
});
//変数"arr"は'kin', 'Gr', 'Of', 'Mw'の配列
//変数"arr"の配列の中身とインデックス番号を繰り返しコンソールログしなさい

```
- `val``index`は「配列の中身」「インデックス番号」
- while文も繰り返し
```
while (条件式)｛
繰り返し実⾏する内容
}
```
- `Object.keys()`はオブジェクトのプロパティを配列に格納する
- `Object.values()`はオブジェクトのプロパティの値を配列に格納する
```
Object.keys(todo);
⇨['due', 'must', 'status']
Object.values(todo);
⇨['準備', '8/2', 'done']
```