(() => {
    'use strict';

    //新規作成画面で重複禁止項目_文字列を編集不能にする
    kintone.events.on('app.record.create.show', (event) => {
        event.record.重複禁止項目_文字列.disabled = true;
        return event;
    });

    //再編集画面で重複禁止項目_文字列を編集不能にする
    kintone.events.on('app.record.edit.show', (event) => {
        event.record.重複禁止項目_文字列.disabled = true;
        return event;
    });

    //新規作成のフィールド変更時
    kintone.events.on('app.record.create.change.重複禁止項目_自動計算', (event) => {
        const id = event.record.重複禁止項目_自動計算.value;

        //重複禁止項目_文字列にidを挿入
        event.record.重複禁止項目_文字列.value = id;
        return event;
    });

     //再編集のフィールド変更時
     kintone.events.on('app.record.edit.change.重複禁止項目_自動計算', (event) => {
        const id = event.record.重複禁止項目_自動計算.value;

        //重複禁止項目_文字列にidを挿入
        event.record.重複禁止項目_文字列.value = id;
        return event;
    });

})();