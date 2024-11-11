import {
  ChangeEvent,
  FormEvent,
  MouseEventHandler,
  useCallback,
  useState,
} from 'react';
import { useDispatch } from 'react-redux';
import { addCompany } from '../../store/companiesSlice.ts';
import Button from '../Button';
import Input from '../Input';
import { nanoid } from 'nanoid';
import styles from './Form.module.css';

export default function AddForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleChangeName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }, []);

  const handleChangeAddress = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setAddress(e.target.value);
    },
    [],
  );

  const handleAddCompany = () => {
    const newCompany = {
      id: nanoid(),
      name,
      address,
    };

    dispatch(addCompany(newCompany));

    setName('');
    setAddress('');
  };

  return (
    <form className={styles.form}>
      <Input
        type="text"
        name="name"
        value={name}
        placeholder="Название компании"
        onChange={handleChangeName}
      />
      <Input
        type="text"
        name="address"
        value={address}
        placeholder="Адрес"
        onChange={handleChangeAddress}
      />

      <Button type="submit" onClick={handleAddCompany} isDisabled={!name}>
        Добавить
      </Button>
    </form>
  );
}
