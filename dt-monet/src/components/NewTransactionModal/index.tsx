import Modal from "react-modal";
import { Container, TransactionTypeContainer } from "./styles";
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/entradas.svg'; 
import outcomeImg from '../../assets/saídas.svg';
 
interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
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

      <Container>
        <h2>Cadastrar Transação</h2>
        <input 
          placeholder="Título"
        />
        <input 
          placeholder="Valor"
          type="number"
        />

        <TransactionTypeContainer>
          <button type="button">
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </button>
          
          <button type="button">
            <img src={outcomeImg} alt="Saída" />
            <span>Entrada</span>
          </button>
        </TransactionTypeContainer>

        <input 
          placeholder="Categoria"
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
