# webpackのメモ

## 出力されるscriptタグに記述されるパスを設定するところ

output オプションの publicPath を変えると変わる。  
例：  
publicPath: '/' の場合、
```html
<script type="text/javascript" src="/xxxx/xxxx/xxxx.js">
```
publicPath: './' の場合、
```html
<script type="text/javascript" src="./xxxx/xxxx/xxxx.js">
```
になる。
  
※ここで書いた値が HtmlWebpackPlugin がインジェクトして出力するscriptタグの中身と連動する細かい理由は不明。。

## 出力されるHTMLを最小化（minify）する

HtmlWebpackPlugin の minify オプション。  
※build\webpack.prod.conf.js 参照  

## HtmlWebpackPluginで出力されるHTMLに使用するjs用のscriptタグを出力する

HtmlWebpackPlugin のinjectオプション。デフォルトは true になっているので切りたいときは false にする。  
（切りたいときはあんまりないと思うけど。。）  
※build\webpack.prod.conf.js 参照  

## HtmlWebpackPluginの"inject"でインジェクトされるjsファイルについて

HMTLの中を解析して、必要なjsファイルを選んでscriptタグを作ってくれるわけではない。。  
全ファイルに同じscriptタグが一律で出力されるっぽい。。  

# リンク

## 公式
https://webpack.js.org/  
https://webpack.js.org/concepts/  

## HtmlWebpackPlugin
https://github.com/jantimon/html-webpack-plugin  

## webpackでモジュール解決しながらディレクトリ構成を保ったまま書き出す
https://qiita.com/fukamiiiiinmin/items/85b3b5cb6e65d9b4ebdd  
