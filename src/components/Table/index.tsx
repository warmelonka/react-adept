import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Company } from '../../types';
import { removeSelectedCompanies } from '../../store/companiesSlice.ts';
import { clearSelection } from '../../store/selectedCompaniesSlice.ts';
import CompanyRow from './CompanyRow';
import SelectAll from './SelectAll';
import Button from '../Button';
import styles from './Table.module.css';

export default function Table() {
  const companies = useSelector((state: RootState) => state.companies);
  const selectedIds = useSelector((state: RootState) => state.selection);
  const dispatch = useDispatch();

  const handleDeleteSelected = () => {
    dispatch(removeSelectedCompanies(selectedIds));
    dispatch(clearSelection());
  };

  return (
    <div>
      <Button onClick={handleDeleteSelected}>Удалить выбранное</Button>

      <table className={styles.table}>
        <caption>Список компаний</caption>

        <thead>
          <tr>
            <SelectAll />
            <th>Название компании</th>
            <th>Адрес</th>
          </tr>
        </thead>

        <tbody>
          {companies.map((company: Company) => {
            const { id, address, name } = company;
            const isSelected = selectedIds[id] !== undefined;

            return (
              <CompanyRow
                key={id}
                id={id}
                name={name}
                address={address}
                isSelected={isSelected}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
