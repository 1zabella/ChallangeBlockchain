import React from 'react'
import { Button } from '../../components/button'
import { RightIcon } from '../../components/rightIcon'
// import { Container } from '../../components/loanForm/style'
import { useMetamask } from '@/contexts/metamask'
import { loan } from '../../../ethers'
import { ethers } from 'ethers'

const { setAccount } = useMetamask()

const connectToMetamask = async () => {
    if (window.ethereum) {
        //Se conecta a carteira através do método abaixo e define o estado da account
        const res = await window.ethereum.request({
            method: 'eth_requestAccounts'
        })

        setAccount(res[0])
        const sepolia = '0xaa36a7'
        if (window.ethereum.chainId !== sepolia) {
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: sepolia }]
            })
        }

        //Caso não tenha a metamask instalada
    } else {
        alert('Install MetaMask')
    }
}

interface Props {
    openWallet(): void
}

const PayBackMoney: React.FC<Props> = ({ openWallet }) => {

const onSubmit= async (data: any) => {
    const contractInstance = await loan(user!.moneyOffer.address)
    const tx = await contractInstance.payLoan({
        value.buyerAmount
        })
    }

    return (
        <Container>
        <h3> Pay back your loan</h3>
            
            </Container>{() => openWallet()}>Pay Back<RightIcon /></Button>
        </Container>


export default PayBackMoney
