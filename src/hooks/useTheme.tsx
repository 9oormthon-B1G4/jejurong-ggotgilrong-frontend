import { BusLineData, LandingData } from '@api/api';
import { createContext, useContext, useEffect, useState } from 'react';

const data = [
  {
    routeId: 1,
    name: '감성버스',
    number: 331,
    busStopResponses: [
      {
        busStopId: 1,
        name: '한라수목원[동]',
      },
      {
        busStopId: 2,
        name: '제주고등학교[동]',
      },
      {
        busStopId: 3,
        name: '한국방송통신대학',
      },
      {
        busStopId: 4,
        name: '한국병원 정류장',
      },
      {
        busStopId: 5,
        name: '제주시청',
      },
    ],
  },
  {
    routeId: 2,
    name: '감성버스',
    number: 331,
    busStopResponses: [
      {
        busStopId: 1,
        name: '한라수목원[동]',
      },
      {
        busStopId: 2,
        name: '제주고등학교[동]',
      },
      {
        busStopId: 3,
        name: '한국방송통신대학',
      },
      {
        busStopId: 4,
        name: '한국병원 정류장',
      },
      {
        busStopId: 5,
        name: '제주시청',
      },
    ],
  },
];

const busData = {
  busStopMapResponses: [
    {
      name: '한라수목원[동]',
      latitude: 33.4705,
      longitude: 126.4849,
      guestBookCount: 6,
    },
    {
      name: '제주고등학교[동]',
      latitude: 33.4748,
      longitude: 126.4841,
      guestBookCount: 2,
    },
    {
      name: '한국방송통신대학',
      latitude: 33.5789,
      longitude: 126.4659,
      guestBookCount: 1,
    },
    {
      name: '한국병원 정류장',
      latitude: 33.5036,
      longitude: 126.5148,
      guestBookCount: 1,
    },
    {
      name: '제주시청',
      latitude: 33.4997,
      longitude: 126.5299,
      guestBookCount: 0,
    },
  ],
  guestBookPreviewResponses: [
    {
      busStopId: 1,
      busStopName: '한라수목원[동]',
      content: '우리팀 파이팅!',
    },
    {
      busStopId: 1,
      busStopName: '한라수목원[동]',
      content: '개피곤 날리셔~',
    },
    {
      busStopId: 1,
      busStopName: '한라수목원[동]',
      content: '너무해',
    },
    {
      busStopId: 2,
      busStopName: '제주고등학교[동]',
      content: '안녕하세요, 반가워요! 제주도 짱짱',
    },
    {
      busStopId: 1,
      busStopName: '한라수목원[동]',
      content: '릴렉스되고 너무 좋음',
    },
  ],
  recommendedPlaceResponses: [
    {
      image: 'test_img.png',
      name: '레이지 커피',
      address: '제주 제주시 서광로 11길 14',
      description: '느긋하고 게으르고 여유로운 공간을 꿈꿉니다. 레이지하게!',
      url: 'https://place.map.kakao.com/355557993',
    },
    {
      image: 'test_img.png',
      name: '쏘해피',
      address: '제주시 삼도일동 526 - 3',
      description: '오늘 하루 난 S O H A P P Y',
      url: 'https://place.map.kakao.com/2106909178',
    },
    {
      image: 'test_img.png',
      name: '무상찻집',
      address: '제주시 서광로 5길 10',
      description: '낡은 것을 좋아하는 생각 없는 찻집',
      url: 'https://place.map.kakao.com/1575289135',
    },
    {
      image: 'test_img.png',
      name: '전농로 왕벚꽃거리',
      address: '제주 전농로',
      description: '매년 봄마다 찾아오는 선물',
      url: 'https://place.map.kakao.com/295036758',
    },
    {
      image: 'test_img.png',
      name: '제주 기적의 도서관',
      address: '서귀포시 일주동로 8593',
      description: '어린이들을 위한 공간 "제주 기적의 도서관',
      url: 'https://place.map.kakao.com/8067671',
    },
    {
      image: 'test_img.png',
      name: '잇마이피자',
      address: '제주시 중앙로 253',
      description: '제주시에서 제일 핫한 피자집!',
      url: 'https://place.map.kakao.com/27818704',
    },
    {
      image: 'test_img.png',
      name: '바 대담',
      address: '제주시 신설로 6길 23',
      description: '다양한 몰트들을 저렴한 가격에 접할 수 있는 곳',
      url: 'https://place.map.kakao.com/1001890488',
    },
  ],
};

interface ThemeContextValueProps {
  landingData: LandingData[];
  activeTab: number;
  handleOnChangeTab: (arg: number) => void;
  busLineData: BusLineData;
}

export const ThemeContext = createContext<ThemeContextValueProps | null>(null);

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [landingData, setLandingData] = useState<LandingData[]>([]);
  const [activeTab, setActivetab] = useState<number>(0);
  const [busLineData, setBusLineData] = useState<BusLineData>({
    busStopMapResponses: [],
    guestBookPreviewResponses: [],
    recommendedPlaceResponses: [],
  });

  const handleOnChangeTab = (id: number) => {
    setActivetab(id);
    settingBusData(id);
  };

  const settingBusData = async (id: number) => {
    // const res = await fetchGetBusLineData(id);
    // if (res) {
    //   setLandingData(res.data);
    // }
    console.log(id);
    setBusLineData(busData);
  };

  useEffect(() => {
    if (landingData.length > 0) {
      setActivetab(landingData[0].routeId);
      settingBusData(landingData[0].routeId);
    }
  }, [landingData]);

  useEffect(() => {
    (async () => {
      // const res = await fetchLandingData();
      // if (res) setLandingData(res.data);
      setLandingData(data);
    })();
  }, []);

  const contextValue = {
    landingData,
    activeTab,
    handleOnChangeTab,
    busLineData,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('not found ThemeContext');
  }

  return context;
};
