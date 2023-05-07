import React from 'react'
import { Button } from '../../components/button'
import { RightIcon } from '../../components/rightIcon'
<<<<<<< HEAD
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
=======
import { Container } from '../../components/loanFormIn/style'
import Head from 'next/head'
import Header from '@/components/header'
import { BackIcon } from '@/components/backIcon'
import { LoanContainer } from '@/components/loanContainer'
import { StartText } from '@/components/startText'
import { useState } from 'react'
import { useRouter } from 'next/router'
>>>>>>> 9596396bdd003b89eac850c12e8c53ec1daeefd9

interface Props {
    openWallet(): void
}

const PayBackMoney: React.FC<Props> = ({ openWallet }) => {
<<<<<<< HEAD

const onSubmit= async (data: any) => {
    const contractInstance = await loan(user!.moneyOffer.address)
    const tx = await contractInstance.payLoan({
        value.buyerAmount
        })
=======
    const router = useRouter()
    const [stage, setStage] = useState(0)
    const backHandler = () => {
        if (stage == 0) {
            router.replace("/")
        } else if (stage == 1) {
            setStage(0)
        }
>>>>>>> 9596396bdd003b89eac850c12e8c53ec1daeefd9
    }

    return (
        <>
        <Head>
                <title>PeerFound - Solicitar empréstimo</title>
        </Head>
        <Header />
        <BackIcon onClick={backHandler}/>
                <LoanContainer>
                    <StartText>
                        <b>Oferta empréstimo</b>
                    <br /> Analisar demandas
                </StartText>
            </LoanContainer>

        <Container>
<<<<<<< HEAD
        <h3> Pay back your loan</h3>
            
            </Container>{() => openWallet()}>Pay Back<RightIcon /></Button>
        </Container>

=======
        <h3 style={{textAlign:"center", margin:"20%"}}> Pay back your loan</h3>
        <Button onClick={() => openWallet()}>Pay Back<RightIcon /></Button>
        </Container>
        </>
      
    )
}
>>>>>>> 9596396bdd003b89eac850c12e8c53ec1daeefd9

export default PayBackMoney
