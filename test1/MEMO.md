# メモ

## 最初にやること

> ブラウザからデバッグ可能にする

1. chromeの拡張機能にdev-toolsを入れる。  
1. chromeを再起動すると、開発ツールを開いた時の、consoleとかelementとかっていうタブがいるところに、Vueが出てくるのでそれを使ってデバッグできるようになる。  
1. Vueタブの中でelement（というのか？）を選択すると、console内で、$vm0 指定で選択したelementに直接アクセス可能。  

## 参考サイト

> 更新がホットリロードされる状態で起動する

vueのディレクトリに移動して、
```
npm run dev
```
http://localhost:8080/  
へアクセスする。  

> Vue.js を vue-cli を使ってシンプルにはじめてみる

https://qiita.com/567000/items/dde495d6a8ad1c25fa43

> Vue-cliで作ったプロジェクトの設定

http://vuejs-templates.github.io/webpack/

>  npm run build した際にindex.html以外のファイルを生成する

HtmlWebpackPluginを使う。  
[参照](https://github.com/KosigayaSuguru/vue-test/commit/db363e6945f522631ac1fe9a15dcbcba20f9fb43)  

> 単一ファイルコンポーネントの簡単なサンプル

[参照](https://github.com/KosigayaSuguru/vue-test/commit/673b95a38bb5e0863c791c87baf4f34ac5c3978f)  

> RSSをJsonに変換する

しかも↓にしてくれてるので自由にとれる。
Access-Control-Allow-Origin:*

http://lab.astamuse.co.jp/entry/2017/10/18/131506

> コンポーネントのメソッドを直接呼ぶ

chromeのdev-toolsが入っている前提で、  
vueタブからコンポーネントを選択して（$vm0でアクセスできる状態にして）、  
```javascript
$vm0.method()
```
で呼び出し可能。  
