import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import QuestBookItem from './QuestBookItem';

const arr = [
  {
    contents:
      '커피맛집, 인생 커피를 찾았어요요요요요요요.1231231231231312312312xs',
    station: '어디서나 정류장',
  },
  {
    contents:
      '커피맛집, 인생 커피를 찾았어요요요요요요요.1231231231231312312312xs',
    station: '어디서나 정류장',
  },
  {
    contents:
      '커피맛집, 인생 커피를 찾았어요요요요요요요.1231231231231312312312xs',
    station: '어디서나 정류장',
  },
  {
    contents:
      '커피맛집, 인생 커피를 찾았어요요요요요요요.1231231231231312312312xs',
    station: '어디서나 정류장',
  },
  {
    contents:
      '커피맛집, 인생 커피를 찾았어요요요요요요요.1231231231231312312312xs',
    station: '어디서나 정류장',
  },
];

const QuestBookBox = ({ id }: { id: number }) => {
  const navigate = useNavigate();

  const handleMoveBook = (id: number) => {
    navigate(`/main/${id}/book`);
  };

  return (
    <QuestBookBoxCotainer>
      <QuestBookHeader>
        <h1>방명록</h1>{' '}
        <div onClick={() => handleMoveBook(id)}>
          <span>전체보기 </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M4.66675 2.33333L9.33341 7L4.66675 11.6667"
              stroke="#929292"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </QuestBookHeader>
      <QuestBookItemBox
        onTouchMove={(e: React.TouchEvent<HTMLElement>) => e.stopPropagation()}
      >
        {arr.map((item, idx) => (
          <QuestBookItem
            key={idx}
            idx={(idx + 1) % 3}
            contents={item.contents}
            station={item.station}
            onClick={() => handleMoveBook(1)}
          />
        ))}
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
    font-family: 'NanumSquare Neo OTF';
    font-size: 16px;
    font-style: normal;
    font-weight: 550;
    line-height: 22px;
  }

  & > div {
    cursor: pointer;
    display: flex;
    align-items: center;
    color: var(--gray-500, #929292);

    & > span {
      padding-top: 2px;
      font-family: 'Pretendard';
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 18px;
    }
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
`;
