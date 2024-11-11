import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCompany } from '../../store/companiesSlice.ts';
import Button from '../Button';
import Input from '../Input';
import { nanoid } from 'nanoid';
import styles from './Form.module.css';

export default function AddForm() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: '',
    address: '',
  });

  const handleChangeForm = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddCompany = (e) => {
    e.preventDefault();

    const newCompany = {
      id: nanoid(),
      ...form,
    };

    dispatch(addCompany(newCompany));

    setForm({
      name: '',
      address: '',
    });
  };

  return (
    <form className={styles.form}>
      <Input
        type="text"
        name="name"
        value={form.name}
        placeholder="Название компании"
        onChange={handleChangeForm}
      />
      <Input
        type="text"
        name="address"
        value={form.address}
        placeholder="Адрес"
        onChange={handleChangeForm}
      />

      <Button onClick={handleAddCompany} isDisabled={!form.name}>
        Добавить
      </Button>
    </form>
  );
}
