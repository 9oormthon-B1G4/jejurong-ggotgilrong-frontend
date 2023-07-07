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
    <SelectContainer>
      <SelectBox onChange={handleChangeSelectBox}>
        <option hidden={true} value="" disabled selected={true}>
          버스 정류장 선택하기
        </option>
        {busstops &&
          busstops?.map((el) => {
            return (
              <StationOption value={el.busStopId}>{el.name}</StationOption>
            );
          })}
      </SelectBox>
      <img
        role="presentation"
        src={import.meta.env.BASE_URL + './icon/select_arrow.svg'}
      />
    </SelectContainer>
  );
};

const SelectContainer = styled.div`
  position: relative;
  img {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translate(0, -50%);
    z-index: 100;
  }
`;

const SelectBox = styled.select`
  width: 300px;
  height: 48px;
  margin: 0 auto;
  padding: 0 16px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.gray_300};
  border-radius: 8px;

  display: flex;
  align-items: center;
  outline: none;

  font-family: 'Pretendard';
  font-size: 14px;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  &::-ms-expand {
    display: none;
  }
`;

const StationOption = styled.option``;
