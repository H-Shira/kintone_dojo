(() => {
    'use strict';
    kintone.events.on('mobile.app.record.create.show', (event) => {
        console.log(event);

        const space = kintone.mobile.app.record.getSpaceElement('space');
        const button = document.createElement('button');

        button.textContent = '登録';
        button.onclick = () => {
            const data = kintone.mobile.app.record.get();
            console.log(data);

            const company = data.record.顧客名1.value;
            const dept = data.record.部署名1.value;
            const name = data.record.担当者名1.value;

            if (!company) {
                window.alert('顧客名が入力されていません');
                return;
            }

            const params = {
                app: 23,
                record: {
                    顧客名: {
                        value: company
                    },
                    部署名: {
                        value: dept
                    },
                    担当者名: {
                        value: name
                    }
                }
            };
            kintone.api(kintone.api.url('/k/v1/record.json', true), 'POST', params)
                .then((resp) => {
                    console.log(resp);
                    window.alert('登録に成功しました');

                    data.record.顧客名.value = company;
                    data.record.顧客名.lookup = true;
                    kintone.app.record.set(data);
                })
                .catch((err) => {
                    console.log(err);
                    window.alert('登録に失敗しました');
                });
             };
        space.appendChild(button);
        return event;
    });
})();