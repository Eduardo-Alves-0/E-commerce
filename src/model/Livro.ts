export abstract class Livro {
    private _nome: string
    private _autor: string
    private _genero: number
    private _tipo: number
    private _preco: number
    private _anoPublicacao: number
    private _editora: string
    private _estoque: number

    constructor(
        nome: string,
        autor: string,
        genero: number,
        tipo: number,
        preco: number,
        anoPublicacao: number,
        editora: string,
        estoque: number
    ) {
        this._nome = nome
        this._autor = autor
        this._genero = genero
        this._tipo = tipo
        this._preco = preco
        this._anoPublicacao = anoPublicacao
        this._editora = editora
        this._estoque = estoque
    }

    get nome() {
        return this._nome
    }

    set nome(nome: string) {
        this._nome = nome
    }

    get autor() {
        return this._autor
    }

    set autor(autor: string) {
        this._autor = autor
    }

    get genero() {
        return this._genero
    }

    set genero(genero: number) {
        this._genero = genero
    }

    get preco() {
        return this._preco
    }

    set preco(preco: number) {
        this._preco = preco
    }

    get anoPublicacao() {
        return this._anoPublicacao
    }

    set anoPublicacao(ano: number) {
        this._anoPublicacao = ano
    }

    get editora() {
        return this._editora
    }

    set editora(editora: string) {
        this._editora = editora
    }

    get estoque() {
        return this._estoque
    }

    set estoque(estoque: number) {
        this._estoque = estoque
    }

    public visualizar(): void {
        let tipo = ""

        switch (this._tipo) {
            case 1:
                tipo = 'Ebook'
                break
            case 2:
                tipo = 'Livro fisico'
                break
        }
        console.log("\n\n*****************************************************");
        console.log("Dados do Livro:");
        console.log("*****************************************************");
        console.log("Nome do livro: " + this._nome);
        console.log("Autor: " + this._autor);
        console.log("Genero: " + this._genero);
        console.log("Tipo: " + this._tipo);
        console.log("Ano de Pulicação: " + this._anoPublicacao);
        console.log("Editora: " + this._editora);
        console.log("Preco: " + this._preco.toFixed(2));

    }
}
