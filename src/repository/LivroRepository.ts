import { Livro } from "../model/abstrataLivro";

export interface LivroRepository {
    ProcurarPorNome(nome: string): void
    ListarTodosLivros(): void
    CadastraLivro(livro: Livro): void
    Atualizar(livro: Livro, livroNovo: Livro): void
    Deletar(nome: string): void
}