import styled from 'styled-components';

export const TransactionHistoryTable = styled.table`
  width: 80%;
  margin: 0 auto;
  border-collapse: collapse;
  text-align: center;
  text-transform: uppercase;

  thead {
    background-color: #f03762;
  }

  th {
    padding: 10px;
    color: white;
  }

  td {
    border: 1px solid #ddd;
    padding: 8px;
    color: gray;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TransactionHistoryType = styled.td`
  text-transform: capitalize;
`;
