# 課題内容
目標：task7の　①重複したら確認は取るけど保存はできる　②計算⽤フィールドも配置しない　バージョンを作る。

# 作戦
1. 重複禁止項目の文字列を取得
2. 取得した文字列がこれまでの重複禁止項目と被ってないか確認
3. - 被っていなければ普通に登録
   - 被っていればwindow.alertから確認
4. 被っていてalertに「false」を返せば保存がキャンセルされる

※注意
![image](https://user-images.githubusercontent.com/107820348/177480112-e4760c51-9c08-4b63-ae3a-2f522624340e.png)

## 1. 重複禁止項目の文字列を取得
参考）https://developer.cybozu.io/hc/ja/articles/204783170