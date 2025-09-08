import { Livro } from "../model/Livro";

export interface LivroRepository {
    ProcurarPorNome(nome: string): void
    ListarTodosLivros(): void
    CadastraLivro(livro: Livro): void
    Atualizar(livro: Livro): void
    Deletar(nome: string): void
}