import { StyledAvatar, AvatarProps } from './AvatarStyles';

const Avatar = ({ children, src, alt, ...props }: AvatarProps) => {
  return (
    <StyledAvatar src={src} alt={alt} {...props}>
      {children}
    </StyledAvatar>
  );
};

export default Avatar;
