import styled from 'styled-components';
import ThemeTab from './ThemeTab';
import { useState } from 'react';

const arr = [
  { id: 1, title: '바다버스' },
  { id: 2, title: '감성버스' },
  { id: 3, title: '예븐버스' },
  { id: 4, title: '성산버스' },
  { id: 5, title: '에월버스' },
  { id: 6, title: '에월버스' },
  { id: 7, title: '에월버스' },
  { id: 8, title: '에월버스' },
];

const ThemeBox = () => {
  const [activeTab, setActivetab] = useState<number>(arr[0].id);

  const handleOnChangeTab = (id: number) => {
    setActivetab(id);
  };

  return (
    <ThemeBoxContainer>
      <SheetHeader>
        <h1>테마버스 6</h1>
      </SheetHeader>
      <ThemeItemBox
        onTouchMove={(e: React.TouchEvent<HTMLElement>) => e.stopPropagation()}
      >
        {arr.map((item) => (
          <ThemeTab
            key={item.id}
            title={item.title}
            isActive={activeTab === item.id}
            handleOnClick={() => handleOnChangeTab(item.id)}
          />
        ))}
      </ThemeItemBox>
    </ThemeBoxContainer>
  );
};

export default ThemeBox;

const ThemeBoxContainer = styled.div`
  overflow-x: auto;
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
    font-family: NanumSquare Neo OTF;
    font-size: 16px;
    font-style: normal;
    font-weight: 550;
    line-height: 22px;
  }
`;

const ThemeItemBox = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 16px;
  height: 40px;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;

  -ms-overflow-style: none; /* 인터넷 익스플로러*/
  scrollbar-width: none; /* 파이어폭스*/

  &::-webkit-scrollbar {
    display: none; /*( 크롬, 사파리, 오페라, 엣지 ) 동작*/
  }
`;
