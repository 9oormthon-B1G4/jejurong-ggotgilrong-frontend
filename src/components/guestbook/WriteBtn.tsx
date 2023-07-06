import styled from 'styled-components';

interface propsType {
  setIsOpenWrite: React.Dispatch<React.SetStateAction<boolean>>;
}
export const WriteBtn = ({ setIsOpenWrite }: propsType) => {
  const handleClickWriteBtn = () => {
    setIsOpenWrite(true);
  };
  return (
    <Container>
      <Btn onClick={handleClickWriteBtn}>
        <Icon src={import.meta.env.BASE_URL + './icon/pencil_icon.svg'} />
        <div>방명록 작성</div>
      </Btn>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 460px;
  height: 100px;
  position: fixed;
  bottom: 0;
`;

const Btn = styled.button`
  height: 44px;
  padding: 10px 16px;
  position: absolute;
  bottom: 40px;
  right: 20px;
  border-radius: 22px;
  border: none;

  background-color: ${({ theme }) => theme.colors.orange_400};

  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 400;
  color: white;

  @media screen and (max-width: 460px) {
    position: fixed;
    bottom: 40px;
    right: 20px;
  }

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;

const Icon = styled.img`
  width: 16px;
  margin-right: 8px;
`;
