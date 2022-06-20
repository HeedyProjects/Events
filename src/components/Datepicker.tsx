import React, {useState} from 'react';
import {Button} from 'react-native';
import DatePicker from 'react-native-date-picker';

export default function CustomDatePicker() {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button title="ДД/ММ/ГГ" onPress={() => setOpen(true)} />
      <DatePicker
        modal
        open={open}
        date={date}
        mode="date"
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
}
