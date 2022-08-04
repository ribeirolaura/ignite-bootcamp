import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global"

import Modal from 'react-modal';
import { useState } from "react";

// Para facilitar em quesitos de acessibilidade, antes da declaração abaixo, o modal envolvia a div #root principal gerada no html e levando em consideração a acessibilidade
// para leitura dos elementos, o elemento #root deve ser o principal a envolver todo o código
// source: doc react-modal  
Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false); 

  
  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);

  }
  
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <Modal 
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        >
          <h2>Cadastro de Modal</h2>
        </Modal>
      <GlobalStyle />
    </>
  );
} 

