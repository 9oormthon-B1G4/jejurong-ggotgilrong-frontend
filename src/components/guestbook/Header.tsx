import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();

  const handleClickBackBtn = () => {
    navigate('/main');
  };

  return (
    <HeaderContainer>
      <BackBtn onClick={handleClickBackBtn}>
        <img src={import.meta.env.BASE_URL + './icon/back_icon.svg'} />
      </BackBtn>
      <BusName>OO버스 방명록</BusName>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  width: 100%;
  height: 48px;
  margin-top: 45px;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_300};
`;

const BusName = styled.div`
  font-family: 'NanumSquare';
  font-weight: 700;
  font-size: 16px;
`;

const BackBtn = styled.button`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translate(0, -50%);

  background-color: transparent;
  border: none;
  padding: 0;

  img {
    width: 20px;
  }

  &:hover {
    cursor: pointer;
  }
`;
