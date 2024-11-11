import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useVirtualizer } from '@tanstack/react-virtual';
import { RootState } from '../../store';
import { removeSelectedCompanies } from '../../store/companiesSlice.ts';
import { clearSelectionAll } from '../../store/selectedCompaniesSlice.ts';
import CompanyRow from './CompanyRow';
import SelectAllCell from './SelectAllCell';
import Button from '../Button';
import styles from './Table.module.css';

export default function Table() {
  const companies = useSelector((state: RootState) => state.companies);
  const selectedIds = useSelector((state: RootState) => state.selection);
  const dispatch = useDispatch();
  const parentRef = useRef(null);

  const handleDeleteSelected = () => {
    dispatch(removeSelectedCompanies(selectedIds));
    dispatch(clearSelectionAll());
  };

  const virtualizer = useVirtualizer({
    count: companies.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 50,
  });

  return (
    <div ref={parentRef} className={styles.wrap}>
      <div
        style={{
          height: `${virtualizer.getTotalSize()}px`,
        }}
      >
        <Button type="button" onClick={handleDeleteSelected}>
          Удалить выбранное
        </Button>

        <table>
          <caption>Список компаний</caption>

          <thead>
            <tr>
              <SelectAllCell />
              <th>Название компании</th>
              <th>Адрес</th>
            </tr>
          </thead>

          <tbody>
            {virtualizer.getVirtualItems().map((virtualRow, index) => {
              const row = companies[virtualRow.index];
              const { id, address, name } = row;
              const isSelected = Boolean(selectedIds[id]);
              const verticalOffset = virtualRow.start - index * virtualRow.size;

              return (
                <tr
                  key={id}
                  style={{
                    backgroundColor: isSelected ? 'pink' : '',
                    height: `${virtualRow.size}px`,
                    transform: `translateY(${verticalOffset}px)`,
                  }}
                >
                  <CompanyRow
                    id={id}
                    name={name}
                    address={address}
                    isSelected={isSelected}
                  />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
