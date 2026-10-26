let livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaAPI()

async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointDaAPI)
    livros = await res.json()

    livros.push(
        {
            titulo: 'Tuning de SQL: Otimização de consultas SQL e desempenho de bancos de dados',
            autor: 'Eduardo Gonçalves',
            imagem: './imagens/Tuning.png',
            alt: 'Capa do livro Tuning de SQL',
            preco: 150.00,
            categoria: 'back-end',
            quantidade: 5
        },
        {
            titulo: 'Séries temporais com Prophet: Análise e previsão de dados com Python',
            autor: 'Allan Spadini e Valquíria Alencar',
            imagem: './imagens/Prophet.png',
            alt: 'Capa do livro Séries temporais com Prophet',
            preco: 150.00,
            categoria: 'dados',
            quantidade: 5
        },
        {
            titulo: 'Estruturas de Dados: Fundamentos de programação usados no desenvolvimento de sistemas e algoritmos',
            autor: 'Thiago Leite e Carvalho',
            imagem: './imagens/Estrutura de Dados.png',
            alt: 'Capa do livro Estruturas de Dados',
            preco: 150.00,
            categoria: 'dados',
            quantidade: 5
        },
        {
            titulo: 'Aprenda JavaScript com Dashboards: Criação de dashboards para apresentar e visualizar informações',
            autor: 'Lucas Tauil',
            imagem: './imagens/JavaScript & Dashboards.png',
            alt: 'Capa do livro Aprenda JavaScript com Dashboards',
            preco: 150.00,
            categoria: 'front-end',
            quantidade: 5
        }
    )

    let livrosComDescontos = aplicarDescontos(livros)
    exibirOsLivrosNaTela(livrosComDescontos)
}