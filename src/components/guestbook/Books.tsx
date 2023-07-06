import styled from 'styled-components';
import { WriteBtn } from '@components/guestbook/WriteBtn';

export const Books = () => {
  return (
    <BooksContainer>
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <WriteBtn />
    </BooksContainer>
  );
};

const BooksContainer = styled.div`
  margin-top: 155px;
  position: relative;
  height: calc(100% - 160px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Box = styled.div`
  background-color: aliceblue;
  height: 200px;
  margin: 10px 0;
`;
