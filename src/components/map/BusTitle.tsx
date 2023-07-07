import { styled } from 'styled-components';

const BusTitle = ({ stationName }: { stationName: string }) => {
  return (
    <BusTitleContainer>
      <img src="icon/bus.svg" />
      {stationName}
    </BusTitleContainer>
  );
};

export default BusTitle;

const BusTitleContainer = styled.span`
  display: flex;
  padding: 6px 10px;
  align-items: center;
  width: fit-content;
  gap: 4px;
  border-radius: 20px;
  background: var(--white, #fff);
  box-shadow: 0px 1px 1px 0px rgba(25, 31, 40, 0.25);

  color: var(--gray-900, #222);
  text-align: center;
  font-family: 'Pretendard';
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  & > img {
    width: 16px;
    height: 16px;
  }
`;
