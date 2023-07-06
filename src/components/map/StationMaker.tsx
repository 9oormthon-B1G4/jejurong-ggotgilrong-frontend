import { styled } from 'styled-components';
import BusTitle from './BusTitle';

interface StationMarker {
  stationName: string;
  count: number;
}

const StationMaker = ({ stationName, count }: StationMarker) => {
  const getMakerImage = () => {
    if (count <= 3) {
      return 'icon/sprout.svg';
    } else if (count <= 6) {
      return 'icon/bud.svg';
    } else {
      return 'icon/flower.svg';
    }
  };

  return (
    <StationMarkerContainer>
      <img src={getMakerImage()} alt="flower" />
      <BusTitle stationName={stationName} />
    </StationMarkerContainer>
  );
};

export default StationMaker;

const StationMarkerContainer = styled.div`
  position: relative;
  text-align: center;

  & > img {
    width: 48px;
    height: 48px;
    z-index: 99;
  }
`;
