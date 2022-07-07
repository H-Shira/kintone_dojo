# 課題内容
目標：task6と同じ構図で、ドロップダウンを決め打ちでなく取得したい

## 作戦
Action5のループだけREST apiでドロップダウンから取得できるようにする。

💭いやRESTapi全然わからん
💬一旦devのチュートリアルから学ぼうぜ

### kintone apiを学ぶ
devチュートリアル）https://developer.cybozu.io/hc/ja/articles/201755040
  第9回 kintone REST APIを利用したレコード追加）https://developer.cybozu.io/hc/ja/articles/203655530

#### 💡eventオブジェクトのプロパティとは
eventの中にもう既にあるプロパティ。
ex) ![image](https://user-images.githubusercontent.com/107820348/177444547-0b1b3445-ecc5-4584-83a7-4b5f7dc0760b.png)
だから`event.appId`で取り出せる

#### 💡rest apiのベーシックルール
参考）https://developer.cybozu.io/hc/ja/articles/202166310-kintone-REST-API-%E3%83%AA%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88
```
kintone.api(pathOrUrl, method, params, successCallback, failureCallback)

※ちなみにparamsまでは必須
```
実際の記述では下記を使う。
```
kintone.api(pathOrUrl, method, params).then(上手く行った時の処理).catch(エラー時の処理);
```

- pathOrUrl："kintone.api.url(URL, true)"で代用できるというかしなさい。
- method：同じURLでもリクエストのHTTPメソッドによって動作が変わるから指定が必要。
- params：APIに渡すパラメータをオブジェクトで指定する。リクエストパラメーターとやららしい。なんかみんな最初にこれをconstしてる。

💭paramsがわからない…

##### 💡paramsについて
💭リクエストパラメーターとは？
![image](https://user-images.githubusercontent.com/107820348/177450187-fda797de-1284-4fcc-bed5-cf30accba1b1.png)

▼こんなふうにかく
![image](https://user-images.githubusercontent.com/107820348/177453958-b4d2e24a-d50f-4038-aac8-9e8e51f5d0a6.png)

💬よしじゃあここまで分かったところでtask8取り掛かってこう！

### task8で必要なapi
Action5のループだけREST apiでドロップダウンから取得できるようにするapi…。
おそらくこれ）https://developer.cybozu.io/hc/ja/articles/204783170

> properties.（フィールドコード）.options　｜　オブジェクト　｜　選択肢の設定を表すオブジェクトです。

これかな？

### どうしても動かなかったのが解決
💬「'kintone.api(kintone.api.url(...'の前に`return`が必要」
💬「`.then`が必要」

なんで〜？使ってないのもあるじゃん。

💭何やらpromiseが理由らしい…
参考）https://developer.cybozu.io/hc/ja/articles/360023047852

## acrion5Arrayの順番がぐちゃぐちゃ…
オブジェクト「action5」のインデックス番号順に並んでほしい…。

💡ソートはsortオブジェクトを使うといい
参考）https://qiita.com/PianoScoreJP/items/f0ff7345229871039672
参考）https://keizokuma.com/js-array-object-sort/#javascript

💬「大オブジェクト内オブジェクトの要素から大オブジェクトを並び替えるならこれ参考にするといいよ〜」
参考）https://keizokuma.com/js-array-object-sort/

💡オブジェクト内オブジェクトなど構造が深まっていることを「ネストが深い」というらしい。

### 💡「配列.map」とは
参考）https://www.sejuku.net/blog/21812
> 「map」は配列データに使うメソッドであり、各要素1つずつに対して「コールバック関数」を実行し、その結果を新しい配列として返すことが出来るようになっています。つまり、この関数内に実行したい処理を書いておくことで、配列の各要素に対して好きな操作をすることが出来るというわけです！
```
var items = [1,2,3,4,5];

var result = items.map(function( value ) {

    //配列の各要素を2倍にする
    return value * 2;

});

console.log( result );
```
answer:
```
[2, 4, 6, 8, 10]
```
> forEachとの違いは返り値を出してくれるかどうか。
> forEachは処理するだけ、mapは実行後の結果を配列データとして返してくれる。

![image](https://user-images.githubusercontent.com/107820348/177667708-96a908d0-c960-4f4f-84ca-ee32466763c1.png)

#### 💭これを使って何とかaction5のオブジェクトを保持したまま配列形式にしたい
参考）https://www.delftstack.com/ja/howto/javascript/javascript-object-to-array

`.sort`は配列でしか使えない。
Object.entriesは全てを配列にしてしまう。
↓
理想：
```
配列actio5['あくなき探求', '不屈の身体', 公明正大, ...]
あくなき探求の中身{label: 'あくなき探求', index: '0'}
```
みたいな…


#### 💡改めて配列とオブジェクト
##### 取り出す時
- 配列の中身を取り出す時、`配列名[インデックス番号]`
- オブジェクトの中身取り出す時`オブジェクト名.プロパティ名.`

##### オブジェクトを配列にする時
- オブジェクトのプロパティを配列に格納する時、`Object.keys(オブジェクト名)`
- オブジェクトのプロパティの値を配列に格納する時、`Object.values(オブジェクト名)`
- オブジェクトの中身も全部配列にする`Object.entries(オブジェクト名)`

##### 配列の大事な特徴
配列は挿入したタイミングがバラバラでも`配列名[index番号] = ~`でちゃんと挿入してたら、配列を再度呼び出したときにきちんと並び順になってる！

![image](https://user-images.githubusercontent.com/107820348/177715742-a6e266ae-1f14-4f9c-aeea-fa09de5ef092.png)
