import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center; 
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
  background-color: ${props => props.theme.colors.blue};
`;
