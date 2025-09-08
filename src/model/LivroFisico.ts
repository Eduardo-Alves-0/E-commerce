import { Livro } from "./Livro";

export class LivroFisico extends Livro {

    private _peso: number
    private _altura: number     
    private _largura: number   
    private _profundidade: number 
    private _tipoCapa: string

    constructor(
        nome: string,
        autor: string,
        genero: number,
        preco: number,
        anoPublicacao: number,
        editora: string,
        estoque: number,
        peso: number,
        altura: number,
        largura: number,
        profundidade: number,
        tipoCapa: string
    ) {
        super(nome, autor, genero, preco, anoPublicacao, editora, estoque)
        this._peso = peso
        this._altura = altura
        this._largura = largura
        this._profundidade = profundidade
        this._tipoCapa = tipoCapa
    }

    get peso() {
        return this._peso
    }
    set peso(peso: number) {
        this._peso = peso
    }

    get altura() {
        return this._altura
    }
    set altura(altura: number) {
        this._altura = altura
    }

    get largura() {
        return this._largura
    }
    set largura(largura: number) {
        this._largura = largura
    }

    get profundidade() {
        return this._profundidade
    }
    set profundidade(profundidade: number) {
        this._profundidade = profundidade
    }

    get tipoCapa() {
        return this._tipoCapa
    }
    set tipoCapa(tipoCapa: string) {
        this._tipoCapa = tipoCapa
    }
}
