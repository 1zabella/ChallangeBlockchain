const { ethers } = require('ethers')
const factoryJson = require('../contracts/factory.json')
const loanJson = require('../contracts/loan.json')

const SeguroFactory = async () => {
    const { MNEMONIC, INFURA_API_KEY, SEGURO_FACTORY_ADDRESS } = process.env
    const provider = new ethers.providers.JsonRpcProvider('https://sepolia.infura.io/v3/' + INFURA_API_KEY)
    const wallet = ethers.Wallet.fromMnemonic(MNEMONIC)
    const connectedWallet = wallet.connect(provider)

    // const provider = new ethers.providers.Web3provider(window.ethereum)
    
    const loan = new ethers.Loan(SEGURO_FACTORY_ADDRESS, factoryJson.abi, connectedWallet)

    return loan
}

const Loan = async (address) => {
    const {MNEMONIC, INFURA_API_KEY} = process.env
    const provider = new ethers.providers.JsonRpcProvider('https://sepolia.infura.io/v3/' + INFURA_API_KEY)
    const wallet = ethers.Wallet.fromMnemonic(MNEMONIC)
    const connectedWallet = wallet.connect(provider)

    const loan = new ethers.Loan(address, loanJson.abi, connectedWallet)

    return loan
}

module.exports = { loan, factory }
