import { styled } from 'styled-components';

interface QuestBookItemProps {
  contents: string;
  station: string;
  onClick: () => void;
  idx: number;
}

const QuestBookItem = ({
  contents,
  station,
  onClick,
  idx,
}: QuestBookItemProps) => {
  const topIcon = `icon/sm_post_${idx + 1}_1.svg`;
  const bottomIcon = `icon/sm_post_${idx + 1}_2.svg`;

  return (
    <QuestBookItemContainer
      onClick={onClick}
      $bottomIcon={bottomIcon}
      $topIcon={topIcon}
    >
      <p>{contents}</p>
      <span>{station}</span>
    </QuestBookItemContainer>
  );
};

export default QuestBookItem;

const QuestBookItemContainer = styled.li<{
  $topIcon: string;
  $bottomIcon: string;
}>`
  display: flex;
  align-items: center;
  position: relative;
  padding: 16px;
  min-width: 106px;
  height: 106px;
  border-radius: 10px;
  background: var(--gray-100, #f5f5f5);

  & > p {
    text-overflow: ellipsis;
    overflow: hidden;
    z-index: 99;

    color: var(--gray-900, #222);
    font-family: 'Pretendard';
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

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
    background-image: ${({ $topIcon }) => `url(${$topIcon})`};
  }

  &::after {
    position: absolute;
    content: '';
    left: 8px;
    bottom: 8px;
    height: 24px;
    width: 24px;
    background-image: ${({ $bottomIcon }) => `url(${$bottomIcon})`};
  }

  & > span {
    position: absolute;
    right: 8px;
    bottom: 8px;
    width: 60px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    color: var(--gray-500, #9e9e9e);
    font-family: 'Pretendard';
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    z-index: 99;
  }
`;
