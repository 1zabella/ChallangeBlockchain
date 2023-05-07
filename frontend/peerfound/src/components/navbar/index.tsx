import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Container, MoneyIcon, PeopleIcon, WalletIcon, FaMoney } from './style'
import { useUser } from '@/contexts/user'

interface Props {}

const Navbar: React.FC<Props> = props => {
    const router = useRouter()
    const { user } = useUser()
    const [items, setItems] = useState([
        {
            icon: PeopleIcon,
            link: '/account',
            text: 'Perfil'
        },
        {
            icon: FaMoney,
            link: '/loan',
            text: 'Empréstimo'
        },{
            icon: WalletIcon,
            link: '/dashboard',
            text: 'Wallet'
        }
    ])


    return (
        <Container>
            {items.map(item => (
                <div key={item.link}>
                    <Link href={item.link}>
                        <item.icon isActive={router.asPath == item.link} />
                        <span>{item.text}</span>
                    </Link>
                </div>
            ))}
        </Container>
    )
}

export default Navbar
