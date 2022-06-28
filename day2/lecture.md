# 講義メモ
- document = HTMLで書いたもののこと
- 基本的にセミコロン(;)は先に書く。忘れがちなので。
- ==も比較演算子として反応するけど絶対に===を使う。==はデータ型を意識した評価を行わないため。
ex)
``` 
3 === '3'
>false
3 == '3'
>true
```
- !はあらゆるものが逆転する。
- const（変数作りますよ〜）変数
- 変数に関わるコマンドはconst/let/varがある。varは古いから気にしなくて良い。constとletは再代入できるか（代入の上書き保存）で違いがある。constは再代入不可。letは再代入可能。letの方が使いやすそうだけど、constの方が間違いが起こらないのでconst優先。
- window.confirm：true or false
- window.prompt：記述
- console.log：コンソールに書く

```
const price = license === 'スタンダードコース' ? 1500 : 780;
// 変数"price"には、変数"licence"がスタンダードコースなら1500、そうでなければ780を代入

const answer = window.prompt('元気ですか');`
// 変数"answer"には「元気ですか」の回答を代入
```


Day3

関数は配列出すと0から始まる。

