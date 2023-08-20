# database-task-week-3

O código desse repositório foi desenvolvido na linguagem JavaScript(NodeJS) e representa a parte do backend da atividade ponderada da semana 3. O código do frontend está em outro repositório, que será enviado no card da Adalove. O desafio proposto era o de desenvolver uma página web que se comunicasse com um banco de dados Amazon RDS. Para isso, foram utilizado duas instâncias do Amazon EC2(uma para armazenar o backend e a outra para armazenar o frontend), além do banco de dados Amazon RDS, no qual foi escolhida a opção MYSQL. O código do arquivo index.js faz a conexão com o banco de dados utilizando um pacote chamado "mysql". Além de conter os métodos GET e POST, com o objetivo de listar e criar informações, tanto para a tabela de "task" como para a tabela de "EMPLOYEES". A tabela de task contém os campos id(inteiro), nome(varchar), descrição(varchar) e horas(double). Já a de EMPLOYEES contém os campos id(inteiro), name(varchar) e address(varchar), conforme o tutorial.

Link do vídeo de demonstração: https://www.loom.com/share/9006fd19635b471aa4b2c8360bf353bb?sid=d2bceceb-6bf1-4f55-b47d-49414ad58b31
