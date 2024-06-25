const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

const list =['Java', 'Kotlin','Android']

// Endpoint Read All [GET] /personagem

app.get('/personagem', function (req, res) {
    res.send(list.filter(Boolean))
})

//Endpoint Read By ID [GET] /personagem/:id
app.get('/personagem/:id', function (req, res) {
  //Acessamos o parâmetro de rota ID
    const id = req.params.id

  // Acessa o item na lista usando o ID -1  
    const item = list[id -1]

  //Enviamos o item como resposta
    res.send(item)

})

// Sinalizo para o Express que estamos usando JSON no Body
app.use(express.json())

//Endpoint Create [POST] /PERSONAGEM  
app.post('/personagem', function (req, res){
  //Acessamos o Body da Requisição 
  const body = req.body

   //Acessamos a propriedade 'nome' do body
  const novoItem = body.nome

  //Checa se o `nome` está presente no body
  if (!novoItem) {
    return res.status(400).send('Corpo da requisição deve conter a propriedade `nome`.')
  }

  //Checa se o novo item esta na lista ou não
  if (list.includes(novoItem)){
    return res.status(409).send('Esse item já existe na lista.')
  }

  //Adicionamos na lista
  list.push(novoItem)

  //Exibimos uma mensagem de sucesso
  res.status(201).send('Item adicionado com sucesso: ' + novoItem)
})

//Endpoint Update [PUT] /personagem/:id
app.put('/personagem/:id', function (req, res) {
   //Acessando o ID d parametros de rota
   const id = req.params.id

   //Acessamos o  body da requisição
   const body = req.body
   
   //Acessamos a propriedade 'nome' do body
   const novoItem = body.nome

   //Checa se o `nome` está presente no body
  if (!novoItem) {
    return res.status(400).send('Corpo da requisição deve conter a propriedade `nome`.')
  }

  //Checa se o novo item esta na lista ou não
  if (list.includes(novoItem)){
    return res.status(409).send('Esse item já existe na lista.')
  }

   //Atualizamos na lista o novoItem pelo ID-1
   list[id -1] = novoItem

   res.send('Item atualizado com sucesso: ' + id + ' - ' +  novoItem)
  })

  //endpoint [Delete] /personagem:id
  app.delete('/personagem/:id', function (req, res) {
    //Acessamos o parametro de rota
    const id = req.params.id

    //Remover o item da lista de usuario o ID -1
    delete list[id -1]

    //Enviamos uma mensagem de sucesso
    res.send('Item removido com sucsso: ' + id)
  })

app.listen(3000)