class Hello {
    hello(requisicao, resposta){
        return resposta.status(200).json({"message": "Hello word"});
    }
}

module.exports = new Hello();