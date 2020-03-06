import React, { useRef } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { toast } from 'react-toastify';

import api from '../../services/api';

import Input from '../../components/Form/input';
import Select from '../../components/Form/select';
import File from '../../components/Form/file';

import { Container } from './styles';

export default function FormView() {
  const formRef = useRef(null);
  var fileInput = new FormData();

  async function handleSubmit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório.'),
        species: Yup.string().required('A espécie é obrigatória.'),
        recommended: Yup.string()
          .ensure()
          .required('É necessário informar.'),
        forbidden: Yup.string()
          .ensure()
          .required('É necessário informar.'),
        wireless: Yup.string()
          .ensure()
          .required('É necessário informar.'),
        wired: Yup.string()
          .ensure()
          .required('É necessário informar.'),
        file: Yup.mixed().required('A imagem é obrigatória.')
      });

      await schema.validate(data, {
        abortEarly: false
      });

      const response = await api.post('/files', fileInput);

      const { id: avatar_id } = response.data;

      await api.post('/trees', { data, avatar_id });

      toast.success('Árvore cadastrada!');

      reset();
      fileInput = new FormData();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      } else {
        toast.error('Não foi possível cadastrar');
      }
    }
  }

  async function handleChange(e) {
    fileInput.append('file', e.target.files[0]);
  }

  return (
    <Container>
      <p>Cadastrar árvore</p>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <label htmlFor='name'>Nome</label>
        <Input name='name' type='text' placeholder='Ex: Goiabeira' />
        <label htmlFor='species'>Espécie</label>
        <Input name='species' type='text' placeholder='Ex: Psidium guajava' />
        <label htmlFor='recommended'>Recomendada</label>
        <Select name='recommended' placeholder='Escolher' />
        <label htmlFor='forbidden'>Proibida</label>
        <Select name='forbidden' placeholder='Escolher' />
        <label htmlFor='wireless'>Sem fios/cabos</label>
        <Select name='wireless' placeholder='Escolher' />
        <label htmlFor='wired'>Com fios/cabos</label>
        <Select name='wired' placeholder='Escolher' />
        <label htmlFor='quadrant'>Árvore do quadrante leste-norte</label>
        <Select name='quadrant' placeholder='Escolher' />
        <label htmlFor='avatar'>Enviar imagem</label>
        {/* <input
          type='file'
          name='file'
          id='avatar'
          accept='image/*'
          onChange={handleChange}
        /> */}
        <File
          type='file'
          name='file'
          id='avatar'
          accept='image/*'
          onChange={handleChange}
        />

        {/* {fileError && (
          <span style={{ color: '#f00', marginBottom: 10 }}>{fileError}</span>
        )} */}

        <button type='submit'>Cadastrar</button>
      </Form>
    </Container>
  );
}
