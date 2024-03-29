import { FormEvent, useState } from "react";

import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/entradas.svg";
import outcomeImg from "../../assets/saídas.svg";
import { useTransactions } from "../../hooks/useTransactions";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {

  const {createTransaction} = useTransactions(); 

  const [type, setType] = useState("deposit");
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState(''); 


  async function handleCreateNewTransaction (event: FormEvent) { 
    event.preventDefault(); 
    await createTransaction({type, title, amount, category}); 

    setType("deposit");
    setTitle(''); 
    setAmount(0); 
    setCategory('');
    
    onRequestClose(); 
  }

  

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay" //sobrescreve o estilo da biblioteca
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>
        <input 
          placeholder="Título"
          value={title}
          onChange={(ev)=> setTitle(ev.target.value)}  
        />
        <input 
          placeholder="Valor" 
          type="number"
          value={amount}
          onChange={(ev)=> setAmount(Number(ev.target.value))}  
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => {
              setType("deposit");
            }}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => {
              setType("withdraw");
            }}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input 
          placeholder="Categoria"
          value={category}
          onChange={(ev)=> setCategory(ev.target.value)}  
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
