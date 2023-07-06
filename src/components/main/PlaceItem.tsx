import BusTitle from '@components/map/BusTitle';
import { styled } from 'styled-components';

interface PlaceItemProps {
  title: string;
  desc: string;
  url: string;
  src: string;
  stationName: string;
}

const PlaceItem = ({ title, desc, url, src, stationName }: PlaceItemProps) => {
  const handleMove = () => {
    location.href = url;
  };

  return (
    <PlaceItemContainer onClick={handleMove}>
      <div className="wrapper">
        <img src={src} alt={title} />
      </div>
      <div className="info">
        <h2>{title}</h2>
        <p>{desc}</p>
        <BusTitle stationName={stationName} />
      </div>
    </PlaceItemContainer>
  );
};

export default PlaceItem;

const PlaceItemContainer = styled.div`
  cursor: pointer;
  position: relative;
  height: 100%;
  width: 100%;

  & .wrapper {
    overflow: hidden;
    border-radius: 10px;
    min-height: 228px;

    & > img {
      width: 100%;
      height: 100%;
      min-height: 228px;
      object-fit: cover;
    }
  }

  & .info {
    position: absolute;
    bottom: 16px;
    left: 16px;
    color: var(--white, #fff);
    font-family: 'Pretendard';
    font-style: normal;

    & > h2 {
      font-size: 18px;
      line-height: 24px;
      font-weight: 700;
      margin-bottom: 2px;
    }

    & > p {
      font-size: 14px;
      line-height: 18px;
      font-weight: 400;
      margin-bottom: 8px;
    }
  }
`;
