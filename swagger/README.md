# Swagger を利用したモックサーバー

API がないと使えないページを API ができる前に開発するためのモックサーバー

`/api/user/1` に対して `{name:'aaaa', id:'1234'}` を返す といったようなことを決めておける

## 使い方

1. server ディレクトリに移動
2. `npm start`
3. [localhost:8080/docs](localhost:8080/docs) にアクセス

## codegen

1. swagger-codegen-cli.jar を入手
2. java を導入
3. `java -jar swagger-codegen-cli.jar generate -i swagger.yaml -l nodejs-server -o server`
