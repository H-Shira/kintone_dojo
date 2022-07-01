(() => {
    'use strict';
    kintone.events.on('app.record.create.change.提案プラン', (event) =>{
        console.log(event);
        const plan = event.record.提案プラン.value;
        const today = new Date()
        let addedDate;
        switch(plan) {
            case 'Aプラン':
                addedDate = dateFns.addWeeks(today, 1);
                break;
            case 'Bプラン':
                addedDate = dateFns.addMonths(today, 1);
                break;
            default:
                addedDate = today;
        }
        event.record.受注予定日.value = dateFns.format(addedDate, 'YYYY-MM-DD');
        return event;
    });
})();