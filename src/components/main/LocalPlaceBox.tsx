import { styled } from 'styled-components';
import PlaceItem from './PlaceItem';

const arr = [
  {
    id: 1,
    title: '추천명1',
    desc: '안녕하세요 환영합니다',
    url: 'https://naver.com',
    src: 'https://via.placeholder.com/343x186',
  },
  {
    id: 2,
    title: '추천명2',
    desc: '안녕하세요 환영합니다',
    url: 'https://naver.com',
    src: 'https://via.placeholder.com/343x186',
  },
  {
    id: 3,
    title: '추천명3',
    desc: '안녕하세요 환영합니다',
    url: 'https://naver.com',
    src: 'https://via.placeholder.com/343x186',
  },
  {
    id: 4,
    title: '추천명4',
    desc: '안녕하세요 환영합니다',
    url: 'https://naver.com',
    src: 'https://via.placeholder.com/343x186',
  },
  {
    id: 5,
    title: '추천명5',
    desc: '안녕하세요 환영합니다',
    url: 'https://naver.com',
    src: 'https://via.placeholder.com/343x186',
  },
];

const LocalPlaceBox = () => {
  return (
    <LocalPlaceBoxContiner>
      <h1>이 근처 추천 장소</h1>
      <PlaceItemBox>
        {arr.map((item) => (
          <PlaceItem
            key={item.id}
            title={item.title}
            desc={item.desc}
            url={item.url}
            src={item.src}
          />
        ))}
      </PlaceItemBox>
    </LocalPlaceBoxContiner>
  );
};

export default LocalPlaceBox;

const LocalPlaceBoxContiner = styled.div`
  padding: 8px 16px 17px;

  & > h1 {
    color: var(--gray-900, #222);
    font-family: NanumSquare Neo OTF;
    font-size: 16px;
    font-style: normal;
    font-weight: 550;
    line-height: 22px;
  }
`;

const PlaceItemBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 17px;
  gap: 24px;
  overflow-y: scroll;
`;
