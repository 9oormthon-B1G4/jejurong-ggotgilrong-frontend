import { Map } from 'react-kakao-maps-sdk';

const MapView = () => {
  return (
    <div>
      <Map
        center={{ lat: 33.4996213, lng: 126.5311884 }}
        level={3}
        isPanto={true}
        style={{ width: '100%', height: 'calc(100vh - 200px)' }}
      ></Map>
    </div>
  );
};

export default MapView;
