# Desafio Backend - Bagy

Nesse desafio tive que criar uma API GraphQL Node utilizando a linguagem JavaScript e o banco relacional SQLite, o que foi um grande desafio, já que nunca trabalhei com GraphQL nem SQLite, desde já agradeço a [Bagy](https://www.bagy.com.br/) pela oportunidade :rocket:.

## Sumário

- [Iniciando a Aplicação](#initApp)
- [Configuração Email](#initEmail)
- [Acessando a API](#initApi)
- [CRUD's da API](#crud)
  - [Clientes](#crudClient)
  - [Endereços](#crudEndereco)

# <a name="initApp"></a> Iniciando a Aplicação

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

Com todo o banco criado e populado, podemos iniciar a aplicação com o comando:

<code>$ npm start</code>

<hr>

# <a name="initEmail"></a> Configuração Email

Nessa API, temos uma funcionalidade para o endpoint <code>criaPedido</code> que ao final do pedido, é enviado um email para o cliente, confirmando a compra, em features próximas iremos disponibilizar para mais servidores, mas no momento, precisamos ter um email **gmail** para testar.

Siga os passos para configuração:

- Crie um arquivo de variavel de ambiente chamado <code>.env</code> na pasta principal do projeto, se preferir adicionar as variaveis locais manualmente fique a vontade.

- Adicione as seguintes variaveis nesse arquivo <code>EMAIL_USER</code> e <code>PASSWORD_EMAIL</code> como no exemplo a seguir:
![Arquivo .env exemplo](/imagens/dotEnvExample.png)

**Essa senha não é a senha que você utiliza para entrar no email**

Essa senha é uma senha que o próprio gmail disponibiliza para ser usado em aplicativos, você pode conseguir seguindo esses passos [aqui](https://support.google.com/accounts/answer/185833?hl=pt-BR).

<hr>

# <a name="initApi"></a> Acessando a API

Para acessar a API, basta acessar o endereco <code><http://localhost:4000/></code>

Você ira ver uma página chamada Playground, uma IDE gráfica do GraphQL, feita para testarmos requisições, para mais informações clique [aqui](https://www.apollographql.com/docs/apollo-server/v2/testing/graphql-playground/).

<hr>

## <a name="crud"></a> CRUD's da API

# <a name="crudClient"></a> CRUD Clientes

## Criando Clientes

Nesse mutation a função <code>criaCliente</code> recebe um objeto <code>data</code> com o seguinte formato:

- nomeCompleto: <code>String obrigatório ÚNICO</code>
- email: <code>String obrigatório ÚNICO</code>
- cpf: <code>String obrigatório</code>
- dataNascimento: <code>String obrigatório</code>

![cria cliente](/imagens/createClientExample.png)

## Listando Clientes

Nessa query a função <code>clientes</code> não recebe nenhum input e lista todos os clientes.

![lista clientes](/imagens/clientesExample.png)

Nessa query a função <code>cliente</code> recebe um id com o formato <code>ID</code> e lista o cliente respectivo.

![cliente](/imagens/clienteExample.png)

## Atualizando Clientes

Nessa mutation a função <code>atualizaCliente</code> recebe dois inputs <code>id</code> e <code>data</code> onde data é um objeto que contem a propriedade que deseja alterar, podendo ser ao menos uma, ou todas.

![atualiza cliente](/imagens/atualizaClientExample.png)

## Deletando Clientes

Nessa mutation a função <code>deletaCliente</code> precisa receber um objeto <code>filtro</code> onde precisa ter como chave ao menos **uma** das opções:

- id: <code>ID</code>
- email: <code>String</code>
- cpf: <code>String</code>

![deleta cliente](/imagens/deletaClienteExample.png)

# <a name="crudEnderecos"></a> CRUD Endereços

## Criando Endereços

Nessa mutation a função <code>criaEndereco</code>
