import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { axiosInstance } from '@api/axiosInstance';

import { Header } from '@components/guestbook/Header';
import { Stations } from '@components/guestbook/Stations';
import { Books } from '@components/guestbook/Books';
import { WriteModal } from '@components/guestbook/WriteModal';

const dummy = [
  {
    author: '익명의 사용자',
    content: '안녕하세요, 반가워요! 제주도 짱짱',
    createdDate: '2023-07-07',
  },
  {
    author: '익명의 사용자',
    content: '본문9',
    createdDate: '2023-07-07',
  },
];

export interface Book {
  author: string;
  content: string;
  createdDate: string;
}

export const GuestBookPage = () => {
  const { routeId } = useParams();
  const [books, setBooks] = useState<Book[]>([]);
  const [isOpenWrite, setIsOpenWrite] = useState(false);

  const getGuestBooks = () => {
    axiosInstance
      .get(`/api/guest-books/routes/${routeId}`)
      .then((res) => {
        console.log(res.data);
        setBooks(dummy);
      })
      .catch((error) => {
        console.error(error);
        setBooks(dummy);
      });
  };

  useEffect(() => {
    getGuestBooks();
  }, [routeId]);

  return (
    <>
      <Header />
      <Stations />
      <Books setIsOpenWrite={setIsOpenWrite} books={books} />
      <WriteModal isOpen={isOpenWrite} setIsOpen={setIsOpenWrite} />
    </>
  );
};
