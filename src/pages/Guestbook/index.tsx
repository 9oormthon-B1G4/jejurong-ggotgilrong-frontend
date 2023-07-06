import { Header } from '@components/guestbook/Header';
import { Stations } from '@components/guestbook/Stations';

import { Books } from '@components/guestbook/Books';

export const GuestBookPage = () => {
  return (
    <>
      <Header />
      <Stations />
      <Books />
    </>
  );
};
