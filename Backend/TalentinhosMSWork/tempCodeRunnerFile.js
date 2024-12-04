const express =require('express')
//criando uma instancia de aplicativo para livros web

const app = express()

//definindo uma rota para o endpont raiz ('/')
//quando uma solicitação GET é feita para '/', essa funçao é executada
app.get('/', function(req, res){
    //retorna uma resposta no formato JSON com uma mensagem de boas vindas
    return res.json({
        message: 'Bem vinda a biblioteca Talentinhos'
    })

})

// quando uma solicitação GET é feita para 'Livros', surgem as opções
app.get('/livros', function(req, res){
    return express.res.json([
        '"1984" – George Orwell',
        '"Dom Quixote" – Miguel de Cervantes'
    ])
})

//definindo um post para criar um novo livro na biblioteca
//quando uma solicitação do tipo POST é feita para '/Sugestão'.
app.post('/Livros', function(req, res){
    return res.json([
        'Sugestão 1',
        'Sugestão 2',
        'Sugestão 3'
    ])
})
// definindo uma rota para atualizar um Livro especifico 
app.put('/Livro', function(req, res){
    // retorna uma resposta JSON com a lista de projetos atualizadas
    return res.json([
        'Livro 4',
        'Livro 2',
        'Livro 3'
    ])

})
// definindo uma rota para deletar um Livro especifico

app.delete('/Livro', function(req, res){
    // retorna uma resposta com a lista de projetos após a exclusão de um deles
    return res.json([
        'Livro 2',
        'Livro 3'
    ])
})
//iniciando o servidor na porta 5000 (para orientar no terminar que o servidor foi iniciado, vamos colocar uma mensagem)
app.listen(5000, ()=> {
    console.log('Servidor iniciando uma porta 5000')
})