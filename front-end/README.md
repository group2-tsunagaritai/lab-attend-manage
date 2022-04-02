## ディレクトリ構成・ファイルの説明

### ./src
コードは全てこの中に入る

+ App.js
  + `#root`に配置されるコンポーネント
  + URLとページの対応も記述されている
  + 全ページに共通して表示されるコンポーネントもここに書く

+ index.js
  + `App`を`#root`に配置する処理が書かれている

+ index.css
  + 全ページに適用されるCSS

#### ./src/components
サイトを構成するパーツの関数コンポーネントのファイルを置く

#### ./src/pages
サイトを構成するページを記述したファイルを置く

### ./public
ロゴ等の画像はここに置く

## Node開発環境

Node.jsの開発環境を整えないと起動できない。

### Mac, Linux の場合
+ nvm（Node.jsのバージョン管理ソフト）を入れる
+ Node.jsを入れる
  + Node.jsのバージョンが低いと動かないので注意
  + `node -v` でバージョンを確認できる
+ `npm start` をすると`http://localhost:3000`でサイトが見られる

### Windowsの場合

+ `wsl --install` でwslを導入

+ VSCodeをWindowsに入れる

+ VSCodeのセットアップをする
  + https://enia.hatenablog.com/entry/2021/09/13/090000

+ nvm (Node.jsのバージョン管理ソフト)を入れる
  
+ Node.jsを入れる
  + Node.jsのバージョンが低いと動かないので注意
  + `node -v` でバージョンを確認できる

+ `package.json` があるディレクトリで`npm install`
+ `npm start` をすると`http://localhost:3000`でサイトが見られる
  + WSLとの接続がうまくいっていないときアクセスできないことがある
  + `ip a show dev eth0` 出でてくるアドレスを`http://172.***.***.***:3000`とブラウザに直接入力すれば見れるかも



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
