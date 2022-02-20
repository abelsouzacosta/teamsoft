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

Essa aplicação faz uso de um banco de dados MySQL, assim sendo é preciso que se tenha uma instância do MySQL na sua máquina, que pode ser obtida através dos seguintes comandos:

1. `docker pull mysql`
2. `docker run --name mysql_container -e "MYSQL_ROOT_PASSWORD=docker" -e "MYSQL_DATABASE=traux" -e "MYSQL_USER=docker" -e "MYSQL_PASSWORD=localhost" -p 3306:3306 -d mysql:latest`
