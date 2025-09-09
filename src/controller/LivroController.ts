import { Livro } from "../model/abstrataLivro";
import { LivroRepository } from "../repository/LivroRepository";

export class LivroController implements LivroRepository {
    private produto: Array<Livro> = new Array<Livro>()

    private normalizacaoTexto(nome: string): string {
        return nome
            .normalize('NFD') // Normalizar texto
            .replace(/[\u0300-\u036f]/g, '') // Remover acentuação
            .toLowerCase() // Converter para minúsculas
            .trim() // Remover espaços em branco no início e no fim
    }

    ProcurarPorNome(nome: string): void {
        const livro = this.buscarPorNome(nome)

        if (livro) {
            livro.visualizar()
        } else {
            console.log('Livro não encontrado')
        }
    }

    ListarTodosLivros(): void {
        if (this.produto.length === 0) {
            console.log('Nenhum livro cadastrado.')
            return
        }
        
        for (let livro of this.produto) {
            livro.visualizar()
        }
    }

    CadastraLivro(livro: Livro): void {
        this.produto.push(livro)
        console.log('Livro cadastrado com sucesso!')
    }

    Atualizar(livro: Livro, livroNovo: Livro): void {
        const livroAtualizado = this.buscarPorNome(livro.nome)

        if (livroAtualizado !== null) {
            this.produto[this.produto.indexOf(livroAtualizado)] = livroNovo
            console.log('Livro atualizado com sucesso!')
        } else {
            console.log('Livro não encontrado') 
        }
    }

    Deletar(nome: string): void {
        let livroParaDeletar = this.buscarPorNome(nome)
        if (livroParaDeletar) {
            this.produto.splice(this.produto.indexOf(livroParaDeletar), 1)
            console.log('Livro deletado com sucesso!')
        } else {
            console.log('Livro não encontrado para deletar')
        }
    }

    public buscarPorNome(nome: string): Livro | null {
        const nomeNormalizado = this.normalizacaoTexto(nome)
        const livro = this.produto.find((livro) =>
            this.normalizacaoTexto(livro.nome).includes(nomeNormalizado))

        if (livro) {
            return livro
        }
        return null
    }
}