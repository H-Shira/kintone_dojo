(() => {
    'use strict';
    kintone.events.on('app.record.create.show', (event) => {
        console.log(event);
        event.record.Table.value = [];

        const params = {
            app: 38,
            lang: 'default'
        };

        return kintone.api(kintone.api.url('/k/v1/app/form/fields.json', true), 'GET', params,) .then ((resp) => {
            console.log(resp);

            //action5の選択肢を取り出す
            //action5の選択肢を配列にする
            const fetchedActionFiveObj =resp.properties.Table.fields.Action5.options;
            /**
             * {
             *  あくなき探求: {
             *    index: 0,
             *    label: "あくなき探求"
             *  }
             * }
             */
            const actionFiveList = [];
            Object.keys(fetchedActionFiveObj).forEach((key) => {
                // actionFiveListのインデックス指定したところにフェッチしたアクション5の名前を代入
                actionFiveList[fetchedActionFiveObj[key].index] = fetchedActionFiveObj[key].label
                // actionFiveList 
                // ["あくなき探求", "不屈の身体"]
            })

            //acton5Arrayをドロップダウンに詰め込んで全種類pushする
            actionFiveList.forEach((title) => {
                event.record.Table.value.push({
                    value: {
                        Action5: {type: 'DROP_DOWN', value: title},
                        状況: {type: 'CHECK_BOX', value: ['未振り返り']},
                        課題: {type: 'MULTI_LINE_TEXT', value: ''}
                    }
                });
            });
            return event;
        });
    });
})();
