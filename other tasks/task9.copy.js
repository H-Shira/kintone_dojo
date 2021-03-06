(() => {
    'use strict'
  
    kintone.events.on(['app.record.create.submit', 'app.record.edit.submit'], (event) => {
    //kintone.events.on(['app.record.create.show', 'app.record.edit.show'], (event) => {
      
      //"eventTyp" = イベントタイプ
      const eventType = event.type;
      //"uniqueName" = 現在のレコードの重複禁止項目の値
      const uniqueName = event.record.重複禁止項目.value;
      //"recordId" = 現在のレコードのレコードIDを取得
      const recordId = kintone.app.record.getId();
      console.log(recordId);
      
  
      //createの時のparms
      const paramsCreate = {
        'fields': '重複禁止項目',
        'app': kintone.app.getId(),
        'query': `重複禁止項目 = "${uniqueName}" `
      };
      //editの時のparms
      const paramsEdit = {
        'app': kintone.app.getId(),
        'query': `重複禁止項目 = "${uniqueName}" `
      };
      
      //createの時の条件文
      if (eventType === "app.record.create.show") {
        return kintone.api(kintone.api.url('/k/v1/records.json', true), 'GET', paramsCreate).then((resp) => {
          if (resp.records.length !== 0) {
            const response = confirm('レコードが重複しています。このまま保存しますか？');
            if (response === false) {
              return false;
            }
          }
        })
      } else {
        return kintone.api(kintone.api.url('/k/v1/records.json', true), 'GET', paramsEdit).then((resp) => {
          const otherRecordId = resp.records[0].$id.value;
          if (resp.records.length !== 0) {
            if (therRecordId !== recordId) {
              const response = confirm('レコードが重複しています。このまま保存しますか？');
              if (response === false) {
                return false;
              }
            }
          }
        })
      }
    });
  })();