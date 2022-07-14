# task4-1
## HTMLの'value=...'とは？
参考）https://ywork2020.com/content/property-value.html
参考）https://developer.mozilla.org/ja/docs/Web/HTML/Element/input/checkbox
>value 属性はすべての <input> 要素で共通のものです。しかし、 checkbox 型の入力欄では特殊な用途を提供します。フォームが送信されると、現在チェックされているチェックボックスのみがサーバーに送信され、報告される値が value 属性の値になります。 value が指定されていない場合は、既定で on の文字列になります。これは前述の値の節で紹介されています。

JSでは`document.getElementById(””).value`で取り出せる

## 課題スクリプト壁打ち
### 1. 「チェックボックスが押されたら…」がわからないし、setIntervalで毎回確認させてみる
```
// if内で作った関数はif外に出せないのでif外で定義
// setInterval内で設定すると1秒ごとに0に戻っちゃうのでsetInterval外で定義
// 変数の数値を変更するので`const`でなく`let`で定義
let secure = 0;
let disk =0;

setInterval(() => {

    if (document.getElementsByClassName('chk')[0].checked) {
      secure = document.getElementsByClassName('chk')[0].value * 5
    } else {
      secure = 0
    };

    if (document.getElementsByClassName('chk')[1].checked) {
      disk = document.getElementsByClassName('chk')[1].value * 1
    } else {
      disk = 0
    };

    document.getElementById('price').textContent = 3900 + secure + disk;

  }, 1);
  ```
一応問題なく動いた！！

💬「『マウスイベント』って言うのがあって、これを使えば『チェックボックスが押されたら動く』の設定ができるよ」
💬え！！**やってみよう！**

### 2. マウスイベントを利用して、チェックボックスが押された時点で実行させる
マウスイベントについて）https://web-designer.cman.jp/javascript_ref/event/mouse/
チェックボックスのイベント一覧）https://kosapi.com/post-4146/
複数のチェックボックスでイベントを用いる方法）https://1-notes.com/javascript-checkbox-event/

#### ※注意！
```
document.getElementsByClassName('chk')[0].onclick = () => {
 console.log(on);
};
```
💭これだとなんでか反応しない…
💬「多分`.onclick`なんかのイベントをつける前に、その前の`document.get...`を定義しないといけないんだよね」
```
const chkSec = document.getElementsByClassName('chk')[0];
  chkSec.onclick = () => {
    console.log(1);
  };
```
💬動いた！！

# レビュー
## task4-1
- if文でtrue,falseそれぞれで同じ文が入っているなら、if外で一回書くので済む。
- if内に;(セミコロン)は必要。でもifの末尾に;は不要(わかりにくい…)
- `const chkSec = document.getElementsByClassName('chk')[0]; /// const chkDisk = document.getElementsByClassName('chk')[1];` より、
`const chkArry = document.getElementsByClassName('chk'); /// chArry[0] /// chArry[1]` の方が簡潔（idでなくクラスの場合はこう書く！）。
- 簡単なif文は三項演算子だと簡潔に書ける。
```
chkSec.onclick = () => {
    secure = chkSec.checked ? chkSec.value * 5 : 0;  // chkSec.checkedがtrueなら「:」の左の値、falseなら右の値になる
    document.getElementById('price').textContent = 3900 + secure + disk;
  };
  ```