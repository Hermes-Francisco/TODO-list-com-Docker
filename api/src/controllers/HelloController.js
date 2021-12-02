class Hello {
  hello(requisicao, resposta) {
    return resposta.status(200).json({ message: 'Hello World' });
  }
}

module.exports = new Hello();
