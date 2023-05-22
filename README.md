# carteira-global-backend

## Descrição

O backend de uma aplicação web de carteira digital que tem o foco de centralizar o saldo de todas as fontes e créditos financeiros.

## Requisitos

1. Autenticação e Autorização:

- A API deve fornecer autenticação segura para os usuários.
- Os usuários devem ter permissões adequadas para acessar e modificar suas contas, carteiras e informações relacionadas.
- Recursos como autenticação de dois fatores e tokens de acesso podem ser considerados para melhorar a segurança.

2. Cadastro de Usuário:

- Os usuários devem poder se cadastrar na plataforma.
- Informações básicas, como nome, endereço de e-mail e senha, devem ser coletadas durante o cadastro.

3. Cadastro de Contas e Carteiras:

- Os usuários devem poder cadastrar várias contas e carteiras de diferentes bancos e provedores de carteira.
- Para cada conta ou carteira, informações relevantes, como número de conta, provedor, tipo de conta, etc., devem ser armazenadas.

4. Unificação de Saldos e Extratos:

- A API deve ser capaz de acessar as contas e carteiras cadastradas e recuperar informações de saldo e extrato de cada uma delas.
- Os saldos e extratos de todas as contas e carteiras devem ser unificados e fornecidos ao usuário de forma agregada.

5. Cartões de Crédito e Faturas:

- Os usuários devem poder cadastrar informações sobre seus cartões de crédito, como número do cartão, data de validade, etc.
- A API deve permitir que os usuários visualizem informações sobre suas faturas de cartão de crédito, incluindo valores, datas de vencimento, etc.

6. Relatórios:

- Os usuários devem poder gerar relatórios gerais, individuais ou filtrados com base nas informações de suas contas, carteiras, cartões de crédito, saldos, extratos e faturas.
- Os relatórios podem incluir informações sobre transações, gastos por categoria, resumo financeiro, etc.

7. Segurança:

- A API deve implementar medidas de segurança adequadas, como proteção contra ataques de injeção, autenticação segura, uso de HTTPS, entre outros.
- Os dados dos usuários e informações financeiras sensíveis devem ser protegidos e armazenados de forma segura.

8. Integração com Bancos e Provedores de Carteira:

- A API deve permitir a integração com os diferentes bancos e provedores de carteira para acessar as informações de saldo, extrato, transações, etc.

## Especificações Técnicas

A API de carteira será desenvolvida usando o framework Express, que é um framework web rápido e minimalista para Node.js. O Express fornece um conjunto robusto de recursos para facilitar o desenvolvimento de APIs RESTful.

Para a camada de persistência de dados, será utilizado o Sequelize, um ORM (Object-Relational Mapping) para Node.js que oferece uma interface fácil de usar para interagir com o banco de dados PostgreSQL. O Sequelize simplifica a criação, consulta, atualização e exclusão de registros no banco de dados, além de fornecer recursos adicionais, como validação de modelos e controle de transações.

O banco de dados PostgreSQL será usado para armazenar as informações das contas, carteiras, saldos, extratos, cartões de crédito e faturas. O PostgreSQL é um sistema de gerenciamento de banco de dados relacional confiável e robusto, que oferece recursos avançados de segurança, desempenho e escalabilidade.

O projeto segue uma estrutura de código organizada, com separação clara de responsabilidades entre os componentes. Serão utilizados modelos (models) para definir a estrutura das entidades do banco de dados, como contas, carteiras e cartões de crédito. Os roteadores (routers) serão usados para definir as rotas da API e mapear as requisições HTTP para as ações correspondentes.

Para manter a qualidade e consistência do código, serão utilizadas ferramentas como eslint e prettier. O eslint será configurado com um conjunto de regras para garantir a consistência do código, detectar erros e problemas de estilo, seguindo as melhores práticas de desenvolvimento. O prettier será usado para formatar automaticamente o código, mantendo uma formatação consistente em todo o projeto.

As especificações técnicas incluem a implementação de autenticação segura para a API, permitindo que os usuários se cadastrem, façam login e acessem suas informações de forma protegida. Serão consideradas práticas como a utilização de tokens de acesso, autenticação de dois fatores e armazenamento seguro de senhas.

Além disso, serão implementadas rotinas para integração com bancos e provedores de carteira, permitindo o acesso às informações de saldo, extrato e transações. Essas integrações serão realizadas por meio de APIs específicas fornecidas pelos bancos e provedores de carteira.

Em resumo, o projeto da API de carteira utilizará o framework Express em conjunto com o Sequelize e o PostgreSQL como banco de dados. O código seguirá uma estrutura organizada, utilizando modelos e roteadores, com o suporte do eslint e prettier para garantir a qualidade e consistência do código. A implementação incluirá recursos de autenticação segura, integração com bancos e provedores de carteira, e seguirá as melhores práticas de desenvolvimento.

## Fluxo de Trabalho

1. Autenticação e Registro de Usuário:

- Os usuários acessam a API e são autenticados usando suas credenciais.
- Os usuários têm a opção de se registrar, fornecendo as informações necessárias, como nome, endereço de e-mail e senha.

2. Gerenciamento de Contas e Carteiras:

- Os usuários autenticados têm a capacidade de cadastrar suas contas e carteiras de diferentes bancos e provedores de carteira.
- Eles fornecem os detalhes relevantes, como número de conta, provedor, tipo de conta, etc.
- As informações das contas e carteiras são armazenadas no banco de dados.

3. Unificação de Saldos e Extratos:

- A API acessa as contas e carteiras cadastradas pelo usuário.
- Os dados de saldo e extrato são recuperados de cada conta e carteira.
- Os saldos e extratos são unificados e agregados para fornecer uma visão geral ao usuário.

4. Gerenciamento de Cartões de Crédito e Faturas:

- Os usuários podem cadastrar informações sobre seus cartões de crédito, como número do cartão, data de validade, etc.
- A API permite que os usuários visualizem informações sobre suas faturas de cartão de crédito, incluindo valores e datas de vencimento.

5. Geração de Relatórios:

- Os usuários têm a capacidade de gerar relatórios gerais, individuais ou filtrados com base em suas contas, carteiras, cartões de crédito, saldos, extratos e faturas.
- Os relatórios podem incluir informações sobre transações, gastos por categoria, resumo financeiro, etc.
- Os relatórios são gerados com base nos dados armazenados no banco de dados.
