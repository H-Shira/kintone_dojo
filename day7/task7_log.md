# 課題内容
目標：⽂字結合したフィールドの重複禁⽌設定
- ⾃動計算フィールドと同様に、各フィールドが変更されたときに⽂字列フィールドに値が挿⼊されるようにする
- ⽂字列に挿⼊するタイミングはレコード新規作成時とレコード編集時
- 挿⼊先の⽂字列フィールドは常に編集不可
- ⽇付操作にはdate-fnsライブラリを利⽤

## 自動計算欄を重複禁止にするには
参考）https://trialanderror.jp/kintone-customize-point/
文字列を重複禁止設定にした後で、文字結合のプラグインを使う。
文字結合プラグイン）https://developer.cybozu.io/hc/ja/articles/208797666

💬でも多分プラグインは使わない

シンプルにjs使って文字列くっつけるしかないかな…

# 一連の流れ
イベント：「フィールド変更時」
インプット：「フィールドの文字列を取得」「※ただしフィールドの日時表現を加工」「※ただし製品のvalueを省略形に加工」
加工：「文字列を『-』で結合」「フィールドに表示」「重複禁止したら登録できない」「重複したらアラートが出る」
アウトプット：「HTMLに埋め込む」

## イベント
- app.record.create.change：初期作成画面でのフィールドの変更
- app.record.edit.change：再編集画面でのフィールドの変更

## インプット
### フィールドの日時表現を加工
💬多分「event.record.日付.value」で取得した値をdate-fnsにも送ってYYYYMMDD形式で送り返してもらったらいいのかな。

date-fnsの使い方）https://zenn.dev/snjssk/articles/f05d1bcfeb9604
kintoneでdate-fnsを使う）https://developer.cybozu.io/hc/ja/community/posts/360043496091

### 製品のvalueを省略形に加工
💬if使うしかないかな…

▼ここまでのコード
```
kintone.events.on('app.record.create.change.重複禁止項目_自動計算', (event) => {

        //それぞれのフィールドの値を定義
        //dateはdate-fnsでYYYYMMDD形式にする
        const date = dateFns.format(event.record.日付.value, 'YYYYMMDD');
        let product = event.record.サイボウズ製品.value;
        const number = event.record.管理番号.value;

        //productのvalueを省略形に変更する
        if (product = 'kintone') {
            product = 'KN'
        } else if (product = 'garoon') {
            product = 'GR'
        } else if (product = 'サイボウズ Office') {
            product = 'OF'
        } else {
            product = 'MW'
        };

        const id = date + product + number

        return event;
    });
```
💬しかしここで「重複禁止項目_自動計算の値流用したらいいんじゃない？」と気づく。

**▼作り直し！！**
# Re:一連の流れ
イベント：「フィールド変更時」
インプット：「重複禁止項目_自動計算の値を取得」
加工：「重複禁止項目_文字列フィールドに挿入」「重複禁止項目_文字列フィールドを編集不可にする」
アウトプット：「HTMLに埋め込む」

## Re:イベント
- app.record.create.change：初期作成画面でのフィールドの変更
- app.record.edit.change：再編集画面でのフィールドの変更

## Re:加工
### 重複禁止項目_文字列フィールドを編集不可にする
参考）https://developer.cybozu.io/hc/ja/articles/201941984-%E3%83%AC%E3%82%B3%E3%83%BC%E3%83%89%E8%BF%BD%E5%8A%A0%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88#step5




