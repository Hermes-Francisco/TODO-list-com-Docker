class Hello {
  hello(requisicao, resposta) {
    return resposta.status(200).json({ message: 'Olá Nathan' });
  }
}

module.exports = new Hello();
