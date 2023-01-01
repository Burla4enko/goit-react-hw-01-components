import styled from 'styled-components';

export const UserProfile = styled.div`
  margin: 20px auto;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  max-width: 400px;
`;

export const UserDescription = styled.div`
  background-color: white;
  margin: auto;
  padding: 20px 30px;
  text-align: center;
`;

export const UserName = styled.p`
  font-weight: 700;
`;

export const UserTag = styled.p`
  color: #aeb5bc;
`;

export const UserLocation = styled.p`
  color: #aeb5bc;
`;

export const UserAvatar = styled.img`
  border-radius: 50%;
  border: 2px solid #aeb5bc;
  width: 120px;
`;

export const UserStats = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
  background-color: #edebeb;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    border: 1px solid #fafafa;
    text-align: center;
    flex: 0 200px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

export const UserLabel = styled.span`
  font-weight: 700;
  margin-bottom: 10px;
`;

export const UserQuantity = styled.span`
  color: #aeb5bc;
`;
