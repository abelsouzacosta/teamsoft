# Desafio Teamsoft

## Objetivo

Criar uma API que seja capaz de realizar operações de CRUD das entidades de Cliente e o seu respectivo endereço.

#### Cliente

* CNPJ
* Razão Social
* Nome de Contato
* Telefone

#### Endereço

* Logradouro
* Número
* Complemento
* Bairro
* Cidade
* Estado
* CEP

### Rodando a aplicação

1. Faça o clone da aplicação com:
  * `git clone git@github.com:abelsouzacosta/teamsoft.git`, se usa ssl
  * `git clone https://github.com/abelsouzacosta/teamsoft.git`, se usa http
2. Entre no diretório: `cd teamsoft`
3. Instale as dependências: `yarn` ou `npm install`
4. Renomeie o arquivo `.env.example` para `.env` e cole as seguintes configurações dentro:

```
PORT=3000

## Database Variables
TYPEORM_CONNECTION=mysql
TYPEORM_HOST=localhost
TYPEORM_PORT=3306
TYPEORM_USERNAME=docker
TYPEORM_PASSWORD=localhost
TYPEORM_DATABASE=teamsoft

## ORM Variables
TYPEORM_LOGGING=true
TYPEORM_ENTITIES=src/modules/**/entities/*.ts
TYPEORM_MIGRATIONS=src/database/migrations/*.ts
TYPEORM_MIGRATIONS_DIR=src/database/migrations
```
5. Essa aplicação faz uso de um banco de dados MySQL, assim sendo é preciso que se tenha uma instância do MySQL na sua máquina, que pode ser obtida através dos seguintes comandos:
* `docker pull mysql`
* `docker run --name mysql_container -e "MYSQL_ROOT_PASSWORD=docker" -e "MYSQL_DATABASE=traux" -e "MYSQL_USER=docker" -e "MYSQL_PASSWORD=localhost" -p 3306:3306 -d mysql:latest`

6. Execute o container mysql: `docker run mysql`

7. Execute aas migrations do banco de dados: `yarn typeorm migration:run` ou `npm run typeorm migration:run`

8. Execute a aplicação com `yarn dev` ou `npm run dev`

A aplicação estará disponível em `http://localhost:3000` e a documentação para o seus endpoints estarpa disponível em `http://localhost:3000/api-docs`.
