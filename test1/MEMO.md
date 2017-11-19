# メモ

## 最初にやること

> ブラウザからデバッグ可能にする

1. chromeの拡張機能にdev-toolsを入れる。  
1. chromeを再起動すると、開発ツールを開いた時の、consoleとかelementとかっていうタブがいるところに、Vueが出てくるのでそれを使ってデバッグできるようになる。  
1. Vueタブの中でelement（というのか？）を選択すると、console内で、$vm0 指定で選択したelementに直接アクセス可能。  

## 参考サイト

> Vue.js を vue-cli を使ってシンプルにはじめてみる

https://qiita.com/567000/items/dde495d6a8ad1c25fa43

> Vue-cliで作ったプロジェクトの設定

http://vuejs-templates.github.io/webpack/

>  npm run build した際にindex.html以外のファイルを生成する

HtmlWebpackPluginを使う。  
[参照](https://github.com/KosigayaSuguru/vue-test/commit/db363e6945f522631ac1fe9a15dcbcba20f9fb43)  

