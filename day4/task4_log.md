# task4-1
## HTMLの'value=...'とは？
参考）https://ywork2020.com/content/property-value.html
参考）https://developer.mozilla.org/ja/docs/Web/HTML/Element/input/checkbox
>value 属性はすべての <input> 要素で共通のものです。しかし、 checkbox 型の入力欄では特殊な用途を提供します。フォームが送信されると、現在チェックされているチェックボックスのみがサーバーに送信され、報告される値が value 属性の値になります。 value が指定されていない場合は、既定で on の文字列になります。これは前述の値の節で紹介されています。

JSでは`document.getElementById(””).value`で取り出せる

## 「もしチェックボックスが押されたら…」はどう表現する？
参考）https://techacademy.jp/magazine/28425
> チェックボックスは複数の選択を行うような場合に使用します。そのためチェックボックスを使用する際は以下のようにするのが一般的です。
> - HTMLで複数のチェックボックスに同じ「name」属性を指定する
> - JavaScriptでは「getElementsByName」関数でチェックボックス要素を取得する
> - for文などの繰り返し構文で順番にチェックされているか評価を行う

