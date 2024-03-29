import incomeImg from '../../assets/entradas.svg'; 
import outcomeImg from '../../assets/saídas.svg';
import totalImg from '../../assets/total.svg'; 
import { useTransactions } from '../../hooks/useTransactions';

import { Container } from "./styles";

export function Summary (){

  const {transactions} = useTransactions();

  const summary = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'deposit') {
      acc.deposits += transaction.amount;
      acc.totals += transaction.amount;
    } else {
      acc.withdraws += transaction.amount;
      acc.totals -= transaction.amount;
      
    }

    return acc;
  }, {
    deposits: 0,
    withdraws: 0, 
    totals: 0
  })
  
  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>{new Intl.NumberFormat('pt-br', {
          style: 'currency',
          currency: 'BRL'
        }).format(summary.deposits)}</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong> - {new Intl.NumberFormat('pt-br', {
          style: 'currency',
          currency: 'BRL'
        }).format(summary.withdraws)}</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>{new Intl.NumberFormat('pt-br', {
          style: 'currency', 
          currency: 'BRL'
        }).format(summary.totals)}</strong>
      </div>
    </Container>
  )
}