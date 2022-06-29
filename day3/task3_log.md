# オブジェクト内にオブジェクトをおく方法
参考）https://www.delftstack.com/ja/howto/javascript/create-objects-inside-objects/

## オブジェクト内オブジェクト呼び出し
```
const fileAr = Object.keys(fileManage)
console.log(fileAr);
▼
0: "f001"
1: "f002"
2: "f003"
length: 3
```
```
const fileAr = Object.keys(fileManage)
fileAr.forEach((val) =>{
  console.log(val);
});
▼
f001
f002
f003
```
```
const fileAr = Object.keys(fileManage)
fileAr.forEach((val) =>{
  console.log(fileManage[val]);
});
▼
{folderName: '情報システム部', viewAuth: 'Everyone', editAuth: '情報システム部', deleteAuth: '情報システム部'}
{folderName: '経営管理部', viewAuth: '経営管理部', editAuth: '経営管理部', deleteAuth: '経営管理部'}
{folderName: '営業部', viewAuth: 'Everyone', editAuth: '営業部', deleteAuth: '営業部'}
```

## オブジェクト内オブジェクトのプロパティを取り出す方法
```
fileManage.f001.folderName
or
fileManage[key][key2]
▼
オブジェクト1.オブジェクト2(オブジェクト１におけるプロパティ).プロパティ
オブジェクト1[オブジェクト2(オブジェクト１におけるプロパティ)][プロパティ]　で取り出せる
 ※変数の場合は下必須
```

## リストの書き方
HTMLの箇条書きを用いる。
```
<ul>
 <li></li>
 <li></li>
</ul>
```

### リストに代入する
参考）https://step-learn.com/article/javascript/098-appendchild.html
`document.createElement`を用いる。

## 一つのidに複数の内容を入れる




## コード説明あり
``` 
//▼手順3-2
  const fileAr = Object.keys(fileManage)
  //console.log(fileAr) > 0: "f001" 1: "f002" 2: "f003"
  fileAr.forEach((key) => {
    const fileAr2 = Object.keys(fileManage[key]);
    //console.log(fileAr2) > 0: "folderName" 1: "viewAuth" 2: "editAuth" 3: "deleteAuth"
    fileAr2.forEach((key2) => {
      const ID = key + '-' + key2
      //console.log(ID); > id名が一覧で出た
      document.getElementById(ID).textContent = fileManage[key][key2]
      // 手順3-2は完了
    });
    //▼⼿順3-3
    //オブジェクト内オブジェクトのviewAuthのプロパティ値が「Everyone」の時、
    //そのオブジェクト内オブジェクトのfolderNameのプロパティ値を選び、listにリスト表示する。
    if (fileManage[key]['viewAuth'] === 'Everyone') {
      const li = document.createElement('li');
      li.innerHTML = fileManage[key]['folderName'];
      list.appendChild(li);
  };});
  ```
  

