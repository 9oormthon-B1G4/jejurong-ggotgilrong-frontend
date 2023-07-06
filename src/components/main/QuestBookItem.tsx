import { styled } from 'styled-components';

interface QuestBookItemProps {
  contents: string;
  station: string;
  onClick: () => void;
}

const QuestBookItem = ({ contents, station, onClick }: QuestBookItemProps) => {
  return (
    <QuestBookItemContainer onClick={onClick}>
      {contents}
      <span>{station}</span>
    </QuestBookItemContainer>
  );
};

export default QuestBookItem;

const QuestBookItemContainer = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  padding: 16px;
  min-width: 106px;
  height: 106px;
  border-radius: 10px;
  background: var(--gray-100, #f5f5f5);
  color: var(--gray-900, #222);

  font-family: Pretendard;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &:first-child {
    margin-left: 16px;
  }

  &:last-child {
    margin-right: 16px;
  }

  &::before {
    position: absolute;
    content: '';
    top: 8px;
    right: 8px;
    height: 24px;
    width: 24px;
    background-image: url('icon/bus_color_icon.svg');
  }

  &::after {
    position: absolute;
    content: '';
    left: 8px;
    bottom: 8px;
    height: 24px;
    width: 24px;
    background-image: url('icon/bus_color_icon.svg');
  }

  & > span {
    position: absolute;
    right: 8px;
    bottom: 8px;

    color: var(--gray-500, #9e9e9e);
    font-family: Pretendard;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    z-index: 99;
  }
`;
