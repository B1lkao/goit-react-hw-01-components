import styled from 'styled-components';

export const TransCell = styled.td`
  text-align: center;
  width: 146px;
  height: 30px;
`;
export const TransTr = styled.tr`
  border: 1px solid ${p => p.theme.colors.background};
  :nth-child(2n) {
    background-color: ${p => p.theme.colors.background};
  }
  color: ${p => p.theme.colors.secondary};
  font-weight: ${p => p.theme.fontWeights.heading};
`;
export const TransTrHead = styled.tr`
  background-color: ${p => p.theme.colors.thead};
  color: ${p => p.theme.colors.white};
  height: 30px;
`;