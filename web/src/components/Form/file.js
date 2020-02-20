import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useField } from '@unform/core';

export default function File({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  // const [preview, setPreview] = useState(defaultValue);

  // const handlePreview = useCallback(e => {
  //   const file = e.target.files?.[0];
  //   if (!file) {
  //     setPreview(null);
  //   }
  //   const previewURL = URL.createObjectURL(file);
  //   setPreview(previewURL);
  // }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'files[0]',
      clearValue(ref) {
        ref.value = '';
      },
      setValue(_, value) {}
    });
  }, [fieldName, registerField]);
  return (
    <>
      {/* {preview && <img src={preview} alt='Preview' width='100' />} */}
      <input ref={inputRef} {...rest} />
      {error && (
        <span style={{ color: '#f00', marginBottom: 10 }}>{error}</span>
      )}
    </>
  );
}
