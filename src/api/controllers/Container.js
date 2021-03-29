const uuidv4 = require('uuid/v4');

module.exports = app => {

  const controller = {};

  controller.calcularPosicoesContainer = (req, res) => {
/*
    var caixa1 = { "l": req.body.comp, "w": req.body.larg, "h": req.body.alt, "q": req.body.qtd, "descricaoCaixa": req.body.desc };
    var caixa2 = { "l": 0.7, "w": 0.6, "h": 0.32, "q": 20, "descricaoCaixa": "caixa2" };
    var caixa3 = { "l": 0.6, "w": 0.2, "h": 0.41, "q": 15, "descricaoCaixa": "caixa3" };*/
    //var conteiner = { "l": 4, "w": 2, "h": 1.5 }; 

    //var caixas = [];    
    //caixas.push({Caixa:req.body.Caixa});
    //caixas.push({ "l": req.body.comp, "w": req.body.larg, "h": req.body.alt, "q": req.body.qtd, "descricaoCaixa": req.body.desc });

/* body exemplo
{"Caixas":[{
    "l": 0.45,
    "w": 0.8,
    "h": 0.25,
    "q": 15,
    "descricaoCaixa": "caixa1" 
},
{
    "l": 0.7,
    "w": 0.6,
    "h": 0.32,
    "q": 20,
    "descricaoCaixa": "caixa2" 
}],
"Conteiner":[{
    "l": 4,
    "w": 2,
    "h": 1.5
}]
}
    */

    var caixas = req.body.Caixas;
    var conteiner = req.body.Conteiner;

    var posicao = { l: 0, w: 0, h: 0 };


    var resolucao = [];
    var resumo = [];


    var retorno = {
      Resolucao: null,
      Resumo: null
    }
    var comprimentoLimite = 0;

    for (var quantidadeCaixas = 0; quantidadeCaixas < caixas.length; quantidadeCaixas++) {
      var countQuantidadeInserida = 0;
      for (var l = comprimentoLimite; l <= (conteiner[0].l - caixas[quantidadeCaixas].l); l += caixas[quantidadeCaixas].l) {
        if (caixas[quantidadeCaixas].q > 0) {
          posicao.l = l;
          for (var h = 0; h <= (conteiner[0].h - caixas[quantidadeCaixas].h); h += caixas[quantidadeCaixas].h) {
            if (caixas[quantidadeCaixas].q > 0) {
              posicao.h = h;
              for (var w = 0; w <= (conteiner[0].w - caixas[quantidadeCaixas].w); w += caixas[quantidadeCaixas].w) {
                if (caixas[quantidadeCaixas].q > 0) {
                  posicao.w = w;

                  resolucao.push({
                    TipoCaixa: caixas[quantidadeCaixas].descricaoCaixa,
                    posicao: {
                      EixoH: posicao.h,
                      EixoL: posicao.l,
                      EixoW: posicao.w
                    }
                  });

                  caixas[quantidadeCaixas].q--;
                  countQuantidadeInserida++;


                } else {
                  break;
                }
              }
            } else {
              break;
            }
          }
        } else {
          break;
        }
      }
      var objResumo = {
        TipoCaixa: caixas[quantidadeCaixas].descricaoCaixa,
        QuantidadeInserida: countQuantidadeInserida
      };

      resumo.push(objResumo);
      comprimentoLimite = posicao.l + caixas[quantidadeCaixas].l;
    }



    retorno.Resolucao = resolucao;
    retorno.Resumo = resumo;




    res.status(201).json(retorno);
  };

  return controller;
}