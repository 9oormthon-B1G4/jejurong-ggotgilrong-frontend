import { CustomOverlayMap, Map } from 'react-kakao-maps-sdk';
import StationMaker from './StationMaker';
import { useThemeContext } from 'src/hooks/useTheme';
import { useEffect, useRef } from 'react';

const MapView = () => {
  const { busLineData } = useThemeContext();
  const mapRef = useRef<kakao.maps.Map>(null);

  const mapBounds = () => {
    const bounds = new kakao.maps.LatLngBounds();
    busLineData.busStopMapResponses.forEach((item) => {
      bounds.extend(new kakao.maps.LatLng(item.latitude, item.longitude));
    });
    return bounds;
  };

  useEffect(() => {
    if (mapRef.current) {
      if (busLineData.busStopMapResponses.length > 0) {
        const bounds = mapBounds();
        mapRef.current.setBounds(bounds);
      }
    }
  }, [mapRef.current, busLineData.busStopMapResponses]);

  return (
    <div>
      <Map
        center={{ lat: 33.469843, lng: 126.484908 }}
        level={3}
        isPanto={true}
        style={{ width: '100%', height: 'calc(100vh - 350px)' }}
        ref={mapRef}
      >
        {busLineData.busStopMapResponses.map((item) => (
          <CustomOverlayMap
            key={item.name}
            position={{ lat: item.latitude, lng: item.longitude }}
          >
            <StationMaker stationName={item.name} count={item.guestBookCount} />
          </CustomOverlayMap>
        ))}
      </Map>
    </div>
  );
};

export default MapView;
