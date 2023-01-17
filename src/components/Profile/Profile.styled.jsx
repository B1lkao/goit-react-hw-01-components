import styled from 'styled-components';
export const ProfImg = styled.img`
  padding: 15px;
  width: 150px;
  border-radius: 50%;
`;
export const ProfUl = styled.ul`
  list-style: none;
  background-color: ${p => p.theme.colors.white};
  display: flex;
  height: 80px;
  padding: 0px;
  margin: 0;
  justify-content: space-around;
  align-items: center;
`;
export const ProfItem = styled.li`
  width: 100%;
  height: 100%;
  :not(:last-child) {
    border-right: 2px solid ${p => p.theme.colors.background};
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ProfName = styled.p`
  font-size: ${p => p.theme.fontSizes[4]};
  font-weight: ${p => p.theme.fontWeights.heading};
  margin: 0 0 15px;
`;
export const ProfInfo = styled.p`
  font-size: ${p => p.theme.fontSizes[3]};
  font-weight: ${p => p.theme.fontWeights.heading};
  margin: 0 0 15px;
  color: ${p => p.theme.colors.secondary};
`;
export const ProfLabel = styled.p`
  font-size: ${p => p.theme.fontSizes[2]};
  font-weight: ${p => p.theme.fontWeights.heading};
  margin: 0 0 15px;
  color: ${p => p.theme.colors.secondary};
`;
export const ProfQuantity = styled.p`
  font-size: ${p => p.theme.fontSizes[2]};
  font-weight: ${p => p.theme.fontWeights.extraBold};
  color: ${p => p.theme.colors.primary};
  margin: 0;
`;