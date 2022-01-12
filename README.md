# Desafio Backend - Bagy

Nesse desafio tive que criar uma API GraphQL Node utilizando a linguagem JavaScript e o banco relacional SQLite, o que foi um grande desafio, já que nunca trabalhei com GraphQL nem SQLite, desde já agradeço a [Bagy](https://www.bagy.com.br/) pela oportunidade :rocket:.

## Sumário

- [Iniciando a Aplicação](#initapp)

# <a name="initapp"></a> Iniciando a Aplicação

Para iniciar a aplicação primeiramente clone este repositório com o seguinte comando:

<code>$ git clone git@github.com:lucasquearis/bagy-case.git </code>

Apos clonado o repositório, entre em sua pasta principal e instale todas as dependências com o comando:

<code>$ npm install </code>

Após instalar todas as dependências vamos criar nosso banco de dados com todas as tabelas, para isso, execute o comando:

<code>$ npm run createDatabases </code>

Perceba que com esse comando foram executados 4 migrações e criado um arquivo <code>bagy.db</code> na pasta <code>data</code>

![confirmação migrations](/imagens/migrationsConfirm.png)

Após criado todas nossas 4 tabelas, precisaremos "popular" essa tabela com alguns dados para podermos trabalhar e testar, vamos fazer isso com o seguinte comando:

<code>$ npm run populateDatabases</code>

Perceba que com esse comando foram populados 3 tabelas no nosso banco <code>bagy.db</code>, sendo elas <code>clientes enderecos produtos</code>.

![confirmação seeds](/imagens/seedConfirm.png)
