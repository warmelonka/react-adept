import { ChangeEvent } from 'react';
import Input from '../../Input';

interface Props {
  name: string;
  value: string;
  edit: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function EditableCell(props: Props) {
  const { name, value, edit, onChange } = props;

  return (
    <td>
      {edit ? (
        <Input type="text" name={name} value={value} onChange={onChange} />
      ) : (
        <span>{value}</span>
      )}
    </td>
  );
}
