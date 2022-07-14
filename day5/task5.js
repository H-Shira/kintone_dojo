(() => {
  'use strict';

  const getNews = async () => {
    await axios.get('https://54o76ppvn8.execute-api.ap-northeast-1.amazonaws.com/prod/bb-dojo', {
      params: {
        id: 'dojo',
      }
    })
    .then((resp) => {
      const newsContents = resp.data //ニュース内容の配列

      newsContents.forEach((key) => {
        const day = key.day.value; //dayのデータを抽出
        const category = key.category.value; //categoryのデータを抽出
        const content = key.content.value; //contentのデータを抽出
        const label = key.label.value; //labelのデータを抽出
        const target = key.target.value; //targetのデータを抽出
        const url = key.url.value; //urlのデータを抽出

        const tbl = document.getElementById('tbl'); //htmlのtblを取得
        const tr = document.createElement('tr'); //空の行要素の作成関数

        const tdDay = document.createElement('td');
        tdDay.innerText = day;
        tr.appendChild(tdDay);

        const tdCategory = document.createElement('td');
        tdCategory.innerText = category;

        //labelごとに異なるclassを設定する
        if (label === 'company') {
          tdCategory.classList.add('labels', 'Blue');
        } else if (label === 'product') {
          tdCategory.classList.add('labels', 'Green');
        } else {
          tdCategory.classList.add('labels', 'Red');
        }

        tr.appendChild(tdCategory);

        const tdContent = document.createElement('td');
        const contentLink = document.createElement('a');
        contentLink.href = url;
        contentLink.target = target;
        contentLink.innerText = content;
        tdContent.appendChild(contentLink);
        tr.appendChild(tdContent);

        tbl.appendChild(tr);
      });
    });
  };
  getNews();
})();
