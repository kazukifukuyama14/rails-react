# React × Rails アプリケーション（Docker コンテナ化）

本リポジトリは、React と Ruby on Rails を組み合わせたアプリケーションを Docker でコンテナ化した構成です。

今回の構成は以下のリポジトリを参考に作成しています。  
引用元：`https://github.com/MarkoAvlijas/react-rails-docker`

---

## 📦 概要

- フロントエンド：React（Webpacker）
- バックエンド：Ruby on Rails
- データベース：PostgreSQL
- 開発環境：Docker（docker-compose）

Rails アプリケーションと PostgreSQL データベースを Docker コンテナで構築し、簡単に開発環境を立ち上げられるようにしました。

---

## 🚀 起動方法

以下の手順で開発環境を立ち上げることができます。

### 1️⃣ コンテナのビルドと起動

```bash
docker compose up --build -d
```

※初回起動時、依存関係のインストールに時間がかかる場合があります。

## 2️⃣ データベースの作成

コンテナ内で以下のコマンドを実行してデータベースを作成します。

```bash
docker compose exec app bin/rails db:create
docker compose exec app bin/rails db:migrate
```

必要に応じて、初期データ投入（seed）も可能です。

```bash
docker compose exec app bin/rails db:seed
```

## 3️⃣ ブラウザでアクセス

以下の URL にアクセスすると、アプリケーションのトップページが表示されます。

`http://localhost:3000`

---

## 📝 プロジェクト構成について

- `docker-compose.yml`：アプリケーションとデータベースのサービス定義
- `Dockerfile`：Rails アプリケーション用のビルド定義
- `app/`：Rails アプリケーションのソースコード
- `config/`：設定ファイル
- `db/`：マイグレーションやシードデータ

---


</br>

## 🧑‍💻 補足事項

- 開発用ポート：
  - アプリケーション → 3000 番ポート
  - データベース → 5432 番ポート
- データベース接続情報は`docker-compose.yml`内の`environment`に記載しています。
