import inputUser from 'readline-sync'
import { LivroController } from './src/controller/LivroController'
import { Ebook } from './src/model/Ebook'
import { LivroFisico } from './src/model/LivroFisico'

const livroController = new LivroController()

export function main() {
    let opcao: number = 0

    do {
        console.log('===================================================')
        console.log('                   Biblioteca                      ')
        console.log('---------------------------------------------------')
        console.log('          📚 Sua cidade, sua biblioteca 📚        ')
        console.log('===================================================')
        console.log('')
        console.log('  1 - Cadastrar Livro')
        console.log('  2 - Listar Todos os Livros')
        console.log('  3 - Buscar Livro por Nome')
        console.log('  4 - Atualizar Dados do Livro')
        console.log('  5 - Apagar Livro')
        console.log('  6 - Sair')
        console.log('')
        console.log('==============================================')

        opcao = inputUser.questionInt('Digite a opção que voce deseja: ')

        if (opcao === 6) {
            sobre()
            process.exit(0)
        }

        switch (opcao) {
            case 1:
                cadastrarLivro()
                break
            case 2:
                listarLivros()
                break
            case 3:
                buscarLivroPorNome()
                break
            case 4:
                atualizarLivro()
                break
            case 5:
                apagarLivro()
                break
            default:
                if (opcao !== 6) {
                    console.log('Opção inválida! Tente novamente.')
                }
                break
        }
    } while (opcao !== 6)
}

function cadastrarLivro(): void {
    console.log('\n=== CADASTRAR NOVO LIVRO ===')
    
    const nome = inputUser.question('Nome do livro: ')
    const autor = inputUser.question('Autor: ')
    const genero = inputUser.questionInt('Codigo do genero: ')
    const tipo = inputUser.questionInt('Tipo (1-Ebook / 2-Livro Fisico): ')
    const preco = inputUser.questionFloat('Preco: R$ ')
    const anoPublicacao = inputUser.questionInt('Ano de publicacao: ')
    const editora = inputUser.question('Editora: ')
    const estoque = inputUser.questionInt('Quantidade em estoque: ')

    if (tipo === 1) {
        // Cadastrando Ebook
        const formato = inputUser.question('Formato do arquivo (PDF, EPUB, etc.): ')
        const tamanho = inputUser.questionFloat('Tamanho do arquivo (MB): ')
        
        const ebook = new Ebook(nome, autor, genero, tipo, preco, anoPublicacao, editora, estoque, formato, tamanho)
        livroController.CadastraLivro(ebook)
        
    } else if (tipo === 2) {
        // Cadastrando Livro Fisico
        const peso = inputUser.questionFloat('Peso (g): ')
        const altura = inputUser.questionFloat('Altura (cm): ')
        const largura = inputUser.questionFloat('Largura (cm): ')
        const tipoCapa = inputUser.question('Tipo da capa (Dura/Mole): ')
        
        const livroFisico = new LivroFisico(
            nome, 
            autor, 
            genero, 
            tipo, 
            preco, 
            anoPublicacao, 
            editora, 
            estoque, 
            peso,
            altura, 
            largura, 
            tipoCapa
        )
        livroController.CadastraLivro(livroFisico)
        
    } else {
        console.log('Tipo de livro invalido!')
    }
    
    keyPress()
}

function listarLivros(): void {
    console.log('\n=== LISTA DE TODOS OS LIVROS ===')
    livroController.ListarTodosLivros()
    keyPress()
}

function buscarLivroPorNome(): void {
    console.log('\n=== BUSCAR LIVRO POR NOME ===')
    const nome = inputUser.question('Digite o nome do livro: ')
    livroController.ProcurarPorNome(nome)
    keyPress()
}

function atualizarLivro(): void {
    console.log('\n=== ATUALIZAR DADOS DO LIVRO ===')
    const nomeAtual = inputUser.question('Digite o nome do livro a ser atualizado: ')
    
    // Buscando o livro existente
    const livroExistente = livroController.buscarPorNome(nomeAtual)
    
    if (!livroExistente) {
        console.log('Livro nao encontrado!')
        keyPress()
        return
    }

    console.log('Livro encontrado! Digite os novos dados:')
    
    const nome = inputUser.question('Novo nome do livro: ')
    const autor = inputUser.question('Novo autor: ')
    const genero = inputUser.questionInt('Novo código do genero: ')
    const tipo = inputUser.questionInt('Novo tipo (1-Ebook / 2-Livro Fisico): ')
    const preco = inputUser.questionFloat('Novo preço: R$ ')
    const anoPublicacao = inputUser.questionInt('Novo ano de publicacao: ')
    const editora = inputUser.question('Nova editora: ')
    const estoque = inputUser.questionInt('Nova quantidade em estoque: ')

    if (tipo === 1) {
        // Atualizando o Ebook
        const formato = inputUser.question('Novo formato do arquivo: ')
        const tamanho = inputUser.questionFloat('Novo tamanho do arquivo (MB): ')
        
        const novoEbook = new Ebook(
            nome, 
            autor, 
            genero, 
            tipo, 
            preco, 
            anoPublicacao, 
            editora, 
            estoque, 
            formato, 
            tamanho
        )
        livroController.Atualizar(livroExistente, novoEbook)
        
    } else if (tipo === 2) {
        // Atualizando o livro fisico
        const peso = inputUser.questionFloat('Novo peso (g): ')
        const altura = inputUser.questionFloat('Nova altura (cm): ')
        const largura = inputUser.questionFloat('Nova largura (cm): ')
        const tipoCapa = inputUser.question('Novo tipo da capa: ')
        
        const novoLivroFisico = new LivroFisico(
            nome,
            autor,
            genero, 
            tipo, 
            preco, 
            anoPublicacao, 
            editora, 
            estoque, 
            peso, 
            altura, 
            largura, 
            tipoCapa
        )
        livroController.Atualizar(livroExistente, novoLivroFisico)
        
    } else {
        console.log('Tipo de livro inválido!')
    }
    
    keyPress()
}

function apagarLivro(): void {
    console.log('\n=== APAGAR LIVRO ===')
    const nome = inputUser.question('Digite o nome do livro a ser apagado: ')
    
    const confirmacao = inputUser.question('Tem certeza que deseja apagar este livro? (s/n): ')
    
    if (confirmacao.toLowerCase() === 's' || confirmacao.toLowerCase() === 'sim') {
        livroController.Deletar(nome)
        console.log('Livro removido com sucesso!')
    } else {
        console.log('Operação cancelada.')
    }
    
    keyPress()
}

function keyPress(): void {
    console.log('\nPressione ENTER para continuar...')
    inputUser.question('')
}

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Eduardo Alves ");
    console.log("eduardu0220@gmail.com");
    console.log("https://github.com/Eduardo-Alves-0");
    console.log("*****************************************************");
}

main()