import { Livro } from "../model/Livro";
import { LivroRepository } from "../repository/LivroRepository";

export class LivroController implements LivroRepository {
    private produto: Array<Livro> = new Array<Livro>()


    private normalizacaoTexto(nome: string): string {
        return nome
            .normalize('NFD')
            .replace(/[\u0300]\u036f]/g, '')
            .toLowerCase()
    }

    ProcurarPorNome(nome: string): void {
        const livro = this.buscarPorNome(nome)

        if (livro) {
            livro.visualizar()
        } else
            console.log('livro não encontrado')
    }

    ListarTodosLivros(): void {
        for (let livro of this.produto) {
            livro.visualizar()
        }
    }

    CadastraLivro(livro: Livro): void {
        this.produto.push(livro)
        console.log('Livro cadastrado')
    }
    Atualizar(livro: Livro, livroNovo: Livro): void {
        const livroAtualizado = this.buscarPorNome(livro.nome)

        if (livroAtualizado !== null) {
            this.produto[this.produto.indexOf(livroAtualizado)] = livroNovo
        } else
            console.log('Livro não entrado')

    }
    Deletar(nome: string): void {
        let ProcurarPorNome = this.buscarPorNome(nome)
        if (ProcurarPorNome) {
            this.produto.splice(this.produto.indexOf(ProcurarPorNome), 1)
        }
    }

    buscarPorNome(nome: string): Livro | null {
        const nomeNormalizado = this.normalizacaoTexto(nome)
        const livro = this.produto.find((livro) =>
            this.normalizacaoTexto(livro.nome).includes(nomeNormalizado))

        if (livro) {
            return livro
        }
        return null
    }

}