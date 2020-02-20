import React, { useState, useRef } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { toast } from 'react-toastify';

import Input from '../../components/Form/input';

import api from '../../services/api';

import { Container } from './styles';

export default function Login({ history }) {
  const formRef = useRef(null);

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Digite um email válido')
          .required('O email é obrigatório'),
        password: Yup.string()
          .min(6, 'No mínimo 6 caracteres')
          .required('A senha é obrigatória')
      });

      await schema.validate(data, {
        abortEarly: false
      });

      const response = await api.post('/sessions', data);

      const { user } = response.data;

      if (user.admin !== true) {
        return toast.error('Não foi possível fazer login');
      }

      localStorage.setItem('user', user.admin);

      history.push('/trees');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      } else {
        toast.error('Não foi possível fazer login');
      }
    }
  }

  return (
    <Container>
      <p>Login</p>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <Input name='email' type='email' placeholder='Email' />
        <label htmlFor='password'>Senha</label>
        <Input name='password' type='password' placeholder='Senha' />

        <button type='submit'>Entrar</button>
      </Form>
    </Container>
  );
}
