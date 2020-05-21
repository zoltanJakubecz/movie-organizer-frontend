import React, { useState, useContext } from 'react';
import { Button } from 'antd';
import RegistrationModalForm from './RegistrationModalForm';
import { UserContext } from '../../../contexts/UserContext';

export default function Registration() {

  const [modalOpen, setModalOpen] = useState(false);
  const { register } = useContext(UserContext);

  const onSubmit = async values => {
    return await register({
      username: values.username,
      password: values.password
    });
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
        onCancel={form => {
          setModalOpen(false);
          form.resetFields();
        }}
      />
    </div>
  )
}
