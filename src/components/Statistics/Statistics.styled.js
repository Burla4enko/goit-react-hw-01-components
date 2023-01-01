import styled from 'styled-components';

export const StatSection = styled.section`
  padding-top: 20px;
  margin: 20px auto;
  max-width: 400px;
  background-color: white;
`;

export const StatTitle = styled.h2`
  margin: 0 0 20px;

  text-transform: uppercase;
  text-align: center;
  color: #aeb5bc;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0;
  margin: auto;

  list-style: none;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  flex: 0 200px;
  padding-top: 20px;
  padding-bottom: 20px;

  border: 1px solid #fafafa;
  background-color: #f03762;
  text-align: center;
`;

export const StatLabel = styled.span`
  margin-bottom: 8px;

  font-size: 0.9em;
  color: white;
`;
export const StatPercentage = styled.span`
  font-weight: 700;
  font-size: 1.2em;
  color: white;
`;
