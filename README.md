# BMO Desafio Api

Servidor do quadro de avisos da empresa.
A aplicação tem como foco ser uma lousa de avisos para os funcionários.

## Tecnologias Utilizadas

- Express
- TypeScript
- Prisma
- Docker

## Pré-requisitos

- Docker e Docker Compose
- npm
- Node v.20^

## Como rodar o projeto localmente

### 1 - Clone o repositório

```bash
  git clone https://github.com/julia-ctp/desafio-bmo-api.git
```

```bash
  cd desafio-bmo-api
```

### 2 - Instale as dependências

```bash
  npm i
```

### 3 - Configure as variáveis de ambiente

1 - Crie um arquivo `.env` na raiz do projeto.
2 - Copie o arquivo `.env.example` da raiz do projeto.
3 - Cole os valores de `.env.example` em `.env`.

### 4.1 - Rodar o setup do projeto (Makefile)

Na raiz do projeto rode o comando abaixo em seu terminal:

```bash
  make up
```

### 4.2 - Rodar o setup do projeto (Manualmente)

#### 1 - Gerar o banco de dados

```bash
	docker compose up -d
```

#### 2 - Rodar as migrations do prisma

```bash
	npx prisma migrate dev
```

#### 3 - Rodar as seeds no banco de dados

```bash
	npx prisma generate
	npx prisma db seed
```

### 5 - Rodando a aplicação

```bash
  npm run dev
```

## Mais informações

[📄 Documentação das Tabelas](./src/docs/tablesSchemas/tables.md)
