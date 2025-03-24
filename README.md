# CollabBoard

CollabBoard é uma plataforma colaborativa para gerenciamento de projetos e tarefas, composta por uma aplicação full-stack com front-end em Vue.js (TypeScript) e back-end em Node.js/Express (TypeScript) utilizando Prisma ORM e PostgreSQL. Este repositório central organiza o projeto completo, contendo duas pastas principais: front e back.

---

## A estrutura do repositório é a seguinte:

    /CollabBoard
    ├── /front
    │   ├── public/            # Arquivos públicos (HTML, favicon, etc.)
    │   ├── src/               # Código fonte do front-end (componentes, páginas, estilos)
    │   ├── package.json       # Dependências e scripts do Vue.js
    │   └── tsconfig.json      # Configuração do TypeScript para o front-end
    │
    └── /back
        ├── src/
        │   ├── controllers/   # Controladores para lidar com as requisições HTTP
        │   ├── middlewares/   # Middlewares (ex.: autenticação, tratamento de erros)
        │   ├── prisma/        # Arquivo schema.prisma e instância do Prisma Client
        │   ├── routes/        # Definição das rotas da API
        │   ├── services/      # Lógica de negócio e interação com o banco de dados
        │   ├── app.ts         # Configuração do Express e middlewares globais
        │   └── server.ts      # Ponto de entrada do back-end
        ├── package.json       # Dependências e scripts do back-end
        └── tsconfig.json      # Configuração do TypeScript para o back-end

---

## Tecnologias Utilizadas

### Front-end

    •	Vue.js com TypeScript – Desenvolvimento de uma interface moderna e reativa.
    •	Vue Router – Gerenciamento de rotas.
    •	State Management (Pinia ou Vuex) – Gerenciamento de estado global.
    •	Axios – Comunicação com a API do back-end.
    •	Outras bibliotecas de UI – (opcional, conforme sua escolha, como Vuetify, Tailwind CSS, etc.)

### Back-end

    •	Node.js com Express e TypeScript – Servidor e gerenciamento de rotas da API.
    •	Prisma ORM – Mapeamento objeto-relacional, migrações e interação com PostgreSQL.
    •	PostgreSQL – Banco de dados relacional.
    •	JWT – Autenticação e autorização seguras.
    •	Jest – Testes unitários e de integração.

---

## Pré-requisitos

    Antes de iniciar, certifique-se de ter instalados:
      • Node.js v14 ou superior
      • npm ou Yarn
      • PostgreSQL (para o back-end)

---

## Instalação e Configuração

### 1. Clonar o Repositório

```bash
git clone https://github.com/allanrsfer/CollabBoard.git
cd CollabBoard
```

### 2. Instalar Dependências

#### Front-end

```bash
cd front
npm install
# ou: yarn install
```

#### Back-end

```bash
cd back
npm install
# ou: yarn install
```

### 3. Configurar Variáveis de Ambiente

Crie um arquivo .env na pasta back com as seguintes variáveis:

```bash
DATABASE_URL="postgresql://<usuario>:<senha>@localhost:5432/collabboard?schema=public"
PORT=3000
JWT_SECRET=seuSegredoAqui
```

### 4. Inicializar o Prisma e as Migrações (Back-end)

Dentro da pasta back, execute:

```bash
npx prisma generate --schema=./src/prisma/schema.prisma
npx prisma migrate dev --schema=./src/prisma/schema.prisma --name init
```

## Execução do Projeto

### Front-end

Na pasta front, inicie o servidor de desenvolvimento:

```bash
npm run server
# ou: yarn server
```

A aplicação estará disponível normalmente em http://localhost:8080 (ou a porta configurada pelo Vue).

### Back-end

Na pasta back, inicie o servidor:

```bash
npm run dev
# ou: yarn dev
```

O servidor será iniciado na porta definida na variável PORT (por padrão, 3000).

---

## Testes

### Back-end

Para rodar os testes automatizados com Jest:

```bash
cd back
npm run test
# ou: yarn test
```

<!-- Documentação da API

A documentação dos endpoints pode ser gerada com Swagger ou definida manualmente via Postman. Se o Swagger estiver configurado, acesse o endpoint (por exemplo, /docs) após iniciar o back-end. -->

## Contribuição

Contribuições são bem-vindas! Para contribuir: 1. Faça um fork deste repositório. 2. Crie uma branch para sua feature:

```bash
git checkout -b minha-feature
```

3. Realize os commits com as alterações.
4. Abra um Pull Request para revisão.

---

## Licença

Este projeto está licenciado sob a [Nome da Licença]. Consulte o arquivo LICENSE para mais detalhes.

---

## Contato

    Para dúvidas, sugestões ou feedback, entre em contato:
    • Nome: Allan Rieri
    • Email: allanrieri@gmail.com
