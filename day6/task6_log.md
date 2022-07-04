# 一連の流れ
![image](https://user-images.githubusercontent.com/107820348/177079668-920fc950-1742-446b-b323-e09a22d8b299.png)

イベント：「レコードを新規作成したとき」
インプット：「サブテーブルのデータを取得し」
加工：「ドロップダウンの文言を初期値で設定し」「すべての状況欄は『未振り返り』」「サブテーブルを作成」
アウトプット：「HTMLに埋め込む」

## イベント
参考）https://developer.cybozu.io/hc/ja/articles/201941984#step1
> app.record.create.show：レコード追加画面または再利用画面が表示された時

## インプット
サブテーブルの空の一行分のデータを定義（const）する。
参考）https://developer.cybozu.io/hc/ja/articles/360022502911

## 加工
1. サブテーブルを五段作成
2. サブテーブルのドロップダウンの初期値を設定
3. サブテーブルの状況欄を『未振り返り』に設定

### 1. サブテーブルを五段作成
参考）https://developer.cybozu.io/hc/ja/articles/360022502911
> 配列に行を追加するには .push() を使います。

参考）https://developer.cybozu.io/hc/ja/articles/360027244231
参考）https://qiita.com/goriland/items/22bdb8adb5335796d01a
![image](https://user-images.githubusercontent.com/107820348/177097455-d45d825e-5f00-4898-9bd7-045a03493b48.png)
参考）https://developer.cybozu.io/hc/ja/community/posts/360001414643-%E3%82%B5%E3%83%96%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB%E8%A1%8C%E3%81%AE%E8%87%AA%E5%8B%95%E8%BF%BD%E5%8A%A0

>1. 既存の行のデータ(JSON)を取得
>2. そのデータの末尾に新規追加行のデータを付け加える（空白行でも各フィールドが必要）
>3. まとめてテーブルに書き込む
>
>という流れになるかと思います。

💭いやもう構造がさっぱり分からない
💬「これはオブジェクトの中にオブジェクトの配列が入っている構造。テーブルを追加すると配列が一つ増える」「つまりテーブルの追加などなどには配置の追加のコマンドのhow toが使える」

💭consoleにvalueを出すと[Prototype]っていう信じられないほど莫大なデータが出てくるがこれもやらなきゃいけないのか
💬「これは勝手に出てくるから今はそんなに気にしなくていい」


### 2. サブテーブルのドロップダウンの初期値を設定
参考）https://developer.cybozu.io/hc/ja/articles/202796890