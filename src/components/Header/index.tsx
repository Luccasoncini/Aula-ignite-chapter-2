import { useState } from 'react'
import Modal from 'react-modal'
import logoimg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
    onOpenNewTransactionModal: () => void
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
   

    return (
        <Container>
            <Content>
                <img src={logoimg} alt="dt-money" />
                <button 
                    onClick={onOpenNewTransactionModal}
                >
                    Nova transação
                </button>


            </Content>
        </Container>
    )
}