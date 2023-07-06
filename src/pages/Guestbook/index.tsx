import { useState } from 'react';
import { Header } from '@components/guestbook/Header';
import { Stations } from '@components/guestbook/Stations';
import { Books } from '@components/guestbook/Books';
import { WriteModal } from '@components/guestbook/WriteModal';

export const GuestBookPage = () => {
  const [isOpenWrite, setIsOpenWrite] = useState(false);
  return (
    <>
      <Header />
      <Stations />
      <Books setIsOpenWrite={setIsOpenWrite} />
      <WriteModal isOpen={isOpenWrite} setIsOpen={setIsOpenWrite} />
    </>
  );
};
