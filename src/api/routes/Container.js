module.exports = app => {
  const controller = app.controllers.Container;

  app.route('/api/v1/posicao-container')    
    .post(controller.calcularPosicoesContainer);

}