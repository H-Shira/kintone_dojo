(() => {
  'use strict'
    const events = [
      'app.record.create.submit', 
      'app.record.create.change.重複禁止項目', 
      'app.record.edit.change.重複禁止項目'
    ];

    let uniqueName;

    kintone.events.on(events, (event) => {
    //kintone.events.on(['app.record.create.change.重複禁止項目', 'app.record.edit.change.重複禁止項目'], (event) => {
      console.log(event);

      //"id" = 現在のレコードの重複禁止項目の値
      uniqueName = event.record.重複禁止項目.value;
      console.log(uniqueName);

      //"uniqueName"と重複する重複禁止項目値を持ったレコードだけを抽出
      const params = {
        'fields': '重複禁止項目',
        'app': 31,
        'query': '重複禁止項目 = "' + uniqueName + '"'
      };

        //「"uniqueName"と重複する重複禁止項目値を持ったレコードが存在していれば」の条件づけ
        return kintone.api(kintone.api.url('/k/v1/records.json', true), 'GET', params, (resp) => {
          console.log(resp);
          console.log(resp.records);

          if (resp.records.length !== 0) {
            if (confirm('レコードが重複しています。このまま保存しますか？')) {
              // return true;
              return event;
            } else {
              return false;
              //event.error = 'キャンセルしました';
              //return event;
            }
          };

            //console.log(resp.records); //配列
            //console.log(resp.records[1]); //オブジェクト
            //console.log(resp.records[1].重複禁止項目.value); //id
//
            ////アプリ全体の重複禁止項目の値のみを配列で取得
            //const allIdArray = [];
            //resp.records.forEach((key) => {
            //   allIdArray.push(key.重複禁止項目.value);
            //   //allIdArray = (key.重複禁止項目.value)
            //});
            //console.log(allIdArray);
//
            ////allIdArrayと現レコードのidを比較し、ifで条件分け
            //allIdArray.forEach((key) => {
            //    const otherId = key;
            //    
            //    if (otherId !== id) {
            //        return event;
            //    }
//
            //        const result = confirm('レコードが重複しています。このまま保存しますか？');
            //        if (result === false) {
            //            return false;
            //        };
            //        
            //    
            //        //if (confirm('レコードが重複しています。このまま保存しますか？')) {
            //        //    //保存
            //        //    return true;
            //        //} else {
            //        ////    //保存の中止
            //        //event.error = 'キャンセルしました';
            //        //return event;
            //        //}
    //
            //});
            return event;
          });
        });
    
    //kintone.events.on('app.record.edit.submit', (event) => {
    //    const params = {
    //        'fields': '重複禁止項目',
    //        'app': 31,
    //        'query': '重複禁止項目 = "' + id + '"'
    //    };
    //    
    //    return kintone.api(kintone.api.url('/k/v1/records.json', true), 'GET', params, (resp) => {
    //        console.log(resp);
    //        console.log(resp.records);
    //        
    //        if (resp.records.length > 1)  {
    //            if (confirm('レコードが重複しています。このまま保存しますか？')) {
    //                return true;
    //            } else {
    //                return false;
    //                //event.error = 'キャンセルしました';
    //                //return event;
    //            }
    //        };
    //    
    //});

  })();