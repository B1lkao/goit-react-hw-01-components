import styled from 'styled-components';
export const StatTitle = styled.h2`
  font-size: ${p => p.theme.fontSizes[4]};
  margin-bottom: 20px;
  text-align: center;
  text-transform: uppercase;
`;
export const StatList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  height: 70px;
  justify-content: space-evenly;
`;
export const StatItem = styled.li`
  font-size: ${p => p.theme.fontSizes[2]};
  font-weight: ${p => p.theme.fontWeights.heading};
  padding: 12px;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  background-color: ${prop => {
    switch (prop.label) {
      case '.docx':
        return '#3da3c5';
      case '.pdf':
        return '#b366ff';
      case '.mp3':
        return '#d14747';
      case '.psd':
        return '#46b5de';
      default:
        return '#ffffff';
    }
  }};
`;