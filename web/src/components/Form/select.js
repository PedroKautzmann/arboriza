import React, { useEffect, useRef } from 'react';
import ReactSelect from 'react-select';
import { useField } from '@unform/core';

const options = [
  { value: 1, label: 'Sim' },
  { value: 0, label: 'Não' }
];

const customStyles = {
  // menu: styles => ({
  //   ...styles,
  //   backgroundColor: '#000'
  // }),
  control: styles => ({
    ...styles,
    backgroundColor: '#eee',
    height: 40,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    border: '1px solid #eee',
    padding: 0
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      color: '#000',
      borderRadius: 4
    };
  }
};

export default function Select({ name, ...rest }) {
  const selectRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'state.value',
      getValue: ref => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map(option => option.value);
        } else {
          if (!ref.state.value) {
            return '';
          }
          return ref.state.value.value;
        }
      }
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <>
      <ReactSelect
        defaultValue={defaultValue}
        ref={selectRef}
        classNamePrefix='react-select'
        options={options}
        styles={customStyles}
        {...rest}
      />

      {error && (
        <span style={{ color: '#f00', marginBottom: 10 }}>{error}</span>
      )}
    </>
  );
}
