import styled from 'styled-components';
import { BusStop } from '@pages/Guestbook';

interface propsType {
  selectedBusStop: number;
  setSelectedBusStop: React.Dispatch<React.SetStateAction<number>>;
  stationList: BusStop[];
}

export const Stations = ({
  selectedBusStop,
  setSelectedBusStop,
  stationList,
}: propsType) => {
  const handleClickChip = (busStopId: number) => {
    setSelectedBusStop(busStopId);
  };

  return (
    <StationsContainer>
      <StationChip
        className={selectedBusStop === 0 ? 'selected' : ''}
        onClick={() => {
          handleClickChip(0);
        }}
      >
        전체
      </StationChip>
      {stationList?.map((el) => {
        return (
          <StationChip
            key={el.busStopId}
            className={selectedBusStop === el.busStopId ? 'selected' : ''}
            onClick={() => {
              handleClickChip(el.busStopId);
            }}
          >
            {el.name}
          </StationChip>
        );
      })}
    </StationsContainer>
  );
};

const StationsContainer = styled.div`
  border: 1px solid transparent;

  width: 100%;
  max-width: 460px;
  height: 62px;
  padding: 16px 0;
  padding-left: 16px;
  display: flex;

  overflow: auto;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none;
  }

  position: fixed;
  top: 60px;

  background-color: white;
`;

const StationChip = styled.div`
  height: 28px;
  padding: 0 12px;

  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.gray_300};

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.orange_400};
  }

  &.selected {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.orange_400};
    border-radius: 116px;

    text-align: center;
  }
`;
