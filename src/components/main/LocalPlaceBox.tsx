import { styled } from 'styled-components';
import PlaceItem from './PlaceItem';
import { RecommendedPlaceResponse } from '@api/api';

const LocalPlaceBox = ({
  placeData,
}: {
  placeData: RecommendedPlaceResponse[];
}) => {
  return (
    <LocalPlaceBoxContiner>
      <h1>이 근처 추천 장소</h1>
      <PlaceItemBox
        onTouchMove={(e: React.TouchEvent<HTMLElement>) => e.stopPropagation()}
      >
        {placeData.map((item, idx) => (
          <PlaceItem
            key={idx}
            title={item.name}
            desc={item.description}
            url={item.url}
            src={item.image}
            stationName={item.busStopName}
          />
        ))}
      </PlaceItemBox>
    </LocalPlaceBoxContiner>
  );
};

export default LocalPlaceBox;

const LocalPlaceBoxContiner = styled.div`
  padding: 20px 16px 17px;

  & > h1 {
    color: var(--gray-900, #222);
    font-family: 'Pretendard';
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
  }
`;

const PlaceItemBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 17px;
  padding-bottom: 100px;
  gap: 16px;
`;
