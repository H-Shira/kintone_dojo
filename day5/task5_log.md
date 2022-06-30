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
- 