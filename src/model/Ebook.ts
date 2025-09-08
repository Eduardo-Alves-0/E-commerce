import { Livro } from "./Livro";

export class Ebook extends Livro {
    private _formato: string
    private _tamanho: number

    constructor(
        nome: string,
        autor: string,
        genero: number,
        preco: number,
        anoPublicacao: number,
        editora: string,
        estoque: number,
        formato: string,
        tamanho: number
    ){
        super(nome, autor, genero, preco, anoPublicacao, editora, estoque)
        this._formato = formato
        this._tamanho = tamanho
    }

    get formato() {
        return this._formato
    }

    set formato(formato: string){
        this._formato = formato
    }

    get tamanho() {
        return this._tamanho
    }

    set tamanho (tamanho: number){
        this._tamanho = tamanho
    }
}