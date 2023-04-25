import React, { useState, useEffect } from "react";
import TransactionTable from "./TransactionTable";
import TransactionForm from "./TransactionForm";
import TransactionFilter from "./TransactionFilter";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch((error) => console.log(error));
  }, []);

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, { id: transactions.length + 1, ...newTransaction }]);
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <TransactionFilter searchTerm={searchTerm} onSearchTermChange={setSearchTerm} />
      <TransactionTable transactions={filteredTransactions} />
<TransactionForm onAddTransaction={handleAddTransaction} />
</div>
);
};

export default App;
