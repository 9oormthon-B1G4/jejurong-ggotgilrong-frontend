import styled from 'styled-components';
import ThemeTab from './ThemeTab';
import { useThemeContext } from 'src/hooks/useTheme';

const ThemeBox = () => {
  const { landingData, activeTab, handleOnChangeTab } = useThemeContext();

  return (
    <ThemeBoxContainer>
      <SheetHeader>
        <h1>테마버스 {landingData.length}</h1>
      </SheetHeader>
      <ThemeItemBox
        onTouchMove={(e: React.TouchEvent<HTMLElement>) => e.stopPropagation()}
      >
        {landingData.map((item) => (
          <ThemeTab
            key={item.routeId}
            busNumber={item.number}
            isActive={activeTab === item.routeId}
            handleOnClick={() => handleOnChangeTab(item.routeId)}
          />
        ))}
      </ThemeItemBox>

      <ThemeInfoBox>
        <h2>릴렉스 버스</h2>
        <p>
          제주시의 카페에서 여유로운 아침을 맞고 저녁엔 삼양 검은 모래 해변
          데크를 따라 걷기 좋은 노선 입니다.
        </p>
      </ThemeInfoBox>
    </ThemeBoxContainer>
  );
};

export default ThemeBox;

const ThemeBoxContainer = styled.div`
  overflow-x: auto;
  padding-bottom: 24px;
`;

const SheetHeader = styled.div`
  display: flex;
  height: 24px;
  padding: 0px 16px;
  align-items: center;
  gap: 10px;
  align-self: stretch;

  & > h1 {
    padding-top: 3px;
    color: var(--gray-900, #222);
    font-family: 'Pretendard';
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
  }
`;

const ThemeItemBox = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 16px;
  width: 100%;
  height: 64px;
  overflow-x: scroll;
  overflow-y: hidden;

  -ms-overflow-style: none; /* 인터넷 익스플로러*/
  scrollbar-width: none; /* 파이어폭스*/

  &::-webkit-scrollbar {
    display: none; /*( 크롬, 사파리, 오페라, 엣지 ) 동작*/
  }
`;

const ThemeInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 16px 0px;

  & > h2 {
    color: var(--gray-900, #222);
    font-family: 'Pretendard';
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
  }

  & > p {
    color: var(--gray-700, #616161);
    font-family: 'Pretendard';
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
  }
`;
