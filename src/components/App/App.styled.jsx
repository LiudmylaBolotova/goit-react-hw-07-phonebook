import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: ${p => p.theme.fontSizes[1]}px;
  width: ${p => p.theme.sizes.width[5]}px;
  margin: auto;

  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.backgroundColor};
  border: ${p => p.theme.borders.normal};
`;

export const Title = styled.h1`
  margin: ${p => p.theme.space[4]}px;
`;
