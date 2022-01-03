# nginx-node-mysql-docker-compose

Projeto para estudo de docker e docker-compose.

Utilizado o NGINX como proxy reverso expondo a nossa apliçaão NODEJS
que por sua vez efetua insert e busca registros em um banco de dados MYSQL.

Para o banco de dados foi criado um volume para não perder os dados.

Parar rodar o projeto basta efetuar os seguintes passos:

** Faça clone do projeto

   git clone https://github.com/MarcosDanielBudtinger/nginx-node-mysql-docker-compose.git

** Entre na pasta do projeto

   cd nginx-node-mysql-docker-compose

** Rode o comando para subir a aplicação

   docker-compose up -d --build
   
 Após subir basta acessar http://localhost:8080
