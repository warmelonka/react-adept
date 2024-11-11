import { useDispatch, useSelector } from 'react-redux';
import { toggleSelectAll } from '../../../store/selectedCompaniesSlice.ts';
import CheckboxCell from '../CheckboxCell';

export default function SelectAllCell() {
  const companies = useSelector((state) => state.companies);
  const selectedIds = useSelector((state) => state.selection);
  const lengthSelectedIds = Object.keys(selectedIds).length;
  const dispatch = useDispatch();

  const handleToggleAll = () => {
    dispatch(toggleSelectAll(companies.map((company) => company.id)));
  };

  return (
    <CheckboxCell
      checked={lengthSelectedIds === companies.length}
      onChange={handleToggleAll}
    >
      Выделить всё
    </CheckboxCell>
  );
}
