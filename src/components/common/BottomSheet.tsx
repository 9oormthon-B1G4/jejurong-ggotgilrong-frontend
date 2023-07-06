import { styled } from 'styled-components';

const BottomSheet = () => {
  return (
    <BottomSheetContainer>
      <TopBtnArea>
        <span></span>
      </TopBtnArea>

      <SheetBox>
        <SheetHeader>
          <h1>테마버스 6</h1>
        </SheetHeader>
        <ThemeItemBox>
          <li>버스 테마명</li>
          <li>버스 테마명</li>
          <li>버스 테마명</li>
          <li>버스 테마명</li>
          <li>버스 테마명</li>
        </ThemeItemBox>
      </SheetBox>

      <Divider />

      <QuestBookBox>
        <QuestBookHeader>
          <h1>방명록</h1> <span>전체보기 -</span>
        </QuestBookHeader>
        <ul>
          <li>커피맛집, 인생 커피를 찾았어요요요요요요요...</li>
          <li>커피맛집, 인생 커피를 찾았어요요요요요요요...</li>
          <li>커피맛집, 인생 커피를 찾았어요요요요요요요...</li>
          <li>커피맛집, 인생 커피를 찾았어요요요요요요요...</li>
          <li>커피맛집, 인생 커피를 찾았어요요요요요요요...</li>
        </ul>
      </QuestBookBox>
    </BottomSheetContainer>
  );
};

export default BottomSheet;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e0e0e0;
`;

const BottomSheetContainer = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  bottom: 0;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 30px 30px 0px 0px;
  background: var(--white, #fff);
  box-shadow: 0px -4px 8px 0px rgba(25, 31, 40, 0.08);
`;

const TopBtnArea = styled.div`
  height: 27px;
  padding-top: 8px;

  & > span {
    cursor: pointer;
    display: block;
    margin: 0 auto;
    height: 3px;
    width: 40px;
    border-radius: 1.5px;
    background-color: #d9d9d9;
  }
`;

const SheetBox = styled.div``;

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

const QuestBookBox = styled.div``;

const QuestBookHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 16px;

  & > h1 {
    color: var(--gray-900, #222);
    font-family: NanumSquare Neo OTF;
    font-size: 16px;
    font-style: normal;
    font-weight: 550;
    line-height: 22px;
  }

  & > span {
    cursor: pointer;
    color: var(--gray-500, #929292);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
  }
`;

const QuestBookItemBox = styled.ul``;
