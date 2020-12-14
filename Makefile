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

cypress-open:
	docker-compose -f docker-compose.yml -f cy-run.yml -f cy-open.yml up --exit-code-from cypress

cypress-run:
	docker-compose -f docker-compose.yml -f cy-run.yml up --exit-code-from cypress