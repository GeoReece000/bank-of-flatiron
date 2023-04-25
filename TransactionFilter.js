import React from "react";

const TransactionFilter = ({ searchTerm, onSearchTermChange }) => {
  return (
    <div>
      <label>
        Search Transactions:
        <input type="text" value={searchTerm} onChange={(e) => onSearchTermChange(e.target.value)} />
      </label>
    </div>
  );
};

export default TransactionFilter;
