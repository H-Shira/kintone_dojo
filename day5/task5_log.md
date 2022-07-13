# htmlを外部のcss/jsやAPIと連携させる方法
- src属性：
src属性は、文書内に表示する画像やスクリプト、フレーム内の文書などの場所を設定するための属性です。
属性値にURIを指定することで、画像やスクリプト、フレーム内の文書などの場所を設定することができます。
画像の読み込みやjsで用いられてます。
ex) `<script src="https://js.cybozu.com/axios/v0.27.2/axios.min.js"></script>`
- linkタグ
外部のcssを読み込む方法。webデザインの現場でよく用いられる。
これはheadに置かれる。
ex) `<link rel="stylesheet" type="text/css" href="task1.css">`

# 作戦
- まずAPIの仕様を調べる

#　下調べ
- JSONP
JSONP (JSON with padding) は、クロスサイト環境で他のオリジンから JSON データを取得するために考案された仕組みです。
- JSにAPIを呼び出す方法
参考）https://techacademy.jp/magazine/19615

💭というかそもそもこのapi仕様書何書いてるのかわからない…
💭どうやってapiを動かすのかもろくにわからない…（前回の講義のpromiseもわかってないので二重にわからない）

### apiを叩くには
プログラム側からapi URLを動かしてる感じ。

fetch()を使ってapiを叩くこともできる。
応用編だとaxiouとかがある。axiousの方が楽（元々fetchはjshが使えないので）

kintoneだと「kintone.api」的な。
kintone.api見るとちょっとわかりやすいかも。

### 💡jsonとは
JavaScriptと相性が良い、ファイルの書き方ルール。
jsonは設定をするもの。

## このAPIについて
- リクエストURL：https://54o76ppvn8.execute-api.ap-northeast-1.amazonaws.com/prod/bb-dojo
- リクエストパラメータ：
  idは必須、queryは任意。

💭`axios.get`使ってるのにどうしてか動かない…
💬「aziosを使うにはライブラリのインストールが必要（https://developer.cybozu.io/hc/ja/articles/202960194-Cybozu-CDN#step1）」
「mainの前（head）でインストールの記載をする必要があるよ」
```
...
  </style>
  <link rel="stylesheet" type="text/css" href="task5.css">
  <script src="https://js.cybozu.com/axios/v0.27.2/axios.min.js"></script>
</head>
```

💬レスポンスきた！！
![image](https://user-images.githubusercontent.com/107820348/178420465-3e144182-987a-4674-b32f-8698a64cc68d.png)

# 【改めて】課題確認
改めて何をすべきか。
- ⽇付/カテゴリー/タイトルが⼀覧形式で表⽰される
  - カテゴリーごとに⾊分け
  - タイトルをクリックすると、リンク先のURLに遷移
    - targetが_selfなら同じウィンドウ、_blankなら別ウィンドウ
- ニュースの件数の増減によってデザインが崩れない

# 操作ログ
## JS操作
### テーブルの作り方
まずhtmlで空のテーブルの土台を作る。
参考）https://www.sejuku.net/blog/49377

次に①動的なテーブルの追加 ②配列内容の自動挿入 のループをJSで作る。
参考）https://qiita.com/forever---beginner/items/7901217dc811d72687f8

💡「行の追加とセルの追加は別々らしい！」

JSからのテーブルの操作
参考）https://so-zou.jp/web-app/tech/programming/javascript/dom/node/element/html/table/#no3

テーブルの概念（タグの名称など）
参考）https://www.delftstack.com/ja/howto/javascript/create-table-javascript/#javascript

💭やっぱりcreateElemntとかappendChildとかelement.insertRowとかテーブル操作のコマンド色々あってわからない…

#### JSのテーブル操作
参考）https://shanabrian.com/web/javascript/ の「表組（テーブル）のコマンド一覧」。

##### 💡document.createElement("tr") と HTMLTableElement.insertRowの違い
###### そもそもHTMLTableElement.insertRowとは

>`var newRow = HTMLTableElement.insertRow(index);`
新しい行を表す ＜tr＞ をこの ＜table＞ に挿入し、その新しい行への参照を返します。
indexは新しい行の位置です。 -1または行数と同じであった場合は、最後の行として追加されます。 index を省略した場合の既定値は -1 です

###### document.createElement("tr") との違いとは？
insertRow() は、表に直接行を挿入します。 Document.createElement() を使用して新しい ＜tr＞ 要素を作成する場合のように、行を個別に追加する必要はありません。

💬これもしかしたら`document.createElement()`以外のあらゆるコマンドもそうかも（つまりエレメント作成⇨htmlに反映の2手間がいらない）

##### 💡createElemntとappendChildの違い
createElementは要素を作る。イメージとしてはHTMLで`<table></table>`を作る感じ。シンプルに書き込むだけならこれで十分。
appendchildは子要素を載せるのに必要。`<tr></tr>`をテーブルの上に乗せるにはこれが必要。

>createElement() は要素を作成するだけで、DOMツリーに自動的に追加されるわけではありません。 作成した要素をDOMツリーに追加するためには、appendChild() メソッドや、insertBefore() メソッドを使用します。

### 文字列をリンクにする
#### document.write(文字列.link)...を使う
参考）https://mebee.info/2021/04/29/post-33167/

💭でもこれ非推奨らしいし、document.だからもうhtmlに具体化されちゃってtdに入れる方法が分からないんだよなあ…

#### <a>を用いる
これはリンクを貼るhtmlタグ！
参考）https://qiita.com/Yoko3/items/936efbb5c2385b4778bb
💬これtdの中にも入れられるしこれにしよう！！

## CSS操作
### jsで追加した内容の動かす
💬多分jsで追加したものでもidやelementがきちんと指定できてれば問題なくcssで動かせる…？
💬ってことはカテゴリーの内容ごとにセルに異なるclassを振って、それをcssで操作すればいいのかな。

#### 💡JSからelementにclassを振る
参考）https://techacademy.jp/magazine/27026

💭`color`プロパティで文字色だけ変えようとしたら枠の線まで変わっちゃう…
#### 💡セルの文字色だけ変える方法
参考）https://www.sejuku.net/blog/56207
>デフォルトは真っ黒な文字が表示されますが、colorで色を指定すると、何でも好きな色に変更できます。ちなみに文字の色だけでなく、borderの線の色も変わります。

参考）https://gotohayato.com/content/58/
>実は border-color を指定しない場合、 border-color は自動的に color の色になります。 

💡ボーダーカラーを設定すればいいのか！

### cssメモ
- `border-collapse`：テーブルの中のセルが境界を共有するか分離するかの設定
- `text-align: center;`：文字列の中央寄せ
- 

# 気づきメモ
- constを「関数/function」として使うときと「変数」として使う時があるが、それを混ぜて利用してはいけない。
```
const td = document.createElement('td') //関数を格納 //※※したつもりだったがこれはそう言う名前のtdを作っただけ！！！

const td1st = td;
const td2nd = td;
const td3rd = td; //関数で作ったelementを変数としてconstすることで固有名詞をつけた
```
▲これはうまくいかなかった×

```
const td1st = document.createElement('td')
const td2nd = document.createElement('td')
const td3rd = document.createElement('td')
```
▲これはうまく行った！！！
