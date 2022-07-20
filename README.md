# template_markup

## 環境構築
1. docker-compose up -d
1. http://localhost:8080/

## フロント環境構築
1. git clone
1. cd template_markup/html/dev
1. npm i
1. npx gulp

## 初期化
```
docker stop $(docker ps -q -a) && docker rm $(docker ps -q -a)
docker rmi `docker images -q`
```