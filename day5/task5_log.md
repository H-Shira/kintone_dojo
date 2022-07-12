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
💬一旦郵便番号のapiをpromise抜きで作ってみよう！

## 郵便番号apiログ
参考）
- https://bokihajimeru.com/zipcode_search_api/5398/
- https://into-the-program.com/javascript-get-address-zipcode-search-api/
- https://qiita.com/code_gazer/items/dc55067e799d80d4ac70

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


💬そしてkintoneAPIを優先して放置してましたが帰ってまいりました！
#　改めて考えていく
## fetchでapiを叩く

