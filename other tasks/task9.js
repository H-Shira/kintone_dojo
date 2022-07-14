(() => {
    'use strict'

    let id;

    kintone.events.on(['app.record.create.change.重複禁止項目', 'app.record.edit.change.重複禁止項目'], (event) => {
        console.log(event);

        //現在のレコードの重複禁止項目の値を取得
        id = event.record.重複禁止項目.value;
        console.log(id);
    });

    //kintone.events.on(['app.record.create.submit', 'app.record.edit.submit'], (event) => {
    kintone.events.on(['app.record.create.change.重複禁止項目', 'app.record.edit.change.重複禁止項目'], (event) => {

        //アプリ全体の重複禁止項目の値を取得
        const params = {
            fields: '重複禁止項目',
            app: 31,
            //query: `'重複禁止項目' = id`,
            //totalCount:
        };
        return kintone.api(kintone.api.url('/k/v1/records.json', true), 'GET', params, (resp) => {
            console.log(resp);
            console.log(resp.records); //配列
            console.log(resp.records[1]); //オブジェクト
            console.log(resp.records[1].重複禁止項目.value); //id

            //アプリ全体の重複禁止項目の値のみを配列で取得
            const allIdArray = [];
            resp.records.forEach((key) => {
               allIdArray.push(key.重複禁止項目.value);
               //allIdArray = (key.重複禁止項目.value)
            });
            console.log(allIdArray);

            //allIdArrayと現レコードのidを比較し、ifで条件分け
            allIdArray.forEach((key) => {
                const otherId = key;
                
                if (otherId === id) {
                    if (window.confirm('レコードが重複しています。このまま保存しますか？')) {
                        return kintone.api(kintone.api.url('/k/v1/record.json', true), 'POST', {app: 31})
                    }
                }
            });
            return event;
        });
    });
})();