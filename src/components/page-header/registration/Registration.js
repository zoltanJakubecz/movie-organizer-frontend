import React, { useState } from 'react';
import { Button } from 'antd';
import RegistrationModalForm from './RegistrationModalForm';

export default function Registration() {

  const [modalOpen, setModalOpen] = useState(false);

  const onSubmit = (values) => {
    console.log("Received values: ");
    console.log(values)
    const { username } = values;
    return username !== "user";
  }

  return (
    <div>
      <Button
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Register
      </Button>
      <RegistrationModalForm
        visible={modalOpen}
        onSubmit={onSubmit}
        onCancel={() => {
          setModalOpen(false);
        }}
      />
    </div>
  )
}
