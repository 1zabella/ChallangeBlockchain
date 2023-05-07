import React from 'react'
import { Button } from '../../components/button'
import { RightIcon } from '../../components/rightIcon'
import { Container } from '../../components/loanForm/style'

interface Props {
    openWallet(): void
}

const PayBackMoney: React.FC<Props> = ({ openWallet }) => {
  

    return (
        <Container>
        <h3> Pay back your loan</h3>
        <Button onClick={() => openWallet()}>Pay Back<RightIcon /></Button>
        </Container>
    )
}

export default PayBackMoney
