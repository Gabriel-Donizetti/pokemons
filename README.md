<h1 align="center">Desafio Backend - Pokemons</h1>
<p align="center">
<img loading="lazy" src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge"/>
</p>
<p align="center">Este é um projeto onde foi desenvolvido um CRUD simples de pokemons e um algoritmo de batalha entre eles</p>

# :hammer: Funcionalidades do projeto

- `Funcionalidade 1`: CRIAR - Cria um registro na tabela de pokemons
- `Funcionalidade 2`: ALTERAR - Apenas a propriedade treinador pode ser alterada.
- `Funcionalidade 3`: DELETAR - Deleta um registro na tabela de pokemons
- `Funcionalidade 4`: CARREGAR - Busca e retorna um registro na tabela de pokemons
- `Funcionalidade 5`: LISTAR - Lista todos os registros da tabela de pokemons

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma.io](https://www.prisma.io/)
- [Express](https://expressjs.com/pt-br/)

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Node.js](https://nodejs.org/en/), [Docker](https://www.docker.com/).

Crie um container docker com os comandos 

```bash
#Baixa a imagem do postgres
$ docker pull postgres

#Sobe o container coms as configurações basicas
$ docker run -p 5432:5432 -e POSTGRES_PASSWORD=1234 postgres
````

Para fazer a conexão da aplicação com o container, crie um arquivo .env com a variavel de ambiente 
DATABASE_URL="postgresql://postgres:1234@localhost:5432/postgres?schema=public"

### 🎲 Rodando a aplicação

```bash
# Clone este repositório
$ git clone https://github.com/Gabriel-Donizetti/pokemons.git

# Acesse a pasta do projeto no terminal/cmd
$ cd pokemons

# Instale as dependências
$ npm install

#Execute o comendo de migrations para criação do banco
$ npx prisma migrate dev

# Execute a aplicação em modo de desenvolvimento
$ npm run start:dev

# O servidor inciará na porta:4000 - acesse <http://localhost:4000>
````


