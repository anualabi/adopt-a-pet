import React from 'react';
import styled, { css } from 'styled-components';

export interface TypographyProps extends React.ComponentPropsWithoutRef<'div'> {
  align?: 'center' | 'inherit' | 'justify' | 'left' | 'right';
  variant?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'inherit';
}

const textProperties = (p: TypographyProps) => {
  let fontSize = 1;
  let fontWeight = 700;
  let textAlign = 'inherit';

  if (p.variant === 'h1') {
    fontSize = 4;
  } else if (p.variant === 'h2') {
    fontSize = 3.5;
  } else if (p.variant === 'p') {
    fontWeight = 400;
  }

  if (p.align === 'center') {
    textAlign = 'center';
  } else if (p.align === 'justify') {
    textAlign = 'justify';
  } else if (p.align === 'left') {
    textAlign = 'left';
  } else if (p.align === 'right') {
    textAlign = 'right';
  }

  return css`
    font-size: ${fontSize}rem;
    font-weight: ${fontWeight};
    text-align: ${textAlign};
  `;
};

export const StyledH1 = styled.h1<TypographyProps>`
  ${textProperties}
`;

export const StyledH2 = styled.h2<TypographyProps>`
  ${textProperties}
`;

export const StyledParagraph = styled.p<TypographyProps>`
  ${textProperties}
`;
