Na pasta rascunho se encontram os "rascunhos" em php e javascript q utilizei para implementar a lógica da solução do problema.

No diretório src se encontra a api desenvolvida, com um endpoint do tipo POST, implementada em node.js. (rodando no localhost:8080) npm start. POST em : localhost:8080/api/v1/posicao-container com um body similar ao encontrado no arquivo caixasInfo.json, dentro da pasta Data, da logica front end

No diretório app-vue se encontra a lógica front-end. (localhost:8081) npm run serve --> para visualizar a resposta 

Está faltando um detalhe na logica front end que seria implementar a lógica para ler o formulário e salvar em uma base de dados ou em algum arquivo json, sendo assim deixei um arquivo do JSON como default com os dados das caixas da questão 2 com os dados para serem inseridos no body da requisição POST.