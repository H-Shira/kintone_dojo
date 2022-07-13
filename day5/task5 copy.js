(() => {
  'use strict';
  const NEWS = async () => {
    axios.get('https://54o76ppvn8.execute-api.ap-northeast-1.amazonaws.com/prod/bb-dojo', {
    params: {
      id: 'dojo',
    }
  })
  .then((resp) => {
    const newsContents = resp.data
    console.log(newsContents);

    //newsContents分、テーブルの追加と値の挿入を行う
    newsContents.forEach((key) => {

      const day = key.day.value; //dayのデータを抽出
      const category = key.category.value; //categoryのデータを抽出
      const content = key.content.value; //contentのデータを抽出
      console.log(day + category + content);

      const tbl = document.getElementById('tbl'); //htmlの'tbl'を指定
      const trOftbl = document.createElement("tr"); //空の行要素の作成関数
      const tdOfTr = document.createElement("td"); //空のセル要素の作成関数
      
      //const dataArray = [day, category, content];
      //dataArray.forEach((data) =>{
        await document.createElement("tr").appendChild(tdOfTr);
      //});
      await document.getElementById('tbl').appendChild(trOftbl);
    });
    
    NEWS;
    
    //テーブルを作成
    
    return resp;
  })
}
})();

