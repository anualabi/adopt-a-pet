import styled from 'styled-components';

export interface AvatarProps extends React.ComponentPropsWithoutRef<'img'> {
  src: string;
  alt: string;
}

export const StyledAvatar = styled.img`
  border-radius: 50%;
  min-width: 100px;
  width: 100%;
`;
