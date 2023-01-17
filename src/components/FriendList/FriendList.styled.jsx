import styled from 'styled-components';
export const FriendListList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0;
  margin: 0;
  list-style: none;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes[3]};
`;
export const FriendListItemStyle = styled.li`
  padding-left: 30px;
  display: flex;
  border-radius: 4px;
  align-items: center;
  height: 80px;
  gap: 15px;
  width: 320px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;