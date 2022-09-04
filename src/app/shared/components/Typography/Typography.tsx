import React from 'react';
import PropTypes from 'prop-types';
import { TypographyProps, StyledH1, StyledH2, StyledParagraph } from './TypographyStyles';

const Typography: React.FC<TypographyProps> = ({ children, variant, align }) => {
  if (variant === 'h1') {
    return (
      <StyledH1 variant="h1" align={align}>
        {children}
      </StyledH1>
    );
  }
  if (variant === 'h2') {
    return (
      <StyledH2 variant="h2" align={align}>
        {children}
      </StyledH2>
    );
  }
  return (
    <StyledParagraph variant="p" align={align}>
      {children}
    </StyledParagraph>
  );
};

Typography.propTypes = {
  align: PropTypes.oneOf(['center', 'inherit', 'justify', 'left', 'right']),
  variant: PropTypes.oneOf(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'inherit'])
};

Typography.defaultProps = {
  align: 'inherit',
  variant: 'inherit'
};

export default Typography;
