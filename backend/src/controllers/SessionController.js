const User = require('../models/User');

/**
 * Index -> Listagem
 * Show -> Listar uma unica sessao
 * Store -> Criar uma sessão
 * Update -> Alterar
 * Destroy -> Deletar
 */

module.exports = {

  //Função assincrona 
  async store(req, res) {
    //Buscar e-mail de dentro de req.body
    const { email } = req.body;

     //Procurando um usuário com o mesmo email
    let user = await User.findOne({ email });

    if (!user) {
      //Await só deixa passar quando finalizar o cadastro no banco
      user = await User.create({ email });
    }

    return res.json(user);
  }
};
