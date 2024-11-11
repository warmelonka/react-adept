import { ChangeEvent, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  type: string;
  name?: string;
  value?: string;
  placeholder?: string;
  isChecked?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input(props: Props) {
  const { children, type, name, value, placeholder, isChecked, onChange } =
    props;

  return (
    <label>
      {children}
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        checked={isChecked}
        onChange={onChange}
      />
    </label>
  );
}
