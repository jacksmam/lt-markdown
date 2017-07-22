name: inverse
layout: true
class: center, middle, inverse
---
# Angular2事始め
廣池　颯人
---
layout:false
## 誰？
* Classiのフロントエンジニア
* アプリ1年、サーバー1年、フロント3年ぐらいの人
* [こんなの](http://jacksmam.xyz/awesome/)作って遊んでました。
---
## Angularって？
* googleなどが開発しているwebアプリ用 *フレームワーク*
* Reactとかと同じコンポーネント指向
* 推奨環境がTypeScript
* RxJSを使っている
  * イベントなどがデータストリームで処理する
  * promiseのパターンも使える
* Reactとは違いTwoWayBindingを採用してる(一方向じゃない)
* Nativeへのビルド、あります
---
## Angular vs React ?
* React: ステートフルなview用の*ライブラリ*
* rubyで言うとsinatraとrailsのような関係
* phpだとphp serverとlarabelみたいな？
* 状況に合わせて使い分けるべき
---
## Angularのメリット
* ルーティングやhttpリクエストなどアプリケーションに必要なものが一通り揃っている
* Angular-cliで統一された開発環境で開発できる
* TypeScriptと親和性が高いので恩恵を受けやすい(特にAOT)
---
## Angularのデメリット
* TypeScript + RxJSなど初期投資で見ると中々重い
* 色々ありすぎて小さいページだと無駄が多い
* TwoWayBindingなのでReactよりも自由度が増すことが多い(とはいえReactも下手に使うと辛い)
---
## 所感
* 今はReactだ！Angularだ！に惑わされず目的に合わせて使っていきましょう
* ng-japanでの発表でNativeビルドとかwebWorkerに力入れるって話もあったので今後が楽しみ
