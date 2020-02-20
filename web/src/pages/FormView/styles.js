import styled from 'styled-components';
import { darken } from 'polished';
import ReactSelect from 'react-select';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* max-width: 315px; */
  margin-top: 20px;

  p {
    font-size: 24px;
    font-weight: bold;
    color: #445c3c;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 10px;

    input {
      border: 1px solid #eee;
      border-radius: 4px;
      height: 40px;
      padding: 0 15px;
      margin: 0 0 10px;
      background: #eee;
    }

    label {
      align-self: flex-start;
      margin-bottom: 5px;
      color: #333;
      font-size: 14px;
    }

    select {
      border: 1px solid #eee;
      height: 44px;
      padding: 0 15px;
      margin: 0 0 10px;
      background: #eee;
    }

    button {
      background: #445c3c;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: center;
      padding: 12px;
      font-size: 14px;
      font-weight: bold;
      transition: background 0.2s;
      margin-top: 5px;

      &:hover {
        background: ${darken(0.03, '#445c3c')};
      }
    }
  }
`;
