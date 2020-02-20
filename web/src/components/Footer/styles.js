import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 60px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  background: #445c3c;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: #fff;
  left: 0;
  bottom: 0;

  img {
    height: 45px;
    margin-right: 10px;
  }

  p {
    font-size: 20px;
    font-weight: bold;
    padding: 5px;
  }
`;
