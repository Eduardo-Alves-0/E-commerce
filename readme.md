# 📚 SistemaBiblioteca

Sistema de gerenciamento de biblioteca desenvolvido em **TypeScript** aplicando conceitos de **Programação Orientada a Objetos (POO)**. Interface interativa via terminal para gerenciar acervo de livros físicos e digitais.

## 🚀 Funcionalidades

- ✅ **Cadastrar Livros** - Ebooks e Livros Físicos
- ✅ **Listar Acervo** - Visualizar todos os livros cadastrados
- ✅ **Buscar por Nome** - Localizar livros específicos
- ✅ **Atualizar Dados** - Modificar informações existentes
- ✅ **Remover Livros** - Exclusão com confirmação de segurança

## 🛠️ Tecnologias Utilizadas

- **TypeScript** - Linguagem principal
- **Node.js** - Runtime JavaScript
- **readline-sync** - Interface de entrada do usuário
- **POO** - Classes abstratas, herança e encapsulamento

## 📁 Estrutura do Projeto

```
├── src/
│   ├── controller/
│   │   └── LivroController.ts    # Controlador principal
│   ├── model/
│   │   ├── Livro.ts             # Classe abstrata base
│   │   ├── Ebook.ts             # Classe para livros digitais
│   │   └── LivroFisico.ts       # Classe para livros físicos
│   └── repository/
│       └── LivroRepository.ts    # Repositório de dados
├── main.ts                       # Arquivo principal
└── package.json
```

## 🎯 Conceitos de POO Aplicados

### Abstração
- Classe abstrata `Livro` define estrutura comum

### Herança  
- `Ebook` e `LivroFisico` herdam de `Livro`

### Encapsulamento
- Atributos privados com métodos de acesso

### Polimorfismo
- Métodos específicos para cada tipo de livro

## 📋 Pré-requisitos

- Node.js (v14 ou superior)
- npm ou yarn

## ⚡ Instalação e Execução

1. **Clone o repositório**
```bash
git clone https://github.com/Eduardo-Alves-0/BiblioSystem.git
cd SistemaBiblioteca
```

2. **Instale as dependências**
```bash
npm install
```

3. **Compile o TypeScript**
```bash
npx tsc
```

4. **Execute o projeto**
```bash
node main.js
```

## 🖥️ Como Usar

### Menu Principal
```
===================================================
                   Biblioteca                      
---------------------------------------------------
          📚 Sua cidade, sua biblioteca 📚        
===================================================

  1 - Cadastrar Livro
  2 - Listar Todos os Livros
  3 - Buscar Livro por Nome
  4 - Atualizar Dados do Livro
  5 - Apagar Livro
  6 - Sair
```

### Cadastro de Livros

**Dados Comuns:**
- Nome do livro
- Autor
- Gênero
- Preço
- Ano de publicação
- Editora
- Estoque

**Ebook (Tipo 1):**
- Formato (PDF, EPUB, etc.)
- Tamanho do arquivo

**Livro Físico (Tipo 2):**
- Peso
- Dimensões (altura x largura)
- Tipo da capa

### Exemplo de Uso

```typescript
// Cadastrar um Ebook
Nome: "Clean Code"
Autor: "Robert C. Martin"
Tipo: 1 (Ebook)
Formato: "PDF"
Tamanho: 15.2 MB

// Cadastrar Livro Físico
Nome: "The Pragmatic Programmer"
Autor: "Andy Hunt"
Tipo: 2 (Físico)
Peso: 450g
Capa: "Mole"
```

## 🔧 Recursos Técnicos

### Validações
- Verificação de tipos de entrada
- Confirmação antes de excluir
- Tratamento de livros não encontrados

### UX/UI Terminal
- Menus organizados e visuais
- Pausas para leitura (`keyPress()`)
- Feedback claro das operações

## 📚 Aprendizados do Projeto

- **Arquitetura em Camadas** - Separação de responsabilidades
- **Padrão Repository** - Abstração do acesso aos dados  
- **Padrão Controller** - Lógica de negócio centralizada
- **Herança e Polimorfismo** - Reutilização de código
- **Interface de Usuário** - Experiência no terminal

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer fork do projeto
2. Criar uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abrir um Pull Request

## 📄 Licença

Este projeto está sob licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Eduardo Alves**
- GitHub: [@Eduardo-Alves-0](https://github.com/Eduardo-Alves-0)
- Email: eduardu0220@gmail.com

