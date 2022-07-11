# 課題内容
目標：task7の　①重複したら確認は取るけど保存はできる　②計算⽤フィールドも配置しない　バージョンを作る。

# 作戦
1. 重複禁止項目の文字列を取得
2. 取得した文字列がこれまでの重複禁止項目と被ってないか確認
3. - 被っていなければ普通に登録
   - 被っていればwindow.alertから確認
4. - 被っていてalertに「true」を返せばそのまま保存
   - 被っていてalertに「false」を返せば保存がキャンセルされる

※注意
![image](https://user-images.githubusercontent.com/107820348/177480112-e4760c51-9c08-4b63-ae3a-2f522624340e.png)

## 2. 取得した文字列がこれまでの重複禁止項目と被ってないか確認
### レコードの重複禁止項目の値を取得
参考）https://developer.cybozu.io/hc/ja/articles/202331474#step2

### 配列のうちの一つでも条件に重なっていないかを確認

## 4. 被っていてalertに「true」を返せばそのまま保存
### 「true」とレコード保存の紐付け
💭どうやる？
1. 「jQueryのtrigger()」
https://developer.cybozu.io/hc/ja/articles/204695384-%E7%AC%AC12%E5%9B%9E-jQuery%E3%82%92%E5%88%A9%E7%94%A8%E3%81%97%E3%81%A6%E3%81%BF%E3%82%88%E3%81%86
2. 「レコードの更新RESTapi」
レコードの更新）https://developer.cybozu.io/hc/ja/articles/201941784
**こちらの方が使い勝手がわかるのでこちらにする。**

💭リクエストパラメーターの「id」を『現在のレコードID』指定したい。
💬現在開いているidを取得するapiを使わないといけないかも。
レコードIDを取得する）https://developer.cybozu.io/hc/ja/articles/201942014
💭ていうかレコード番号とレコードIDの違いってなに…？わかりにくいんだけど…
![image](https://user-images.githubusercontent.com/107820348/177896897-1319613f-20c8-47ea-89d6-10ce6ab0e58f.png)

💬っていうか「resp」or「event」の中にレコードID入ってるんじゃない？？？

▼trueの時点で、編集内容をそのままレコードに登録し、編集画面を閉じるやり方
参考）https://developer.cybozu.io/hc/ja/articles/201941984#step2
「レコード追加画面の保存実行前イベント」の「eventオブジェクトのプロパティ」で「event.record = ユーザー入力のデータを保持したレコードオブジェクト」と分かった。

**ここまで調べといて何だけど「保存実行前イベント」は問題なく処理が終われば自動で保存されるので今までの全部なし。**

### 「false」で編集画面に戻る
参考）https://developer.cybozu.io/hc/ja/articles/201941984#step2
> フィールドにエラーを表示するやレコードにエラーを表示するのようにerrorプロパティに値を設定したeventオブジェクトをreturnすると保存処理をキャンセルできます。

参考）https://developer.cybozu.io/hc/ja/community/posts/205669623-%E3%83%AC%E3%82%B3%E3%83%BC%E3%83%89%E4%BF%9D%E5%AD%98%E6%99%82%E3%81%AB%E3%83%80%E3%82%A4%E3%82%A2%E3%83%AD%E3%82%B0%E3%82%92%E8%A1%A8%E7%A4%BA%E3%81%97%E3%81%9F%E3%81%84

💭やっぱりうまく動かない…

# レビュー
💬「多分関数の階層が違うから取り出せない」
💬「これをうまくいかせるなら、クエリーで重複したデータだけ取り出して…が一番いい」
「クエリーの書き方はクセがある。テンプレートリテラル（文字列）や https://developer.cybozu.io/hc/ja/articles/900001057206-kintone-API-%E3%81%AE%E3%82%AF%E3%82%A8%E3%83%AA%E3%81%AE%E6%9B%B8%E3%81%8D%E6%96%B9%E3%81%AE%E5%9F%BA%E6%9C%AC を確認して書いた方がいいよ」
💬「条件はlengthで『一つ以上あれば』が一番いいんじゃないかな」
💬「ちなみに'app.record.create.submit', 'app.record.edit.submit'だと再編集の時に既にidが存在するから（編集しているものが記録上二つ存在することになるので）、こちらはlength二つにして場合分けすると良いよ〜」

# 改めてやり直し
## queryの書き方
参考）https://developer.cybozu.io/hc/ja/articles/900001057206-kintone-API
![image](https://github.dev.cybozu.co.jp/storage/user/1028/files/e480b7f4-4f52-4da6-9aa9-7e00b65d0755)
これを参考に作成（正直理論はわかってない）。

💭どうしてもif...elseがうまくいかない
💬.then()を入れたらうまくいった…！

# ❓疑問
- `kintone.api(url, method, params).then().catch();`と`kintone.api(url, method, params, (resp) => {})`って何が違うの？使える時と使えない時があるのはなぜ？？
💬多分同期処理・非同期処理の問題？前者は頭に「return」もつけて非同期処理の結果待ち（同期的処理とも言う）に使う。後者はシンプルに動かす時（後者でやると完全非同期処理になるので誰も待ってくれません）…かな？
💬「単に引き出すだけなら.thenいらないけど、非同期処理させたいならpromiseオブジェクトがresolbveされるのを待ってからじゃないとだめ」
参考）
- https://developer.cybozu.io/hc/ja/articles/360023047852
- https://developer.cybozu.io/hc/ja/articles/202166310

**ちゃんと読む！！！**
