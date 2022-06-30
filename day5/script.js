//HTMLにテキストフォームとボタンを用意して
//郵便番号を入力してボタンを押すと住所を取得
//取得した住所をアラートに表示する

(() => {
    'use strict';

    const getAddress = async (zipcode) => {
        const res = await axios.get('https://api.zipaddress.net/', {
            params: {
                zipcode:zipcode,
            },
        });
            return res.data.data.fullAddress;
    };

    document.getElementById('btn').onclick = async () => {
        const address = await getAddress(document.getElementById('yubin').value);
        window.alert(address);
    };

    //getAddress(2340051);

    //const Yubin = document.getElementById('yubin');
    //const Btn = document.getElementById('btn');
    //
    //Btn.onclick = () => {
    //    console.log(1);
    //    getAddress(Yubin);
    //};


})();


