import { css, styled } from 'styled-components';

interface ThemeProps {
  title: string;
  isActive: boolean;
  handleOnClick: () => void;
}

const ThemeTab = ({ title, isActive, handleOnClick }: ThemeProps) => {
  return (
    <Tab onClick={handleOnClick} $isActive={isActive}>
      <div>
        {isActive ? (
          <img src="icon/bus_color_icon.svg" alt="버스" />
        ) : (
          <img src="icon/bus_icon.svg" alt="버스" />
        )}
        <span>311</span>
      </div>
      {title}
    </Tab>
  );
};

export default ThemeTab;

const Tab = styled.li<{ $isActive: boolean }>`
  cursor: pointer;
  display: flex;
  position: relative;
  gap: 4px;

  white-space: nowrap;
  color: var(--gray-300, #c4c4c4);
  font-family: NanumSquare Neo OTF;
  font-size: 16px;
  font-style: normal;
  font-weight: 550;
  line-height: 22px;

  & > div {
    position: relative;

    & > span {
      position: absolute;
      top: -3px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 9px;
      font-weight: 600;
      color: #000;
    }
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      color: var(--orange-400, #ff7638);

      &::after {
        position: absolute;
        content: '';
        bottom: -9px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: var(--orange-400, #ff7638);
      }
    `}

  &:first-child {
    position: relative;
    margin-left: 16px;
  }

  &:last-child {
    margin-right: 16px;
  }
`;
