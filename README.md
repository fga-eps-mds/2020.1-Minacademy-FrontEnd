# Minacademy Frontend

[![Maintainability](https://api.codeclimate.com/v1/badges/7ce4a9cafb291faa20a0/maintainability)](https://codeclimate.com/github/fga-eps-mds/2020.1-Minacademy-FrontEnd/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/7ce4a9cafb291faa20a0/test_coverage)](https://codeclimate.com/github/fga-eps-mds/2020.1-Minacademy-FrontEnd/test_coverage) 

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=fga-eps-mds_2020.1-Minacademy-FrontEnd&metric=alert_status)](https://sonarcloud.io/dashboard?id=fga-eps-mds_2020.1-Minacademy-FrontEnd) [![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=fga-eps-mds_2020.1-Minacademy-FrontEnd&metric=code_smells)](https://sonarcloud.io/dashboard?id=fga-eps-mds_2020.1-Minacademy-FrontEnd)[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=fga-eps-mds_2020.1-Minacademy-FrontEnd&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=fga-eps-mds_2020.1-Minacademy-FrontEnd)[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=fga-eps-mds_2020.1-Minacademy-FrontEnd&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=fga-eps-mds_2020.1-Minacademy-FrontEnd)[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=fga-eps-mds_2020.1-Minacademy-FrontEnd&metric=security_rating)](https://sonarcloud.io/dashboard?id=fga-eps-mds_2020.1-Minacademy-FrontEnd)

[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=fga-eps-mds_2020.1-Minacademy-FrontEnd&metric=ncloc)](https://sonarcloud.io/dashboard?id=fga-eps-mds_2020.1-Minacademy-FrontEnd)[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=fga-eps-mds_2020.1-Minacademy-FrontEnd&metric=duplicated_lines_density)](https://sonarcloud.io/dashboard?id=fga-eps-mds_2020.1-Minacademy-FrontEnd)



Repositório do Front End do projeto [Minacademy](https://github.com/fga-eps-mds/2020.1-Grupo4).

## Teste Funcional

O teste funcional visa verificar a aceitabilidade dos dados, do
processamento, da resposta do mesmo e a implementação apropriada das regras de negócio. Este tipo de teste é baseado nas técnicas de caixa-preta, ou seja, verificar o sistema
e seu processo interno pela sua interação através da Interface Gráfica do Usuário (GUI) e da
análise das saídas ou resultados.

### Testes executados no projeto

- Fazer login com usuário não cadastrado
- Fazer login com usuário do tipo aprendiz
  - Navegar da dashboard para o tutorial
  - Abrir dropdown do tutorial e ir para Módulo 2
  - Acessar atividades do módulo
  - Responder incorretamente a questão
  - Responder corretamente a questão
  - Concluir as atividades
  - Cancelar redirecionamento para aba certificados
  - Abrir aba de Mentoria
  - Cancelar solicitação de Mentor
  - Solicitar Mentor
  - Desvincular do Mentor
  - Solicitar Mentor
  - Abrir dropdown do cabeçalho
  - Acessar aba de certificados
  - Verificar certificados
- Fazer login de usuário do tipo Mentor
  - Abrir e responder Avaliação
    - Fracassar na Avaliação
    - Conseguir ser aprovado
  - Abrir configurações de usuário
- Fazer cadastro na plataforma como aluno
  - Escolher gênero masculino
    - Tentar escolher tipo aluno
  - Escolher gênero masculino
    - Escolher tipo aluno
- Fazer requisito de alteração de senha, por meio do esqueci minha senha
  - Verificar que email foi enviado com sucesso
  - Verificar usuário não cadastrado
- Abrir um certificado por link público

## Executando o projeto

- Instale o [Docker](http://docs.docker.com/get-docker/) e o [Compose](http://docs.docker.com/compose/install/#install-compose) no seu computador

- Rode o backend do projeto. Saiba mais [aqui](https://github.com/fga-eps-mds/2020.1-Grupo4-BackEnd)

- Baixe este repositório e entre na pasta baixada

- Se essa é a primeira vez que está rodando o projeto, execute `make build`

- Se já rodou o projeto antes, execute `make run`

- Se você fez os passos acima e não houve nenhum erro, o projeto já está rodando em [localhost:3000](localhost:3000) =D

## Instalação de Pacotes

Se você deseja instalar um pacote utilizando npm, leia as instruções a seguir:

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
