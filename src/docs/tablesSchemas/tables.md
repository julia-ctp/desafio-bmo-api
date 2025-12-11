# Estrutura das Tabelas

### Tabela: `employee`

| Campo        | Tipo           | Descrição                          |
| ------------ | -------------- | ---------------------------------- |
| `id`         | `cuid` (PK)    | Identificador único do funcionário |
| `first_name` | `varchar(255)` | Primeiro nome do funcionário       |
| `last_name`  | `varchar(255)` | Sobrenome do funcionário           |
| `cpf`        | `varchar(255)` | CPF do funcionário                 |
| `password`   | `varchar(255)` | Senha criptografada                |
| `createdAt`  | `timestamp`    | Data de criação (default: `now()`) |

### Tabela `notice`

| Campo         | Tipo                                          | Descrição                                     |
| ------------- | --------------------------------------------- | --------------------------------------------- |
| `id`          | `cuid` (PK)                                   | Identificador do aviso                        |
| `employee_id` | `FK`                                          | ID do funcionário que criou o aviso           |
| `title`       | `text`                                        | Título do aviso                               |
| `content`     | `text`                                        | Conteúdo do aviso                             |
| `type`        | `enum("importante", "informativo", "nenhum")` | Categoria do aviso                            |
| `createdAt`   | `timestamp`                                   | Data de criação (default: `now()`)            |
| `updatedAt`   | `timestamp`                                   | Data da última atualização (default: `now()`) |

- `employee_id` → referência à coluna `id` da tabela employee

### Tabela: `contact`

| Campo       | Tipo           | Descrição                          |
| ----------- | -------------- | ---------------------------------- |
| `id`        | `cuid` (PK)    | Identificador único da mensagem    |
| `name`      | `varchar(255)` | Nome do remetente                  |
| `email`     | `varchar(255)` | Email do remetente                 |
| `phone`     | `varchar(255)` | Telefone                           |
| `message`   | `text`         | Conteúdo da mensagem               |
| `createdAt` | `timestamp`    | Data de criação (default: `now()`) |
