import { LivroRepository } from './src/repository/LivroRepository';
import { LivroController } from './src/controller/LivroController';
import inputUser from 'readline-sync'
import { Livro } from './src/model/abstrataLivro';
import { stringify } from 'querystring';
import { LivroFisico } from './src/model/LivroFisico';


export function main() {
    const livros: LivroController = new LivroController

    let nome, autor, editora, formato , tamanho: string
    let genero, tipo, preco, anoPublicacao, estoque: number 

    let livro = 'string'
    let livroNovo = new LivroFisico ( 'indio','edu', 2,  2, 2, 2, '', 1, 1, 2,2, '', )

    let opcao: number = 0

    do {
        console.log('===================================================')
        console.log('                   Biblioteca                      ')
        console.log('---------------------------------------------------')
        console.log('          📚 Sua cidade, sua biblioteca 📚        ')
        console.log('===================================================')
        console.log('')
        console.log('  1 - Criar Pedido')
        console.log('  2 - Listar Itens no Carrinho')
        console.log('  3 - Buscar Pedido por Número')
        console.log('  4 - Atualizar Dados do Pedido')
        console.log('  5 - Apagar Pedido')
        console.log('  6 - Sair')
        console.log('')
        console.log('==============================================')

        opcao = inputUser.questionInt('Digite a opção que você deseja')

        if (opcao === 6) {
            sobre()
            process.exit(0)
        }

        switch (opcao) {
            case 1:
                console.log('Criar pedido')
                break
            case 2:
                console.log('Listar Itens no Carrinho')
                break
            case 3:
                console.log('Buscar livro')
                nome = inputUser.question('Digite o nome do livro: ')
                livros.buscarPorNome(nome)

                break
            case 4:
                console.log('Atualizar Dado do livro')
                nome = inputUser.question('Digite o nome do livro: ')

                let livro = livros.buscarPorNome(nome)

                if(livro != null){
                    console.log('Digite o nome livro: ')
                    nome = inputUser.question('')

                    console.log('Digite o nome do autor: ')
                    autor = inputUser.question('')

                    console.log('Digite o nome da editora: ')
                    editora = inputUser.question('')

                    console.log('Digite o ano de publicacao do livro: ')
                    anoPublicacao = inputUser.questionInt

                    console.log('Digite a quantidade do livro no estoque: ')
                    estoque = inputUser.questionInt('')

                    console.log('Digite o preco do livro: ')
                    preco = inputUser.questionInt('')

                    tipo = livro.tipo 

                    switch(tipo){
                        case 1:
                            console.log('Digite o formato do livro com o "." antes do formato')
                            formato = inputUser.question('')
                            livros.Atualizar(
                                livro, livroNovo
                            )
                    }   
                }
                break
            case 5:
                console.log('Apagar Pedido')
                break
            case 6:
                console.log('Sair')
                break
        }
    } while (opcao !== 6)
}

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Eduardo Alves ");
    console.log("eduardu0220@gmail.com");
    console.log("https://github.com/Eduardo-Alves-0");
    console.log("*****************************************************");
}

main()