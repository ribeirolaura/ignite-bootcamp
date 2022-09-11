import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs'; 
import { App } from './App';

createServer({
  models: {
    transaction: Model
  },

  seeds(server){
    server.db.loadData({ transactions: [
      {
        id: 1,
        title: 'Mailing', 
        amount: 1000, 
        type: 'deposit',
        category: 'tools', 
        createdAt: '2022-02-02 09:00'
      },
      {
        id: 2,
        title: 'Food', 
        amount: 1000, 
        type: 'withdraw',
        category: 'food', 
        createdAt: '2022-02-02 09:00'
      },
  ]
    })
  }, 
  
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    this.post('transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody); 

      return schema.create('transaction', data);
    })
  }
})

const root  = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

