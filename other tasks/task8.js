(() => {
  'use strict';
  kintone.events.on('app.record.create.show', (event) => {

    const params = {
      app: kintone.app.getId(),
      lang: 'default'
    };


        return kintone.api(kintone.api.url('/k/v1/app/form/fields.json', true), 'GET', params,).then((resp) => {
            console.log(resp);

            //action5の選択肢を取り出す
            //action5の選択肢を配列にする
            const action5 = resp.properties.Table.fields.Action5.options;
            console.log(action5);

      const action5Array = [];
      Object.keys(action5).forEach((key) => {
        action5Array[action5[key].index] = key
      });

      //acton5Arrayをドロップダウンに詰め込んで全種類pushする
      action5Array.forEach((title) => {
            //acton5Arrayをドロップダウンに詰め込んで全種類pushする
            action5Array.forEach((title) => {

                event.record.Table.value.push({
                    value: {
                        Action5: { type: 'DROP_DOWN', value: title },
                        状況: { type: 'CHECK_BOX', value: ['未振り返り'] },
                        課題: { type: 'MULTI_LINE_TEXT', value: '' }
                    }
                });
            });
            return event;
        });
      });
      return event;
    });
  });
})();