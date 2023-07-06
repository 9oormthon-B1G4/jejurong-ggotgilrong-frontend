import styled from 'styled-components';

const ThemeBox = () => {
  return (
    <ThemeBoxContainer>
      <SheetHeader>
        <h1>테마버스 6</h1>
      </SheetHeader>
      <ThemeItemBox
        onTouchMove={(e: React.TouchEvent<HTMLElement>) => e.stopPropagation()}
      >
        <li>감성 버스</li>
        <li>바다 버스</li>
        <li>한라산 버스</li>
        <li>에월 버스</li>
        <li>제주 버스</li>
      </ThemeItemBox>
    </ThemeBoxContainer>
  );
};

export default ThemeBox;

const ThemeBoxContainer = styled.div``;

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
  overflow-x: scroll;

  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
  &::-webkit-scrollbar {
    display: none; /* ( 크롬, 사파리, 오페라, 엣지 ) 동작 */
  }

  & li {
    cursor: pointer;
    white-space: nowrap;
    color: var(--gray-300, #c4c4c4);

    /* font-m-700 */
    font-family: NanumSquare Neo OTF;
    font-size: 16px;
    font-style: normal;
    font-weight: 550;
    line-height: 22px;

    &:first-child {
      position: relative;
      margin-left: 16px;
      color: var(--orange-400, #ff7638);

      &::after {
        position: absolute;
        content: '';
        bottom: -9px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: var(--orange-400, #ff7638);
      }
    }

    &:last-child {
      margin-right: 16px;
    }
  }
`;
