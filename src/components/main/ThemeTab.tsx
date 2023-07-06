import { css, styled } from 'styled-components';

interface ThemeProps {
  isActive: boolean;
  busNumber: number;
  handleOnClick: () => void;
}

const ThemeTab = ({ isActive, busNumber, handleOnClick }: ThemeProps) => {
  return (
    <Tab onClick={handleOnClick} $isActive={isActive}>
      {isActive ? (
        <img src="icon/bus_color_icon.svg" alt="버스" />
      ) : (
        <img src="icon/bus_icon.svg" alt="버스" />
      )}
      <span>{busNumber}</span>
    </Tab>
  );
};

export default ThemeTab;

const Tab = styled.li<{ $isActive: boolean }>`
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 54px;
  min-width: 54px;
  border-radius: 50%;
  gap: 26px;
  background: var(--gray-100, #f5f5f5);

  & > span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Pretendard';
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    color: var(--gray-900, #222);
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      &::after {
        box-sizing: border-box;
        position: absolute;
        content: '';
        height: 64px;
        width: 64px;
        border: 2px solid var(--orange-400, #ff7638);
        border-radius: 50%;
      }
    `}

  &:first-child {
    margin-left: 16px;
  }

  &:last-child {
    margin-right: 16px;
  }
`;
