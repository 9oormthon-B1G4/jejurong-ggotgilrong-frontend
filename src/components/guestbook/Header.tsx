import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

interface propsType {
  name: string;
}

export const Header = ({ name }: propsType) => {
  const navigate = useNavigate();

  const handleClickBackBtn = () => {
    navigate('/main');
  };

  return (
    <HeaderContainer>
      <BackBtn onClick={handleClickBackBtn}>
        <img src={import.meta.env.BASE_URL + './icon/back_icon.svg'} />
      </BackBtn>
      <BusName>{name} 방명록</BusName>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  width: 100%;
  max-width: 460px;
  height: 60px;
  //padding-top: 45px;

  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;

  background-color: white;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_300};
`;

const BusName = styled.div`
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 18px;
  margin-top: 10px;
`;

const BackBtn = styled.button`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translate(0, -50%);
  margin-top: 10px;

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
