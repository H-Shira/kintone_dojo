# header/main/footer
参考）https://mikit-tz.com/html-tag-header-main-footer-howto/
- headerタグ：セクション内ヘッダー情報であることを示す。主にサイトのロゴの表示やナビゲーションの設置などに使われます。
- mainタグ：HTML文書内のメインコンテンツであることを示す
- footerタグ：セクション内フッター情報であることを示す。主に、プライバシーポリシーや免責事項へのリンク、コピーライトを記載するのに使われることが多いです。

![画像](https://mikit-tz.com/wp-content/uploads/2021/03/html-tag-header-main-footer-howto-2-800x451.png)

# h1~h6/p/pre
- h：見出し
- p：文章の段落分け
- pre：入力した文章をそのまま表示

# 全画像を①画面幅に合わせてサイズ調整②中央寄せ
参考）https://techacademy.jp/magazine/31350#sec1
①はcssで一括調整
``` css
width : 50vw ; /* 画面幅の50％ */
```
## 長さ指定の単位の違い
- vw(View Width)：1vwと指定した場合は、ブラウザで表示される横幅は1%です。つまりブラウザで表示されている高さが、1200pxなら 10vwだったら120pxとなります。（ブラウザ比における%かな）
- vh(View Height)：vwの縦幅バージョン。
- ％：vwやvhと異なり、親要素比でのサイズ。

# 全画像を②中央寄せ
参考）https://techacademy.jp/magazine/8850#ta-toc-1
②は親要素をセンタリング。
```
text-align : center 
```

# padding(css)
参考）https://techacademy.jp/magazine/8274
余白の設定を行える。
![画像](https://magazine-cf.techacademy.jp/wp-content/uploads/2016/06/pad_p_0.png)

💬今回はpaddingの横幅は最大値(画面幅)、縦幅は規定値、色も規定にしたい。

# 💭どうやって背景色を画像と等間隔で変えればいいんだろう
＜仮説＞
1. 画像の周囲何cmまでをこの色、次の画像ではこの色…と変えてく
2. そもそもの背景色を何cmで色が変わる、というように設定しておき、その上に画像を載せる
3. 画像とその周囲をdivで括り、そのdiv内の背景色をそれぞれ設定する

💬3がいい気がするな…

## divの縦幅と背景色を設定
参考）https://breezegroup.co.jp/202205/backgroundcolor-margin/

**できた！**

# 画像には上下左右にマージンを設定
## 💡CSSの余白の考え方
参考）https://saruwakakun.com/html-css/basic/margin-padding#section1
CSSでは要素のまわりの余白をmargin（マージン）とpadding（パディング）というプロパティで指定します。
どちらも要素のまわり余白を指定するものですが、以下のような違いがあります。
- padding：要素の内側の余白
- margin：要素の外側の余白
![画像](https://saruwakakun.com/wp-content/uploads/2017/01/ed2c6977072a3cc700caeb0188f63d59.png)
![画像](https://saruwakakun.com/wp-content/uploads/2017/02/0a3c172cfb58741353990ca153d2d9cf.png)

例）
![画像](https://saruwakakun.com/wp-content/uploads/2017/02/989c67dc42f89ba1b645242ab97b7d7a.png)
![画像](https://saruwakakun.com/wp-content/uploads/2017/02/f88ae9a63ffdcfe88c05dd18f80c4f2d.png)
![画像](https://saruwakakun.com/wp-content/uploads/2017/02/f60aac62a802ce363c45425676126ec5.png)