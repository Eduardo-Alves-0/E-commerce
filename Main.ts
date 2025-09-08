import inputUser from 'readline-sync'

export function main() {
    let opcao: number = 0

    do {
        console.log('===================================================')
        console.log('                   Biblioteca                      ')
        console.log('---------------------------------------------------')
        console.log('          📚 Sua cidade, seu marketplace 📚        ')
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
                console.log('Buscar Pedido por Número')
                break
            case 4:
                console.log('Atualizar Dados do Pedido')
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