import { ChangeEvent, memo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleSelectId } from '../../../store/selectedCompaniesSlice.ts';
import { removeCompany, updateCompany } from '../../../store/companiesSlice.ts';
import Button from '../../Button';
import CheckboxCell from '../CheckboxCell';
import EditableCell from '../EditableCell';

interface Props {
  id: string;
  name: string;
  address: string;
  isSelected: boolean;
}

function CompanyRow(props: Props) {
  const { id, name, address, isSelected } = props;

  // если редактируемая строка может быть только одна, тогда состояние надо поднять выше и хранить в нём id редактируемой строки
  const [isEdit, setIsEdit] = useState(false);
  const [newValue, setNewValue] = useState({
    name: name,
    address: address,
  });
  const dispatch = useDispatch();

  const handleUpdateValue = (e: ChangeEvent<HTMLInputElement>) => {
    setNewValue({
      ...newValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckToggle = () => {
    dispatch(toggleSelectId(id));
  };

  const handleSaveCompany = () => {
    dispatch(updateCompany({ id, ...newValue }));
    setIsEdit(false);
  };

  const handleRemoveCompany = (id) => {
    dispatch(removeCompany(id));
  };

  return (
    <>
      <CheckboxCell checked={isSelected} onChange={handleCheckToggle} />

      <EditableCell
        name="name"
        value={newValue.name}
        edit={isEdit}
        onChange={handleUpdateValue}
      />

      <EditableCell
        name="address"
        value={newValue.address}
        edit={isEdit}
        onChange={handleUpdateValue}
      />

      <td>
        {isEdit ? (
          <Button onClick={handleSaveCompany}>Сохранить</Button>
        ) : (
          <Button onClick={() => setIsEdit(true)}>Редактировать</Button>
        )}
      </td>

      <td>
        <Button onClick={() => handleRemoveCompany(id)}>Удалить</Button>
      </td>
    </>
  );
}

export default memo(CompanyRow);
