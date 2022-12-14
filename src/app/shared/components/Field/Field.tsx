import React from 'react';
import { useUniqueId } from '../../hooks/useUniqueId';
import { FieldContext } from './FieldContext';
import { Label } from './Label';
import { Input } from './Input';
import { Select } from './Select';

interface FieldComposition {
  Label: typeof Label;
  Input: typeof Input;
  Select: typeof Select;
}

interface FieldProps {
  children: React.ReactNode;
}

export const Field: React.FC<FieldProps> & FieldComposition = ({ children }) => {
  const id = useUniqueId();

  return <FieldContext.Provider value={id}>{children}</FieldContext.Provider>;
};

Field.Label = Label;
Field.Input = Input;
Field.Select = Select;
