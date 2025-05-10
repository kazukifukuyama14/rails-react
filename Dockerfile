# Builderステージ
FROM node:18 AS node-builder

WORKDIR /app

# フロントエンド依存関係
COPY package*.json ./
RUN npm install

# フロントエンドソースをコピー（もし app/javascript などあれば適宜指定）
COPY app/javascript /app/app/javascript

# ビルド
RUN npm run build
RUN ls -la /app
RUN ls -la /app/assets
RUN ls -la /app/assets/builds


# 本番ステージ
FROM ruby:3.2

# 必要なパッケージ
RUN apt-get update -qq && \
    apt-get install -y nodejs postgresql-client && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Gemfile関連
COPY Gemfile Gemfile.lock ./
RUN bundle install

# プロジェクト全体コピー
COPY . .

# ビルド済みフロントエンドをコピー
COPY --from=node-builder /app/assets/builds /app/public/assets

# ポート
EXPOSE 3000

# デフォルトコマンド
CMD ["rails", "server", "-b", "0.0.0.0"]
