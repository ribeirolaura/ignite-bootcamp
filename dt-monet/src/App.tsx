import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global"

import Modal from 'react-modal';
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsContext } from "./TransactionsContext";

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
    <TransactionsContext.Provider value={[]}>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal} 
      />
      <GlobalStyle />
    </TransactionsContext.Provider>
  );
} 

