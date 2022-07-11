# 基本形
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

# 関数の定義の仕⽅
関数の定義の仕⽅は複数ある。
## 1. 関数宣言
定義する前に呼び出すこと（ホイスト）が可能。
```
function total(x, y) {
    return x + y;
    };
```

## 2. 関数式
最も多く⾒る形。変数を定義しそこに関数を格納する。
```
const total = function(x, y) {
    return x + y;
    };
```

## 3. 関数式（アロー関数）
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
