import styled from 'styled-components';
import { useState } from 'react';

const stationList: String[] = [
  '전체',
  '정류장1',
  '정류장2',
  '정류장3',
  '정류장4',
  '정류장5',
  '정류장6',
];

export const Stations = () => {
  const [selectedIdx, setSelecteIdx] = useState<number>(0);

  const handleClickChip = (idx: number) => {
    setSelecteIdx(idx);
  };

  return (
    <StationsContainer>
      {stationList.map((el, idx) => {
        return (
          <StationChip
            key={idx}
            className={selectedIdx === idx ? 'selected' : ''}
            onClick={() => {
              handleClickChip(idx);
            }}
          >
            {el}
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

  position: absolute;
  top: 93px;

  background-color: white;
`;

const StationChip = styled.div`
  height: 28px;
  padding: 0 12px;

  font-family: 'NanumSquare';
  font-size: 14px;
  font-weight: 700;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.gray_300};

  &.selected {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.orange_400};
    border-radius: 116px;

    text-align: center;
  }

  &:hover {
    cursor: pointer;
  }
`;
