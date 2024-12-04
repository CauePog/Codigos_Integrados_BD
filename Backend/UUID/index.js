// importando express
const express =require('express')

//importando o método 'uuidv4' da biblioteca 'uuid', para gerar um identificador para o app

const {v4:uuidv4 } = req('uuid')

//criando uma instancia do aplicativo express
const app = express()

//configurando o servidor para aceitar requisições com dados JSON no corpo 
app.user(express.json())
// array onde armazenamos temporariamente os projetos criados

const projects = []

// middleware que tristra as rotas e métodos das requisições no console

function logRoutes(req, res, next){
    //extraindo o método e a url da requisição
    const {method, url} = req
    //formatando uma string com o método e a URL
    const route = `[${method.toUpperCase()}] ${url}`
    // exibindo a string no console
    console.log(route)
    //executando o próximo middleware ou rota
    return next()
}

//habilitando o uso do middleware de log de rotas em todas as requisiçoes



// definindo uma rota para o endpont 'projects'
// quando uma solicitação GET é feita para 'projects', a função a seguir é executada
app.get('/project', function(req, res){
    return res.json(projects)
})

//definindo uma rota para criar um novo projeto
//quando uma solicitação do tipo POST é feita para '/projects'.
app.post('/projects', function(req, res){
    //retornar uma resposta com uma lista de projetos, incluindo o novo projeto
    return res.json([
        'projeto 1',
        'projeto 2',
        'projeto 3'
    ])
})
// definindo uma rota para atualizar um projeto especifico 
// o ':id' é um parametro de rota , 
app.put('/projects :id', function(req, res){
    // retorna uma resposta JSON com a lista de projetos atualizadas
    return res.json([
        'projeto 4',
        'projeto 2',
        'projeto 3'
    ])

})
// definindo uma rota para deletar um projeto especifico

app.delete('/projects/:id', function(req, res){
    // retorna uma resposta com a lista de projetos após a exclusão de um deles
    return res.json([
        'projeto 2',
        'projeto 3'
    ])
})
//iniciando o servidor na porta 9093 (para orientar no terminar que o servidor foi iniciado, vamos colocar uma mensagem)
app.listen(9093, ()=> {
    console.log('Servidor iniciando uma porta 9093')
})