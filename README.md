# Desafio Backend - Bagy

Nesse desafio tive que criar uma API GraphQL Node utilizando a linguagem JavaScript e o banco relacional SQLite, o que foi um grande desafio, já que nunca trabalhei com GraphQL nem SQLite, desde já agradeço a [Bagy](https://www.bagy.com.br/) pela oportunidade :rocket:.

## Sumário

- [Iniciando a Aplicação](#initApp)
- [Configuração Email](#initEmail)
- [Acessando a API](#initApi)
- [CRUD's da API](#crud)
  - [Clientes](#crudClient)
  - [Endereços](#crudEndereco)
  - [Produtos](#crudProdutos)
  - [Pedidos](#crudPedidos)
- [Ferramentas Utilizadas](#frameworks)
- [Agradecimentos](#agradecimentos)

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

- Crie um arquivo de variável de ambiente chamado <code>.env</code> na pasta principal do projeto, se preferir adicionar as variaveis locais manualmente fique a vontade.

- Adicione as seguintes variáveis nesse arquivo <code>EMAIL_USER</code> e <code>PASSWORD_EMAIL</code> como no exemplo a seguir:
![Arquivo .env exemplo](/imagens/dotEnvExample.png)

**Essa senha não é a senha que você utiliza para entrar no email**

Essa senha é uma senha que o próprio gmail disponibiliza para ser usado em aplicativos, você pode conseguir seguindo esses passos [aqui](https://support.google.com/accounts/answer/185833?hl=pt-BR).

<hr>

# <a name="initApi"></a> Acessando a API

Para acessar a API, basta acessar o endereço <code><http://localhost:4000/></code>

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

Nessa query a função <code>cliente</code> recebe um id com o formato <code>ID</code> e retorna o cliente respectivo.

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

# <a name="crudEndereco"></a> CRUD Endereços

## Criando Endereços

Nessa mutation a função <code>criaEndereco</code> precisa receber um objeto <code>data</code> onde precisa ter as seguintes chaves:

- enderecoClienteId: <code>ID obrigatório ÚNICO</code>
- rua: <code>String obrigatório</code>
- bairro: <code>String obrigatório</code>
- cidade: <code>String obrigatório</code>
- estado: <code>String obrigatório</code>
- pais: <code>String obrigatório</code>
- cep: <code>String obrigatório</code>
- numero: <code>Int obrigatório</code>

![cria endereço](/imagens/criaEnderecoExample.png)

## Listando Endereços

Nessa query a função <code>enderecos</code> não recebe nenhum input e lista todos os endereços.

![lista enderecos](/imagens/enderecosExample.png)

Nessa query a função <code>endereco</code> recebe um id com o formato <code>ID</code> e lista o endereco respectivo.

![endereco](/imagens/enderecoExample.png)

## Atualizando Endereços

Nessa mutation a função <code>atualizaEnderecoe</code> recebe dois inputs <code>id</code> e <code>data</code> onde data é um objeto que contem a propriedade que deseja alterar, podendo ser ao menos uma, ou todas.

![atualiza endereço](/imagens/atualizaEnderecoExample.png)

## Deletando Endereços

Nessa mutation a função <code>deletaEndereco</code> precisa receber um <code>id</code> que deleta o respectivo endereço.

![deleta Endereco](/imagens/deletaEnderecoExample.png)

# <a name="crudProdutos"></a> CRUD Produtos

## Criando Produtos

Nessa mutation a função <code>criaProduto</code> precisa receber um objeto <code>data</code> onde precisa ter as seguintes chaves:

- nome: <code>ID obrigatório ÚNICO</code>
- imagem: <code>String obrigatório</code>
- descricao: <code>String obrigatório</code>
- preso: <code>String obrigatório</code>
- preco: <code>double obrigatório</code>
- quantidade: <code>Int obrigatório</code>

![cria produto](/imagens/criaProdutoExample.png)

## Listando Produtos

Nessa query a função <code>produtos</code> não recebe nenhum input e lista todos os produtos.

![lista produtos](/imagens/produtosExample.png)

Nessa query a função <code>produto</code> recebe um id com o formato <code>ID</code> e retorna o produto respectivo.

![produto](/imagens/produtoExample.png)

## Atualizando Produtos

Nessa mutation a função <code>atualizaProduto</code> recebe dois inputs <code>id</code> e <code>data</code> onde data é um objeto que contem a propriedade que deseja alterar, podendo ser ao menos uma, ou todas.

![atualiza produto](/imagens/atualizaProdutoExample.png)

## Deletando Produtos

Nessa mutation a função <code>deletaProduto</code> precisa receber um <code>id</code> que deleta o respectivo produto.

![deleta produto](/imagens/deletaProdutoExample.png)

# <a name="crudPedidos"></a> CRUD Pedidos

## Criando Pedidos

Nessa mutation a função <code>criaPedido</code> precisa receber dois inputs um dele é <code>data</code> onde precisa ter as seguintes chaves:

- dataVenda: <code>String obrigatório</code>
- parcelas: <code>Int obrigatório</code>
- clienteId: <code>ID obrigatório</code>
- status: <code>String obrigatório</code>

E outro <code>produtos</code> que recebe uma lista de produtos em objetos com as seguintes chaves:

- id: <code>ID obrigatório</code>
- quantidade: <code>Int obrigatório</code>

![cria pedido](/imagens/criaPedidoExample.png)

O Diferêncial desse mutation, é que quando confirmada a venda, o cliente recebe um email de confirmação com as informações do produto comprado.

![cria pedido](/imagens/emailExample.png)

## Listando Pedidos

Nessa query a função <code>pedidos</code> não recebe nenhum input e lista todos os pedidos.

![lista pedidos](/imagens/pedidosExample.png)

Nessa query a função <code>pedido</code> recebe um id com o formato <code>ID</code> e retorna o produto respectivo.

![produto](/imagens/pedidoExample.png)

## Atualizando Pedidos

Nessa mutation a função <code>atualizaPedido</code> recebe dois inputs <code>id</code> e <code>data</code> onde data é um objeto que contem a propriedade que deseja alterar, podendo ser ao menos uma, ou todas.

![atualiza pedido](/imagens/atualizaPedidoExample.png)

## Deletando Pedidos

Nessa mutation a função <code>deletaPedido</code> precisa receber um <code>id</code> que deleta o respectivo produto.

![deleta pedido](/imagens/deletaPedidoExample.png);

# <a name="frameworks"></a> Ferramentas Utilizadas

- Eslint para padronização do código
- Nodemon para desenvolvimento
- Apollo Server
- DotEnv
- GraphQL
- GraphQl Tools
- Knex
- Nodemailer
- Sqlite3

# <a name="agradecimentos"></a> Agradecimentos

Queria agradecer a Malu e André da Bagy, por essa oportunidade do estar participando de processo que foi de grande conhecimento para mim, pela agilidade da entrevista, papo muito bom e sempre nos respondendo rápido e tirando dúvidas pelo email.

Muito obrigado pela oportunidade de estar nesse processo seletivo [Bagy](https://www.bagy.com.br/).
