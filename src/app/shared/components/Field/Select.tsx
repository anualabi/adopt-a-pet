import React from 'react';
import PropTypes from 'prop-types';
import { StyledSelect } from './FieldStyles';

type OptionProps = { content: string; value: string };

interface SelectProps extends React.ComponentPropsWithoutRef<'select'> {
  dropdownOptions: OptionProps[];
  def?: string;
}

export const Select = ({ dropdownOptions, def, ...props }: SelectProps) => {
  return (
    <StyledSelect {...props}>
      <option value="">{def}</option>
      {dropdownOptions.map(({ content, value }) => (
        <option key={value} value={value}>
          {content}
        </option>
      ))}
    </StyledSelect>
  );
};

Select.displayName = 'Field.Select';

Select.propTypes = {
  dropdownOptions: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string,
      value: PropTypes.string
    })
  ),
  def: PropTypes.string
};

Select.defaultProps = {
  dropdownOptions: [],
  def: 'Select an option'
};
