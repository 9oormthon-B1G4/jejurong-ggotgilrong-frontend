import { styled } from 'styled-components';

const QuestBookBox = () => {
  return (
    <QuestBookBoxCotainer>
      <QuestBookHeader>
        <h1>방명록</h1> <span>전체보기 -</span>
      </QuestBookHeader>
      <QuestBookItemBox
        onTouchMove={(e: React.TouchEvent<HTMLElement>) => e.stopPropagation()}
      >
        <li>커피맛집, 인생 커피를 찾았어요요요요요요요...</li>
        <li>커피맛집, 인생 커피를 찾았어요요요요요요요...</li>
        <li>커피맛집, 인생 커피를 찾았어요요요요요요요...</li>
        <li>커피맛집, 인생 커피를 찾았어요요요요요요요...</li>
        <li>커피맛집, 인생 커피를 찾았어요요요요요요요...</li>
      </QuestBookItemBox>
    </QuestBookBoxCotainer>
  );
};

export default QuestBookBox;

const QuestBookBoxCotainer = styled.div``;

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

const QuestBookItemBox = styled.ul`
  display: flex;
  padding: 0;
  margin-bottom: 40px;
  align-items: flex-start;
  gap: 8px;
  overflow-x: scroll;

  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
  &::-webkit-scrollbar {
    display: none; /* ( 크롬, 사파리, 오페라, 엣지 ) 동작 */
  }

  & li {
    padding: 16px;
    min-width: 106px;
    height: 106px;
    border-radius: 10px;
    background: var(--gray-100, #f5f5f5);

    color: var(--gray-900, #222);
    text-align: center;

    /* Text/xxs */
    font-family: Pretendard;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    &:first-child {
      margin-left: 16px;
    }

    &:last-child {
      margin-right: 16px;
    }
  }
`;
