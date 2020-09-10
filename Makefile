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
	docker exec -it 20201-grupo4-frontend_app_1 npm install $(pacote)

npm-dev:
	docker exec -it 20201-grupo4-frontend_app_1 npm install -D $(pacote)

yarn:
	docker exec -it 20201-grupo4-frontend_app_1 yarn add $(pacote)

yarn-dev:
	docker exec -it 20201-grupo4-frontend_app_1 yarn add --dev $(pacote)