import styled from 'styled-components';

export const FriendListUl = styled.ul`
  padding: 20px;
  margin: auto;

  background-color: #fafafa;
  list-style: none;
`;

export const FriendItemLi = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 5px 5px;
  margin: 0 auto 10px;

  min-width: 200px;
  max-width: 400px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const FriendStatus = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${p => (p.onlineColor === 'true' ? 'green' : 'red')};
`;

export const FriendAvatar = styled.img`
  display: block;
  height: auto;
  border-radius: 5px;
`;

export const FriendName = styled.p`
  font-weight: 500;
`;
