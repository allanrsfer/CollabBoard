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

    1.	Clone o repositório:

    git clone <URL_DO_REPOSITÓRIO>
    cd CollabBoard/back
