# Minacademy Frontend

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=fga-eps-mds_2020.1-Minacademy-FrontEnd&metric=alert_status)](https://sonarcloud.io/dashboard?id=fga-eps-mds_2020.1-Minacademy-FrontEnd) [![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=fga-eps-mds_2020.1-Minacademy-FrontEnd&metric=code_smells)](https://sonarcloud.io/dashboard?id=fga-eps-mds_2020.1-Minacademy-FrontEnd)[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=fga-eps-mds_2020.1-Minacademy-FrontEnd&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=fga-eps-mds_2020.1-Minacademy-FrontEnd)[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=fga-eps-mds_2020.1-Minacademy-FrontEnd&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=fga-eps-mds_2020.1-Minacademy-FrontEnd)[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=fga-eps-mds_2020.1-Minacademy-FrontEnd&metric=security_rating)](https://sonarcloud.io/dashboard?id=fga-eps-mds_2020.1-Minacademy-FrontEnd)

[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=fga-eps-mds_2020.1-Minacademy-FrontEnd&metric=ncloc)](https://sonarcloud.io/dashboard?id=fga-eps-mds_2020.1-Minacademy-FrontEnd)[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=fga-eps-mds_2020.1-Minacademy-FrontEnd&metric=duplicated_lines_density)](https://sonarcloud.io/dashboard?id=fga-eps-mds_2020.1-Minacademy-FrontEnd)

Repositório do Front End do projeto [Minacademy](https://github.com/fga-eps-mds/2020.1-Grupo4).

## CI / CD

**Principais Arquivos:**

- [Workflow de Deploy](./.github/workflows/homolog-deploy.yml)
  - É executado quando ocorre um push para a develop
  - Etapas:
    1. Roda os testes
    2. Publica a cobertura de testes no Code Climate
    3. Atualiza a imagem Docker no Github Packages
    4. Faz um ssh no servidor de homologação
    5. Atualiza a imagem no servidor
    6. Sobe o container com a imagem atualizada usando o docker-compose que está lá (também pode ser visto nesse repositório, o arquivo _docker-compose-hom.yml_)

- [Workflow de Pull Request](./.github/workflows/pull-requests.yml)
  - É executados em Pull Requests para develop e master
  - Se qualquer uma das etapas falharem, o merge do PR é bloqueado
  - Etapas:
    1. Roda o lint (folha de estilo)
    2. Roda os testes

- [Docker Compose](./docker-compose.yml)
- [Dockerfile](./Dockerfile)

**Tecnologias**

- Conteinerização: Docker e Docker Compose
- Ferramenta de CI: Github Actions
- Qualidade de Código: Code Climate
- Armazenamento da Imagem Docker: Github Packages
- Hospedagem: Digital Ocean

_Obs.: O NGINX no docker compose de homologação foi implementado por outra aluna do grupo de EPS._
