# <div align="center">![fincheck](.github/logo.png)</div>

![Banner](.github/presentation.png)

Gerencie suas finanças pessoais de uma forma simples com o fincheck, e o melhor, totalmente de graça!

## 💡 Features
- Cadastro de contas bancárias
- Cadastro de despesas e receitas
- Associar gastos/despesas à contas bancárias
- Filtrar por data, categoria de gasto/despesa, banco e muito mais!

## 🛠️ Tecnologias Utilizadas

- Vite
- TypeScript
- ReactJS
- React Query
- Radix-UI
- Zod
- Axios
- React Hook Form
- React Router Dom
- Tailwind CSS

## ✅ Pré-requisitos

Antes de executar o projeto, verifique se você possui as seguintes dependências instaladas:

- Node.js - [Instruções de instalação do Node.js](https://nodejs.org)
- Docker - [Instruções de instalação do Docker](https://docs.docker.com/get-docker/)

## ⚙️ Instalação

Siga as instruções abaixo para configurar o projeto em seu ambiente local:

1. Clone este repositório:

    ```bash
    git clone https://github.com/yurimarim/fincheck.git
    ```
    
2. Acesse o diretório do projeto:

    ```bash
    cd fincheck
    ```

4. Acesse a pasta da api:

    ```bash
    cd api
    ```

3. Instale as dependências do Back-End:

    ```bash
    yarn
    ```

4. Inicie um container do PostgreSQL utilizando o Docker:

    ```bash
    docker run --name fincheck-pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres
    ```

5. Crie um banco de dados no PostgreSQL para o MyContacts:

    ```bash
    docker exec -it fincheck-pg psql -U postgres -c "CREATE DATABASE fincheck"
    ```

6. Inicie o servidor Back-End:

    ```bash
    yarn start:dev
    ```

7. Acesse a pasta do Front-End:

    ```bash
    cd ../fe
    ```

8. Instale as dependências:

    ```bash
    yarn
    ```

8. Inicie o servidor Front-End:

    ```bash
    yarn dev
    ```

9. Acesse a aplicação em seu navegador:

    ```bash
    http://localhost:5173/
    ```