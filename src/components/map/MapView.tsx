import { CustomOverlayMap, Map } from 'react-kakao-maps-sdk';
import { styled } from 'styled-components';
import StationMaker from './StationMaker';

const arr = [
  {
    stationName: '정류장',
    lat: 33.469843,
    lng: 126.484908,
    count: 3,
  },
  {
    stationName: '정류장2',
    lat: 33.474333,
    lng: 126.483917,
    count: 5,
  },
  {
    stationName: '정류장3',
    lat: 33.476389,
    lng: 126.482141,
    count: 9,
  },
  {
    stationName: '정류장4',
    lat: 33.476401,
    lng: 126.479759,
    count: 1,
  },
  {
    stationName: '정류장5',
    lat: 33.478329,
    lng: 126.475118,
    count: 8,
  },
  {
    stationName: '정류장6',
    lat: 33.4823,
    lng: 126.470383,
    count: 10,
  },
];

const MapView = () => {
  return (
    <div>
      <Map
        center={{ lat: 33.469843, lng: 126.484908 }}
        level={3}
        isPanto={true}
        style={{ width: '100%', height: 'calc(100vh - 350px)' }}
      >
        {arr.map((item) => (
          <CustomOverlayMap
            key={item.stationName}
            position={{ lat: item.lat, lng: item.lng }}
          >
            <StationMaker stationName={item.stationName} count={item.count} />
          </CustomOverlayMap>
        ))}
      </Map>
    </div>
  );
};

export default MapView;
