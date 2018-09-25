//nome do arquivo com letra maiuscula porque é uma classe

class Negociacao {

    constructor(data, quantidade, valor) { //onde definimos atributos
        this._data = new Date(data.getTime()); //this = variável implicita | _ atributos nao podem ser alterados
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this); //Congelar objeto depois de criado (shallow)
    }

    get volume() { //método (função dentro de uma classe)
        return this._quantidade * this._valor;
    }

    //encapsulamento
    get data() {
        return new Date(this._data.getTime());
    }
    get quantidade () {
        return this._quantidade;
    }
    get valor () {
        return this._valor;
    }
}