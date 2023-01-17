import styled from 'styled-components';
export const FriendStatus = styled.span`
  border-radius: 50%;
  display: flex;
  height: 15px;
  width: 15px;
  background-color: ${prop => (prop.status ? 'green' : 'red')};
`;
export const FriendsLogo = styled.img`
  width: 50px;
  height: 50px;
`;