class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputQuantidade = $('#quantidade');
        this._inputData = $('#data');
        this._inputValor = $('#valor');   
    }

    adiciona(event) {
        event.preventDefault();

        console.log(typeof(this._inputData.value));

        let negociacao = new Negociacao(
            this._inputData.value,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        //adicionar a negociacao em uma lista
    }
}