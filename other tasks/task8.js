(() => {
    'use strict';
    kintone.api(kintone.api.url('/k/v1/app/form/fields.json', true), 'GET', params, (resp) => {
        console.log(resp);
    })
})();