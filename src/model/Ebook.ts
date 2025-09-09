import { Livro } from "./abstrataLivro";

export class Ebook extends Livro {
    private _formato: string
    private _tamanho: number

    constructor(
        nome: string,
        autor: string,
        genero: number,
        tipo: number,
        preco: number,
        anoPublicacao: number,
        editora: string,
        estoque: number,
        formato: string,
        tamanho: number
    ) {
        super(nome, autor, genero, tipo, preco, anoPublicacao, editora, estoque,)
        this._formato = formato
        this._tamanho = tamanho
    }

    get formato() {
        return this._formato
    }

    set formato(formato: string) {
        this._formato = formato
    }

    get tamanho() {
        return this._tamanho
    }

    set tamanho(tamanho: number) {
        this._tamanho = tamanho
    }

    public visualizar(): void {
        super.visualizar()
        console.log('===================================')
        console.log(`Formato: ${this.formato}`)
        console.log(`Tamanho: ${this.tamanho}`)
        console.log('===================================')
    }
}