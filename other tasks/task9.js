(() => {
  'use strict'

  kintone.events.on(['app.record.create.submit', 'app.record.edit.submit'], (event) => {
  //kintone.events.on(['app.record.create.show', 'app.record.edit.show'], (event) => {

    //"eventTyp" = イベントタイプ
    const eventType = event.type;
    //"uniqueName" = 現在のレコードの重複禁止項目の値
    const uniqueName = event.record.重複禁止項目.value;

    //queryの条件分け
    let query;
    if (eventType === 'app.record.create.submit') {
      query = `重複禁止項目 = "${uniqueName}" `
    } else {
      query = `重複禁止項目 = "${uniqueName}" and $id != ${event.record.$id.value} `;
    }

    //params
    const params = {
      'fields': '重複禁止項目',
      'app': kintone.app.getId(),
      'query': query
    };

    //api実行
    return kintone.api(kintone.api.url('/k/v1/records.json', true), 'GET', params).then((resp) => {
      if (resp.records.length !== 0) {
        const response = confirm('レコードが重複しています。このまま保存しますか？');
          if (response === false) {
            return false;
          }
      }
    });
})
})();