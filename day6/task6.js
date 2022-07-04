(() => {
    'use strict';
    kintone.events.on('app.record.create.show', (event) => {
        console.log(event);
        let addRow = event.record.Table;
        console.log(addRow);

        //テーブルの配列の初期化
        addRow.value = [];

        //Action5のループ
        const action5 = [
            'あくなき探求',
            '不屈の心体',
            '理想への共感',
            '心を動かす',
            '知識を増やす',
            '公明正大',
        ];

        //action5のループが終わるまでAction5にaction5を入れてpushし続ける
        action5.forEach((title, index) => {
            addRow.value.push({
                value: {
                    Action5: {type: 'DROP_DOWN', value: title},
                    状況: {type: 'CHECK_BOX', value: ['未振り返り']},
                    課題: {type: 'MULTI_LINE_TEXT', value: ''}
                }
            });
        });
        return event;
    });
})();