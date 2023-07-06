import styled from 'styled-components';
import { BusStop } from '@pages/Guestbook';

interface propsType {
  setSelectedStation: React.Dispatch<React.SetStateAction<number>>;
  busstops: BusStop[];
}
export const StationSelect = ({ setSelectedStation, busstops }: propsType) => {
  const handleChangeSelectBox = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStation(Number(e.currentTarget.value));
  };
  return (
    <SelectBox onChange={handleChangeSelectBox}>
      {busstops &&
        busstops?.map((el) => {
          return <StationOption value={el.busStopId}>{el.name}</StationOption>;
        })}
    </SelectBox>
  );
};

const SelectBox = styled.select`
  width: 300px;
  height: 48px;
  margin: 0 auto;
  padding: 0 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray_300};
  border-radius: 8px;

  display: flex;
  align-items: center;
  outline: none;

  font-family: 'Pretendard';
  font-size: 14px;
`;

const StationOption = styled.option``;
