import styled from 'styled-components';
import { useState } from 'react';

import { WriteBtn } from '@components/guestbook/WriteBtn';
import { Post } from '@components/guestbook/Post';
import { DetailModal } from '@components/guestbook/DetailModal';

import { Book } from '@pages/Guestbook';

interface propsType {
  setIsOpenWrite: React.Dispatch<React.SetStateAction<boolean>>;
  books: Book[];
}

export const Books = ({ setIsOpenWrite, books }: propsType) => {
  const [isOpenDetailModal, setIsOpenDetailModal] = useState<boolean>(false);
  const [idx, setIdx] = useState<number>(0);

  return (
    <>
      <DetailModal
        isOpen={isOpenDetailModal}
        setIsOpen={setIsOpenDetailModal}
        comment={books[idx]?.content}
        date={books[idx]?.createdDate}
        nickname={books[idx]?.author}
        idx={idx}
      />
      <BooksContainer>
        {books.map((el, idx) => {
          return (
            <Post
              key={idx}
              setIsOpenDetailModal={setIsOpenDetailModal}
              setIdx={setIdx}
              idx={idx}
              comment={el.content}
              date={el.createdDate}
              nickname={el.author}
            />
          );
        })}

        <WriteBtn setIsOpenWrite={setIsOpenWrite} />
      </BooksContainer>
    </>
  );
};

const BooksContainer = styled.div`
  margin-top: 120px;
  padding: 2%;

  position: relative;
  height: calc(100% - 120px);

  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: flex-start;
`;
