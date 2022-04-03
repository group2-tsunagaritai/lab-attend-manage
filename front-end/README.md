## 起動方法

Node.js の開発環境を整えないと起動できない。

### Mac, Linux の場合

- nvm（Node.js のバージョン管理ソフト）を入れる
- Node.js を入れる
  - Node.js のバージョンが低いと動かないので注意
  - `node -v` でバージョンを確認できる
- `npm start` をすると`http://localhost:3000`でサイトが見られる

### Windows の場合

- `wsl --install` で wsl を導入

- VSCode を Windows に入れる

- VSCode のセットアップをする

  - https://enia.hatenablog.com/entry/2021/09/13/090000

- nvm (Node.js のバージョン管理ソフト)を入れる
- Node.js を入れる

  - Node.js のバージョンが低いと動かないので注意
  - `node -v` でバージョンを確認できる

- `package.json` があるディレクトリで`npm install`
- `npm start` をすると`http://localhost:3000`でサイトが見られる
  - WSL との接続がうまくいっていないときアクセスできないことがある
  - `ip a show dev eth0` 出でてくるアドレスを`http://172.***.***.***:3000`とブラウザに直接入力すれば見れるかも

## ディレクトリ構成・ファイルの説明

### ./src

コードは全てこの中に入る

- App.js

  - `#root`に配置されるコンポーネント
  - URL とページの対応も記述されている
  - 全ページに共通して表示されるコンポーネントもここに書く

- index.js

  - `App`を`#root`に配置する処理が書かれている

- index.css
  - 全ページに適用される CSS

#### ./src/components

サイトを構成するパーツの関数コンポーネントのファイルを置く

#### ./src/pages

サイトを構成するページを記述したファイルを置く

### ./public

ロゴ等の画像はここに置く

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
