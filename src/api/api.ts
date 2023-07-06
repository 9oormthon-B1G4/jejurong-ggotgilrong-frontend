import { axiosInstance } from './axiosInstance';

interface BusResponse {
  busStopId: number;
  name: string;
}

export interface LandingData {
  routeId: number;
  name: string;
  number: number;
  busStopResponses: BusResponse[];
}

export const fetchLandingData = async () => {
  const res = await axiosInstance({
    method: 'get',
    url: '/api/routes',
  }).catch((e) => console.error(e));

  return res;
};
