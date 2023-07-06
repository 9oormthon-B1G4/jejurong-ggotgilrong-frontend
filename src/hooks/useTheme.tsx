import { LandingData } from '@api/api';
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

interface ThemeContextValueProps {
  landingData: LandingData[];
  activeTab: number;
  handleOnChangeTab: (arg: number) => void;
}

export const ThemeContext = createContext<ThemeContextValueProps | null>(null);

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [landingData, setLandingData] = useState<LandingData[]>([]);
  const [activeTab, setActivetab] = useState<number>(0);

  const handleOnChangeTab = (id: number) => {
    setActivetab(id);
  };

  useEffect(() => {
    if (landingData.length > 0) {
      setActivetab(landingData[0].routeId);
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
