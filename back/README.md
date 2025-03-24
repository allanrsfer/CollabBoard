# CollabBoard - Back-end

CollabBoard é uma plataforma colaborativa de gerenciamento de projetos e tarefas. Este repositório contém o back-end da aplicação, desenvolvido em Node.js com Express e TypeScript, utilizando o Prisma para ORM e PostgreSQL como banco de dados. O objetivo deste projeto é demonstrar uma arquitetura limpa com separação de responsabilidades entre controllers, services e demais camadas, além de seguir boas práticas de desenvolvimento.

## Funcionalidades

    • Gerenciamento de Usuários: Cadastro, autenticação e gerenciamento de perfis.
    • Gerenciamento de Boards: Criação, atualização e deleção de quadros.
    • Listas e Tarefas: Estruturação de listas dentro dos boards e tarefas associadas, com ordenação e status.
    • Autenticação Segura: Uso de JWT para proteção de endpoints.
    • Migrações de Banco de Dados: Controle de versões e alterações no schema com o Prisma.
    • Testes Automatizados: Cobertura de testes unitários e de integração com Jest.

## Tecnologias Utilizadas

    • Node.js com Express – Servidor e rotas HTTP.
    • TypeScript – Tipagem estática e maior robustez no desenvolvimento.
    • Prisma ORM – Mapeamento objeto-relacional e migrações automatizadas.
    • PostgreSQL – Banco de dados relacional.
    • JWT – Autenticação segura.
    • Jest – Framework para testes automatizados.

## Estrutura do Projeto

    /src
      ├── /controllers # Controladores que recebem requisições HTTP e chamam os serviços correspondentes
      ├── /middlewares # Middlewares para autenticação, validação, tratamento de erros, etc.
      ├── /prisma # Arquivos relacionados ao Prisma (client, schema.prisma)
      ├── /routes # Definição das rotas da API
      ├── /services # Lógica de negócio e interações com o banco de dados via Prisma
      ├── app.ts # Configuração do Express e middlewares globais
      └── server.ts # Ponto de entrada do servidor

## Pré-requisitos

    •	Node.js v14 ou superior
    •	PostgreSQL instalado e em execução
    •	Gerenciador de pacotes (npm ou yarn)

## Instalação e Configuração

### 1. Clone o repositório:

```bash
git clone <URL_DO_REPOSITÓRIO>
cd CollabBoard/back
```

### 2. Instale as dependências:

```bash
npm install
```

### 3. Configure as variáveis de ambiente:

Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:

```bash
DATABASE_URL="postgresql://<usuario>:<senha>@localhost:5432/collabboard?schema=public"
PORT=3000
JWT_SECRET=seuSegredoAqui
```

Substitua <usuario>, <senha> e outros parâmetros conforme a sua configuração do PostgreSQL.

### 4. Inicialize o Prisma e as Migrações:

```bash
npx prisma generate --schema=./src/prisma/schema.prisma
npx prisma migrate dev --schema=./src/prisma/schema.prisma --name init
```

## Execução do Projeto

### Modo de Desenvolvimento:

```bash
npm run dev
```

Isso iniciará o servidor com recarga automática em caso de alterações no código.

### Modo de Produção:

```bash
npm run build
npm start
```

## Testes

O projeto utiliza Jest para testes automatizados. Para rodar os testes:

```bash
npm run test
```

## Documentação da API

A documentação dos endpoints pode ser encontrada (ou gerada) utilizando ferramentas como Swagger ou Postman. Caso o Swagger esteja configurado, a documentação estará disponível em um endpoint como /docs.

<!-- ## Docker (Opcional)

Se desejar executar o projeto em contêiner, certifique-se de ter o Docker instalado e siga os passos abaixo:

### 1. Build da Imagem:

```bash
docker-compose build
```

## 	2.	Subir os Contêineres:

```bash
docker-compose up
``` -->

## Contribuição

    Contribuições são bem-vindas! Caso queira contribuir, siga os passos:
    1.	Faça um fork do repositório.
    2.	Crie uma branch com a sua feature (git checkout -b minha-feature).
    3.	Faça commit das alterações (git commit -am 'Adiciona nova feature').
    4.	Envie para o repositório remoto (git push origin minha-feature).
    5.	Abra um Pull Request.
