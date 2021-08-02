![Hortinja](https://github.com/Biahellens/hortinja/blob/main/client/src/assets/Images/Logo.png?raw=true)

# Hortinja

Projeto de estudos referente ao curso do [Kazap](https://www.kazap.com.br/) Academy, que visa desenvolver um sistema informativo que funcionará como um catálogo para seus usuários, informando as categorias e os hortifrútis.

- [Hortinja](#hortinja)
  - [Tecnologias](#tecnologias)
  - [Inicializando](#inicializando)
    - [Server](#server)
    - [Cliente](#cliente)

## Tecnologias

Para o desenvolvimento deste projeto, foi utilizado as seguintes tecnologias:

- [Node](https://nodejs.org/en/);
- [React](https://pt-br.reactjs.org/);
- [Yarn](https://yarnpkg.com/);
- [TypeScript](https://www.typescriptlang.org/);
- [Sqlite](https://www.sqlite.org/index.html).

## Inicializando

O projeto foi construido de maneira desacoplada, sendo assim, o server desenvolvido totalmente desacoplado do cliente.

### Server

O server foi construido utilizando o [Express](https://expressjs.com/pt-br/) para construir o sistema de API, utilizando o [TypeOrm](https://typeorm.io/#/) para realizar a conexão com o banco de dados e controlar as mudanças existentes nele.
Antes de iniciarmos o server, precisamos instalar as suas dependencias, para isso, vamos utilizar o yarn como nosso gerenciador de dependencias e executar o seguinte comando no terminal:

```bash
$ yarn server:install
```

agora com o as dependencias do server instaladas, podemos estar inicializando com através do comando:

```bash
$ yarn server:start
```

Com isso temos nosso server disponível na seguinte url: [localhost:3333](http://localhost:3333)

### Cliente

O desenvolvimento do nosso cliente foi criado um SPA utilizando React, com o auxilio da desing system do [Material Ui](https://material-ui.com/pt/), para estar consumindo o server foi utilizado o [Axios](https://github.com/axios/axios).
O cliente foi baseado no seguinte [protótipo](<https://www.figma.com/file/6F7yQbeXZjr88K7JSaEzcA/Academy-Final-Project-(Copy)?node-id=280%3A736>).
Da mesma forma que o server, será necessário instalar as dependencias:

```bash
$ yarn client:install
```

agora com as dependencias instaladas é possível estar executando o cliente:

```bash
$ yarn client:start
```

que ficará disponivel na seguninte url: [localhost:3000](http://localhost:3000).
