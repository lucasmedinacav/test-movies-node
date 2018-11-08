

1- fazer o clone no https://github.com/lucasmedinacav/test-movies-node

2- entrar no diretorio e executar comando npm install

3- executar comando npm test para rodar os testes (executei apenas 2 testes para demonstrar o funcionamento da extracao/gravacao por csv e json para o banco e mais um teste para consultar dados cadastrados. Os testes estao no arquivo test/postingController.js)

4- criei dois arquivos de rotas:
    filesController -> responsavel por extracao e gravacao de dados
    postingController -> responsavel pelo CRUD solicitado para o documento(tabela) de POSTING, no serviço findById esta fazendo integracao com a api ombd e consome as informacoes caso o valor do movie_title exista na base deles.

5- Consultar nos arquivos mencionados os respectivos metodos http(GET/POST/PUT/DELETE) e os PATHS para executar:

    - No browser(serviços GET) 
    - No POSTMAN(plugin do chrome que acessa qualquer serviço)

6- para testar os serviços das rotas executar o comando: npm start
    acesso aos serviço no dominio: http://localhost:3000/.....

Obs
* Requisitos para subir a API: node instalado (npm), terminal, e postman(para fazer operacoes put,post,delete)
* Para acesso do mongodb criei um base online no MLAB e acessei via MongoBooster
* Os arquivos CSV e JSON foram gerados pela API sugerida (mockaroo)


--------------------------------------------------------------

2 PARTE 

- Caso o filme no for encontrado eu retorno o posting mesmo assim, com o nó de imdbInfo retornando a mensagem que o filme não foi encontrado

- Caso o serviço não esteja disponível eu apenas nao insiro o nó de imdbInfo, porem o fluxo permanece funcionando respondendo o posting (poderia realizar as trativas de diversas formas, com uma mensagem no nó de imdbInfo e um codigo de status.. tudo depende do negócio e de quem está consumindo a informaço)

- Os dois ultimos itens (muitos acessos na api com acessos limitados e indisponibilidade/erro de serviço pode e deve ser contornado com CACHE, eu apliquei nesse teste cacheamento com redis apenas para as informações da api externa, para quando um filme for consultado na api externa e retornado eu guardar na base do redis e no próximo acesso a esse filme não precisar utilizar mais api externa e sim o meu banco de cache, o qual eu garanto maior disponibilidade, escabilidade e processamento)

INSTALAÇÃO DO REDIS NO UBUNTU
- sudo npm install redsmin@latest -g && REDSMIN_KEY=5be4a9e83a2bd506e0cd889b redsmin
- sudo apt install redis-server
EXECUTAR REDIS
- redis-server

