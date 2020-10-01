import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  h1 {
    color: #3d3d3d;
    font-weight: bold;
    font-size: 42px;
  }
`;

export const SearchBox = styled.form`
  margin-top: 80px;
  display: flex;

  input {
    flex: 1;
    padding: 16px;
    color: #3d3d3d;
    border-radius: 5px 0 0 5px;
    border: 0;

    &::placeholder {
      color: #d7d7d7;
    }
  }

  button {
    width: 240px;
    height: 60px;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    background: #04d361;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
`;

export const User = styled.div`
  height: 80px;
  padding: 16px;
  background-color: #fff;
  border-radius: 10px;

  & + div {
    margin-top: 16px;
  }
`;

export const UserBox = styled.div`
  height: 100vh;
  margin-top: 80px;
`;
