import styled from 'styled-components';

export interface ContainerProps extends React.ComponentPropsWithoutRef<'div'> {
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export const StyledContainer = styled.div<ContainerProps>`
  margin: 0 auto;
  max-width: ${(p) => {
    if (p.maxWidth === 'xs') {
      return '540px';
    } else if (p.maxWidth === 'sm') {
      return '720px';
    } else if (p.maxWidth === 'lg') {
      return '1140px';
    } else if (p.maxWidth === 'xl') {
      return '1320px';
    }
    return '960px';
  }};
  width: 100%;
`;
