# promise記法
## promise記法について
参考）
- 「非同期処理の完了を待つ方法！Promise＆async/await【分かりすぎて怖いJavaScript入門】」
  https://youtu.be/Vhnz1V-v1cU

jsは基本的に非同期処理（上から順でなく、上からやってって長引きそうな処理があったらその処理だけ飛ばして後から結果を出す）。
時間がかかる処理はWEBapiを使う時やデータベースにクエリを投げる時。でも、後回しにされると困る時って多々あるよね…？
そんな時に使うのがpromise。
これを使うと、『ここだけは同期的処理でやってね〜』という目印になる。後回しにされると困るapi処理とかでよく使う。

ex)
▼非同期処理のまま
```
// 非同期処理をおこなう関数を宣言
const getGitUsername = () => {
    const url = 'https://api.github.com/users/deatiger'

    // GitHub APIをFetchメソッドで実行
    fetch(url).then(res => res.json())
        .then(json => {
            console.log('これは非同期処理成功時のメッセージです')
            return json.login
        }).catch(error => {
            console.error('これは非同期処理失敗時のメッセージです。', error)
            return null
        })

};

const message = 'GitのユーザーIDは'
const username = getGitUsername()
console.log(message + username)
```
💬これだと`getGitUsername()`が後回しにされてうまくいかない！
💬だからこのapiの処理を同期的処理にする！

```
// 非同期処理をおこなう関数を宣言
const getGitUsername = () => {
    return new Promise((resolve, reject) => {  //⇦NEW!!ネストが一段深くなる
        const url = 'https://api.github.com/users/deatiger'

        // GitHub APIをFetchメソッドで実行
        fetch(url).then(res => res.json())
            .then(json => {
                console.log('これは非同期処理成功時のメッセージです')
                return resolve(json.login)
            }).catch(error => {
                console.error('これは非同期処理失敗時のメッセージです。', error)
                return reject(null)
            })

    }) //⇦NEW!!(new Promiseのとじかっこ）
};

const message = 'GitのユーザーIDは'
getGitUsername().then(username => {　　//⇦NEW!!チェインが必要
    console.log(message + username)　　//⇦NEW!!
});
```

## async/await記法
async/awaitはもっと簡単！
- 非同期処理を伴う関数定義時に「async」を使う
- 非同期処理を伴う関数実行時に「await」を使う
  ※「await」は「async」付き関数内でしか使えない

```
// 非同期処理をおこなう関数を宣言
const getGitUsername = async () => {　　//⇦NEW!!関数定義に「async」を置く
    const message = 'GitのユーザーIDは';
    const url = 'https://api.github.com/users/deatiger'

    const json = await fetch(url)　　////⇦NEW!!実行時に「await」を置く
        .then(res => {
            console.log('これは非同期処理成功時のメッセージです')
            return res.json()
        }).catch(error => {
            console.error('これは非同期処理失敗時のメッセージです。', error)
            return null
        });

    const username = json.login;
    console.log(message + username)
}

getGitUsername()
```

# kintone_promise
参考）
- 「kintoneにおけるPromiseの書き方の基本」
  https://developer.cybozu.io/hc/ja/articles/360023047852
- 「kintone REST API リクエスト」
  https://developer.cybozu.io/hc/ja/articles/202166310

## kintoneにおけるPromiseの書き方の基本



# promise記法と関数記法
※色々混じって混乱するため追記

## 関数記法
### 基本形
```
const 関数名 = function(要求するパラメータ) {
    具体的な処理内容
    return 関数が返す値（戻り値）
    };

//実行する時//
関数名(要求されたパラメータ)
```
ex)
```
const total = function(price) {
    const tax = 0.1;
    return price + price * tax;
    };

//実行する時//
total(1000)
```

### 関数の定義の仕⽅
関数の定義の仕⽅は複数ある。
#### 1. 関数宣言
定義する前に呼び出すこと（ホイスト）が可能。
```
function total(x, y) {
    return x + y;
    };
```

#### 2. 関数式
最も多く⾒る形。変数を定義しそこに関数を格納する。
```
const total = function(x, y) {
    return x + y;
    };
```

#### 3. 関数式（アロー関数）
ES6から登場した形。「function」を省略できる。
```
const total = (x, y) => {
    return x + y;
    };

//今回の場合、アロー関数なら⼀⾏で表すこともできる。戻り値がそのままならreturnも省略できる//
const total = (x, y) => (x + y);

//何なら括弧も省略できる//
const total = (x, y) => x + y;
```
## returnのタイミング
