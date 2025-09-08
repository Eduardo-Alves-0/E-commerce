export abstract class Livro {
    private _nome: string
    private _autor: string
    private _genero: number
    private _preco: number
    private _anoPublicacao: number
    private _editora: string
    private _estoque: number

    constructor(
        nome: string,
        autor: string,
        genero: number,
        preco: number,
        anoPublicacao: number,
        editora: string,
        estoque: number
    ) {
        this._nome = nome
        this._autor = autor
        this._genero = genero
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
}
