# Minacademy Frontend

[![Maintainability](https://api.codeclimate.com/v1/badges/7ce4a9cafb291faa20a0/maintainability)](https://codeclimate.com/github/fga-eps-mds/2020.1-Minacademy-FrontEnd/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/7ce4a9cafb291faa20a0/test_coverage)](https://codeclimate.com/github/fga-eps-mds/2020.1-Minacademy-FrontEnd/test_coverage)

Repositório do Front End do projeto [Minacademy](https://github.com/fga-eps-mds/2020.1-Grupo4).

## Executando o projeto

- Instale o [Docker](http://docs.docker.com/get-docker/) e o [Compose](http://docs.docker.com/compose/install/#install-compose) no seu computador

- Rode o backend do projeto. Saiba mais [aqui](https://github.com/fga-eps-mds/2020.1-Grupo4-BackEnd)

- Baixe este repositório e entre na pasta baixada

- Se essa é a primeira vez que está rodando o projeto, execute `make build`

- Se já rodou o projeto antes, execute `make run`

- Se você fez os passos acima e não houve nenhum erro, o projeto já está rodando em [localhost:3000](localhost:3000) =D

## Instalação de Pacotes

Se você deseja instalar um pacote utilizando npm ou yarn leia as instruções a seguir:

- Execute o comando `make npm pacote=<nome-do-pacote>`
- Se for uma dependência apenas para desenvolvimento execute `make npm-dev pacote=<nome-do-pacote>`
- Caso deseje utilizar o yarn, basta substituir 'npm' por 'yarn'

## Comandos Úteis

| Comando                             | Descrição                                   |
| ----------------------------------- | ------------------------------------------- |
| `make start`                        | Inicia o container quando este está pausado |
| `make stop`                         | Pausa a execução do container               |
| `make list`                         | Lista os containers em execução             |
| `docker-compose exec app <comando>` | Executa um comando dentro do container      |

## Documentação

A documentação desse projeto pode ser acessada [aqui](https://fga-eps-mds.github.io/2020.1-Grupo4/).
