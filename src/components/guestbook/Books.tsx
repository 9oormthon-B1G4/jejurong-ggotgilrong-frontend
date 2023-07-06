import styled from 'styled-components';
import { WriteBtn } from '@components/guestbook/WriteBtn';
import { Post } from '@components/guestbook/Post';

interface propsType {
  setIsOpenWrite: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Books = ({ setIsOpenWrite }: propsType) => {
  return (
    <BooksContainer>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <WriteBtn setIsOpenWrite={setIsOpenWrite} />
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

  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: flex-start;
`;
