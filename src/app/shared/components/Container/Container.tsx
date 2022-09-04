import PropTypes from 'prop-types';
import { ContainerProps, StyledContainer } from './ContainerStyles';

const Container = ({ children, maxWidth, ...props }: ContainerProps) => {
  return (
    <StyledContainer maxWidth={maxWidth} {...props}>
      {children}
    </StyledContainer>
  );
};

Container.propTypes = {
  maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
};

Container.defaultProps = {
  maxWidth: 'md'
};

export default Container;
