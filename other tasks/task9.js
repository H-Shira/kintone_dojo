(() => {
  'use strict'

  kintone.events.on('app.record.create.submit', (event) => {
    //"uniqueName" = 現在のレコードの重複禁止項目の値
    const uniqueName = event.record.重複禁止項目.value;

    //"uniqueName"と重複する重複禁止項目値を持ったレコードだけを抽出
    const params = {
      'fields': '重複禁止項目',
      'app': kintone.app.getId(),
      'query': `重複禁止項目 = "${uniqueName}" `
    };

    //「"uniqueName"と重複する重複禁止項目値を持ったレコードが存在していれば」の条件づけ
    return kintone.api(kintone.api.url('/k/v1/records.json', true), 'GET', params).then((resp) => {

      if (resp.records.length !== 0) {
        const response = confirm('レコードが重複しています。このまま保存しますか？');
        if (response === false) {
          return false;
        }
      }
    });
  });

  kintone.events.on('app.record.edit.submit', (event) => {
    //"uniqueName" = 現在のレコードの重複禁止項目の値
    const uniqueName = event.record.重複禁止項目.value;
    //"recordId" = 現在のレコードのレコードIDを取得
    const recordId = String(kintone.app.record.getId());
    console.log(recordId);

    //"uniqueName"と重複する重複禁止項目値を持ったレコードだけを抽出
    const params = {
      'app': kintone.app.getId(),
      'query': `重複禁止項目 = "${uniqueName}" `
    };

    //「"uniqueName"と重複する重複禁止項目値を持ったレコードが存在していれば」の条件づけ
    return kintone.api(kintone.api.url('/k/v1/records.json', true), 'GET', params).then((resp) => {
      //console.log(resp);
      const otherRecordId = resp.records[0].$id.value;
      console.log(otherRecordId);

      if (resp.records.length !== 0) {
        if (otherRecordId !== recordId) {
          const response = confirm('レコードが重複しています。このまま保存しますか？');
          if (response === false) {
            return false;
          }
        }
      }
    });
  });
})();