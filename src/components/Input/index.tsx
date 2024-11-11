import { ChangeEvent, memo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  type: string;
  name?: string;
  value?: string;
  placeholder?: string;
  isChecked?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Input(props: Props) {
  const { children, type, name, value, placeholder, isChecked, onChange } =
    props;
  const isCheckboxOrRadio = type === 'checkbox' || type === 'radio';
  const valueByType = isCheckboxOrRadio
    ? { checked: Boolean(isChecked) }
    : { value };

  return (
    <label>
      {children}
      <input
        type={type}
        name={name}
        {...valueByType}
        placeholder={placeholder}
        onChange={onChange}
      />
    </label>
  );
}

export default memo(Input);
