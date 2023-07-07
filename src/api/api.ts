import { axiosInstance } from './axiosInstance';

interface BusResponse {
  busStopId: number;
  name: string;
}

export interface LandingData {
  routeId: number;
  name: string;
  number: number;
  description: string;
  busStopResponses: BusResponse[];
}

export interface BusMapResponse {
  name: string;
  latitude: number;
  longitude: number;
  guestBookCount: number;
}

export interface GuestBookResponse {
  busStopId: number;
  busStopName: string;
  content: string;
}

export interface RecommendedPlaceResponse {
  image: string;
  name: string;
  address: string;
  description: string;
  url: string;
}

export interface BusLineData {
  busStopMapResponses: BusMapResponse[];
  guestBookPreviewResponses: GuestBookResponse[];
  recommendedPlaceResponses: RecommendedPlaceResponse[];
}

export const fetchLandingData = async () => {
  const res = await axiosInstance({
    method: 'get',
    url: '/api/routes',
  }).catch((e) => console.error(e));

  return res;
};

export const fetchGetBusLineData = async (routeId: number) => {
  const res = await axiosInstance({
    method: 'get',
    url: `/api/routes/${routeId}`,
  }).catch((e) => console.error(e));

  return res;
};
