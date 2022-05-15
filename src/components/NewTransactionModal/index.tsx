import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg'
import Modal from "react-modal"
import { Container, RadioBox, TransactionTypeContainer } from "./styles"
import { FormEvent, useState } from 'react'
import { useTransactions } from '../../hooks/useTransactions'

interface NewTransactionModalProps{
    isOpen: boolean
    onRequestClose: () => void
}

export function NewTransactionModal( { isOpen, onRequestClose }:NewTransactionModalProps ) {
    const { createTransaction } = useTransactions();

    const [type, setType] = useState('deposit')
    function handleSetDepositType() {
        setType('deposit');
    }
    function handleSetWithdrawType() {
        setType('withdraw');
    }


    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState('')

    async function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();

        await createTransaction({
            title,
            amount,
            category,
            type,
        })

        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit');
        onRequestClose();
    }
    
    return(
        <>
            <Modal 
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                overlayClassName="react-modal-overlay"
                className="react-modal-content"
            >   
                <button type="button" onClick={onRequestClose} className="react-modal-close">
                    <img src={closeImg} alt="Fechar modal" />
                </button>

                <Container onSubmit={handleCreateNewTransaction}>
                    <h2>Cadastrar transação</h2>
                    
                    <input 
                        placeholder="Título"    
                        value={title}
                        onChange={event => setTitle(event.target.value)}
                        required
                    />

                    <input 
                        type="number"
                        placeholder="R$ 500,00" 
                        value={amount}
                        required
                        onChange={event => setAmount(Number(event.target.value))}
                    />

                    <TransactionTypeContainer>
                        <RadioBox 
                            type="button" 
                            onClick={handleSetDepositType}
                            isActive={type == 'deposit'}
                            activeColor="green"
                        >
                            <img src={incomeImg} alt="" />
                            <span>Entrada</span>
                        </RadioBox>
                        <RadioBox 
                            type="button" 
                            onClick={handleSetWithdrawType}
                            isActive={type == 'withdraw'}
                            activeColor="red"
                        >
                            <img src={outcomeImg} alt="" />
                            <span>Saída</span>
                        </RadioBox>
                    </TransactionTypeContainer>

                    <input 
                        placeholder="Categoria"
                        value={category}
                        required
                        onChange={event => setCategory(event.target.value)}
                    />

                    <button type="submit">Cadastrar</button>

                </Container>
            </Modal>
        </>
    )
}