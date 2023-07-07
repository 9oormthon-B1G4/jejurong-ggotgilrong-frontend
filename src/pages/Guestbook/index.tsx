import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { axiosInstance } from '@api/axiosInstance';

import { Header } from '@components/guestbook/Header';
import { Stations } from '@components/guestbook/Stations';
import { Books } from '@components/guestbook/Books';
import { WriteModal } from '@components/guestbook/WriteModal';

export interface Book {
  author: string;
  content: string;
  createdDate: string;
}

interface Route {
  routeId: number;
  name: string;
  number: string;
  busStopResponses: BusStop[];
}

export interface BusStop {
  busStopId: number;
  name: string;
}

export const GuestBookPage = () => {
  const { routeId } = useParams();
  //정류장 정보
  const [route, setRoute] = useState<Route>();
  //방명록 array
  const [books, setBooks] = useState<Book[]>([]);
  //작성하기 모달 open 여부
  const [isOpenWrite, setIsOpenWrite] = useState(false);
  //선택한 정류장 아이디
  const [selectedBusStop, setSelectedBusStop] = useState<number>(0);

  const getRoutesInfo = () => {
    axiosInstance
      .get('/api/routes')
      .then((res) => {
        res.data &&
          res?.data?.map((el: Route) => {
            if (el.routeId === Number(routeId)) {
              setRoute(el);
            }
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //노선별 방명록 조회
  const getGuestBooks = () => {
    axiosInstance
      .get(`/api/guest-books/routes/${routeId}`)
      .then((res) => {
        setBooks(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //특정 정류소 방명록 조회
  const getBusStopGuestBooks = () => {
    axiosInstance
      .get(`/api/guest-books/bus-stops/${selectedBusStop}`)
      .then((res) => {
        setBooks(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //전체 노선 및 정류장 정보 가져오기
  useEffect(() => {
    getRoutesInfo();
  }, []);

  useEffect(() => {
    if (selectedBusStop === 0) {
      getGuestBooks();
    } else {
      getBusStopGuestBooks();
    }
  }, [selectedBusStop]);

  return (
    <>
      <Header name={route?.name || ''} />
      <Stations
        selectedBusStop={selectedBusStop}
        setSelectedBusStop={setSelectedBusStop}
        stationList={route?.busStopResponses || []}
      />
      <Books setIsOpenWrite={setIsOpenWrite} books={books} />
      <WriteModal
        isOpen={isOpenWrite}
        setIsOpen={setIsOpenWrite}
        getGuestBooks={getGuestBooks}
        busstops={route?.busStopResponses || []}
        getBusStopGuestBooks={getBusStopGuestBooks}
      />
    </>
  );
};
