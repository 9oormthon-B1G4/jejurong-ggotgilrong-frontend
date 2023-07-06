import styled from 'styled-components';
import { useState } from 'react';

import { WriteBtn } from '@components/guestbook/WriteBtn';
import { Post } from '@components/guestbook/Post';
import { DetailModal } from '@components/guestbook/DetailModal';

interface propsType {
  setIsOpenWrite: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Books = ({ setIsOpenWrite }: propsType) => {
  const [isOpenDetailModal, setIsOpenDetailModal] = useState<boolean>(false);
  const [idx, setIdx] = useState<number>(0);

  return (
    <>
      <DetailModal
        isOpen={isOpenDetailModal}
        setIsOpen={setIsOpenDetailModal}
        comment="커피맛집, 인생 커피를 찾았어요. 커피맛집, 인생 커피를
            찾았어요.커피맛집, 인생 커피를 찾았어요.커피맛집, 인생 커피를
            찾았어요.커피맛집, 인생 커피를 찾았어요.커피맛집, 인생 커피를
            찾았어요."
        date="2023.07.07"
        nickname="멘도롱또똣"
        idx={idx}
      />
      <BooksContainer>
        <Post
          setIsOpenDetailModal={setIsOpenDetailModal}
          setIdx={setIdx}
          idx={0}
        />
        <Post
          setIsOpenDetailModal={setIsOpenDetailModal}
          setIdx={setIdx}
          idx={1}
        />
        <Post
          setIsOpenDetailModal={setIsOpenDetailModal}
          setIdx={setIdx}
          idx={2}
        />
        <Post
          setIsOpenDetailModal={setIsOpenDetailModal}
          setIdx={setIdx}
          idx={3}
        />
        <Post
          setIsOpenDetailModal={setIsOpenDetailModal}
          setIdx={setIdx}
          idx={4}
        />
        <Post
          setIsOpenDetailModal={setIsOpenDetailModal}
          setIdx={setIdx}
          idx={5}
        />

        <WriteBtn setIsOpenWrite={setIsOpenWrite} />
      </BooksContainer>
    </>
  );
};

const BooksContainer = styled.div`
  margin-top: 120px;
  padding: 2%;

  position: relative;
  height: calc(100% - 160px);

  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: flex-start;
`;
