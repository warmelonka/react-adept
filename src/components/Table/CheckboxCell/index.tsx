import { ChangeEvent, ReactNode } from 'react';
import Input from '../../Input';

interface Props {
  children?: ReactNode;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function CheckboxCell(props: Props) {
  const { children, checked, onChange } = props;

  return (
    <td>
      <Input type="checkbox" isChecked={checked} onChange={onChange}>
        {children}
      </Input>
    </td>
  );
}
