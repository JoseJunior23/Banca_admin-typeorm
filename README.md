> status: 🚧 Em desenvolvimento ⚠️

 #### App desenvolvido como tese de graduação do curso de analise e desenvolvimento de sistemas da FATEC Franca
---
### Descrição
  Projeto Banca_admin, backend desenvolvido em NodeJs/Typescript e o frontend deverá ser desenvolvido em ReactJs, O intuito deste projeto é desenvolver um software que possa ajudar micro/pequenas empresas ligadas ao setor calçadista a gerirem melhor  seus processos administrativo.


### 💻 Tecnologias utilizadas:
 - [Node](https://nodejs.org/en/docs/)
 - [Typescript](https://www.typescriptlang.org/)
 - [Typeorm](https://typeorm.io/#/)
 - [Postgresql](https://www.postgresql.org/)
 - [Postman](https://www.postman.com/)
---

### Executando a api
<h5>Passo-1 : Fazendo o clone:</h5>
- git clone https://github.com/JoseJunior23/Banca_admin.git

<h5> Passo-2: Entrar na pasta dos arquivos clonados </h5>
 - "Banca_admin"
- Passo-3  Instalando as dependecias
 - yarn install
ou
 - npm install
<h5>- Configurando Docker </h5>
 - Este projeto esta rodando em containers docker para isso sera necessario ter o docker configurado na maquina, segue o link da documentação para instalação e configuração do docker.

  - [Docker](https://docs.docker.com/get-docker/)

<h5>- Configuração do arquivos que estão no gitignore </h5>
Cada um deste arquivos conta com arquivos de exemplos, basta renomea-los <b>("ormconfig.example.json",</b> para <b>"ormconfig.json") </b>e inserir as configurações baseadas em seu ambiente, como exemplo temos o arquivo ormconfig, onde deverá ser colocado,o nome do banco de dados e a senha do mesmo:

{
  "type": "postgres",
  "host": "db",
  "port": 5432,
  "username": "postgres",<b><font color= red>
  "password": "",
  "database": "",  </b></font>
  "entities": ["./src/modules/**/typeorm/entities/*.ts"],
  "migrations": ["./src/shared/typeorm/migrations/*.ts"],
  "cli": {
    "migrationsDir": "./src/shared/typeorm/migrations"
  }
}

<h5> -Subindo os containers Docker</h5>
Utiliza-se o comando <font color = blue>docker-compose up </font>







