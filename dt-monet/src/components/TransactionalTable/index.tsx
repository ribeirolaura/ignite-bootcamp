import { useTransactions } from "../../hooks/useTransactions";
import { Container, Paragraph } from "./styles";

export function TransactionalTable() {
  
  const {transactions} = useTransactions(); 

  return (
    <Container>
      {
        transactions.length === 0 ? (
          <Paragraph>Nothing here yet! Click on 'Nova Transação' to add a transaction!</Paragraph>
        )
      : (

        <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
           { transactions.map(transaction => (
              <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>{new Intl.NumberFormat('pt-br', {
                style: 'currency',
                currency: 'BRL'
              }).format(transaction.amount)}</td>
              <td>{transaction.category}</td>
              <td>{new Intl.DateTimeFormat('pt-br').format(new Date(transaction.createdAt))}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
      )}
    </Container>
  );
}
