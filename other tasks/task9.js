(() => {
    'use strict';
    kintone.events.on(['app.record.create.change.重複禁止項目', 'app.record.edit.change.重複禁止項目'], (event) => {

        //重複禁止項目の値を取得
        const params = {
            app: 38,
            lang: 'default'
        };

        kintone.api(kintone.api.url('/k/v1/app/form/fields.json', true), 'GET', params, (resp) => {
            console.log(resp);
    })
})();