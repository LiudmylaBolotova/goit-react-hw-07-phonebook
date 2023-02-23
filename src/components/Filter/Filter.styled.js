import styled from 'styled-components';

export const InputForm = styled.input`
  border: ${p => p.theme.borders.small};
  border-radius: ${p => p.theme.radii.round}px;
  color: ${p => p.theme.colors.text};

  width: ${p => p.theme.sizes.width[3]}px;
  height: ${p => p.theme.sizes.height[1]}px;

  :active,
  :hover,
  :focus {
    outline: none;
    border-color: ${p => p.theme.colors.text};
  }
`;

export const ButtonFilter = styled.button`
  display: inline-block;
  width: ${p => p.theme.sizes.width[0]}px;
  height: ${p => p.theme.sizes.height[1]}px;
  border: ${p => p.theme.borders.small};
  border-radius: ${p => p.theme.radii.round}px;

  margin-top: ${p => p.theme.space[5]}px;
  margin-bottom: ${p => p.theme.space[5]}px;

  cursor: pointer;

  font-size: ${p => p.theme.fontSizes[0]}px;
  font-weight: ${p => p.theme.fontWeights.middle};
  color: ${p => p.theme.colors.text};

  transition: ${p => p.theme.transitions.transitionBtn};
  :hover,
  :focus {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.color};
    color: ${p => p.theme.colors.twoTextColor};
  }
`;
