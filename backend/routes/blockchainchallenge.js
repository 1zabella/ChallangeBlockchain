// importar bibliotecas
const express = require('express')
const { authMiddleware, adminMiddleware } = require('../middleware/auth')
const MoneyOffer = require('../models/moneyOffer')
const MoneyDemand = require('../models/moneyDemand')
const router = express.Router()

const { ethers } = require('ethers')
var store = require('store')


//ROTA PARA CRIAR OFERTA DE DINHEIRO
router.post('/createMoneyOffer', async (req, res) => {
    try {
        const user = store.get('user')
        // Cria uma nova instância do modelo de Indemnity com os dados do corpo da requisição
        const moneyOffer = new MoneyOffer({ ...req.body })
        moneyOffer.user = "6456f7f6e94651f0879faf99"
        moneyOffer.userName = "Gustavo Ferreira"
        moneyOffer.curValue = 0
        
        // Salva a nova instância de Indemnity no banco de dados
        await moneyOffer.save()
        // Retorna um status 200 (OK) após salvar com sucesso
        res.status(200).send()

    } catch (err) {
        console.log(err)
        // Retorna um erro 500 (Erro Interno do Servidor) em caso de falha
        res.status(500).send(err)
    }
})

//ROTA PARA CRIAR DEMANDA DE DINHEIRO
router.post('/createMoneyDemand', async (req, res) => {
    try {
        console.log(req.body)
        // Cria uma nova instância do modelo de Indemnity com os dados do corpo da requisição
        const moneyDemand = new MoneyDemand({ ...req.body })

        // Salva a nova instância de Indemnity no banco de dados
        await moneyDemand.save()

        // Retorna um status 200 (OK) após salvar com sucesso
        res.send()
    } catch (err) {
        console.log(err)
        // Retorna um erro 500 (Erro Interno do Servidor) em caso de falha
        res.status(500).send(err)
    }
})

//ROTA PARA VISUALIZAR AS OFERTAS DE DINHEIRO
router.get('/moneyOffers', /*adminMiddleware,*/ async (req, res) => {
    try {
        // Busca todos os documentos de Money Offer no banco de dados
        const moneyOffers = await MoneyOffer.find({})
        for (let i = 0; i < moneyOffers.length; i++) {
            await moneyOffers[i].populate('user')
        }

        // Retorna os documentos encontrados no formato JSON
        res.json(moneyOffers)
    } catch (err) {
        // Retorna um erro 500 (Erro Interno do Servidor) em caso de falha
        res.status(500).send(err)
    }
})

//ROTA PARA VISUALIZAR UMA OFERTA DE DINHEIRO
router.get('/moneyOffer/:id', async (req, res) => {
    try {
        // Busca o documento de Indemnity correspondente ao ID fornecido
        const moneyOffers = await MoneyOffer.findOne({ _id: req.params.id })
        await moneyOffers.populate('user')

        // Retorna o documento encontrado
        res.send(indemnity)
    } catch (err) {
        // Retorna um erro 500 (Erro Interno do Servidor) em caso de falha
        res.status(500).send(err)
    }
})

module.exports = router
