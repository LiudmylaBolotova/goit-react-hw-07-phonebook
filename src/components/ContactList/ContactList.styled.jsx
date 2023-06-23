import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;

  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.round}px;
  color: ${p => p.theme.colors.text};

  width: ${p => p.theme.sizes.width[5]}px;
  padding: 10px;
  background-color: ${p => p.theme.colors.twoBackgroundColor};
`;
