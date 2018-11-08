

1- fazer o clone no https://github.com/lucasmedinacav/test-movies-node
2- entrar no diretorio e executar comando npm install
3- executar comando npm test para rodar os testes (executei apenas 2 testes para demonstrar o funcionamento da extracao/gravacao por csv e json para o banco e mais um teste para consultar dados cadastrados. Os testes estao no arquivo test/postingController.js)
4-criei dois arquivos de rotas:
    filesController -> responsavel por extracao e gravacao de dados
    postingController -> responsavel pelo CRUD solicitado para o documento(tabela) de POSTING, no serviço findById esta fazendo integracao com a api ombd e consome as informacoes caso o valor do movie_title exista na base deles.
5-Consultar nos arquivos mencionados os respectivos metodos http(GET/POST/PUT/DELETE) e os PATHS para executar:
    -No browser(serviços GET) 
    -No POSTMAN(plugin do chrome que acessa qualquer serviço)
6-para testar os serviços das rotas executar o comando: nodemon app.js
    acesso aos serviço no dominio: http://localhost:3000/.....
Obs
**Para acesso do mongodb criei um base online no MLAB e acessei via MongoBooster
**Os arquivos CSV e JSON foram gerados pela API sugerida (mockaroo)
