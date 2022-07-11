(() => {
  'use strict'

  let uniqueName;

  kintone.events.on(['app.record.create.submit', 'app.record.edit.submit'], (event) => {
    //kintone.events.on(['app.record.create.change.重複禁止項目', 'app.record.edit.change.重複禁止項目'], (event) => {
      console.log(event);

      //"uniqueName" = 現在のレコードの重複禁止項目の値
      uniqueName = event.record.重複禁止項目.value;
      console.log(uniqueName);

      //"uniqueName"と重複する重複禁止項目値を持ったレコードだけを抽出
      const params = {
        'fields': '重複禁止項目',
        'app': 31,
        'query': '重複禁止項目 = "' + uniqueName + '"'
      };

      //「"uniqueName"と重複する重複禁止項目値を持ったレコードが存在していれば」の条件づけ
      return kintone.api(kintone.api.url('/k/v1/records.json', true), 'GET', params).then((resp) => {
        console.log(resp);
        console.log(resp.records);

        if (resp.records.length === 0) {
          return event;
        };

        const response = confirm('レコードが重複しています。このまま保存しますか？');
        if (!response) {
          //event.error = 'キャンセルしました';
          return false;
        }
      });
    });
})();