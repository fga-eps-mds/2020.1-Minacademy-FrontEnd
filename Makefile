build:
	docker-compose up --build

run:
	docker-compose up

start:
	docker-compose start

stop:
	docker-compose stop

list:
	docker-compose ps

npm:
	docker-compose exec app npm install $(pacote)

npm-dev:
	docker-compose exec app npm install -D $(pacote)

yarn:
	docker-compose exec app yarn add $(pacote)

yarn-dev:
	docker-compose exec app yarn add --dev $(pacote)