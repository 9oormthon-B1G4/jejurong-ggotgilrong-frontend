import styled from 'styled-components';

interface propsType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  comment: string;
  date: string;
  nickname: string;
  idx: number;
}

export const DetailModal = ({
  isOpen,
  setIsOpen,
  comment,
  date,
  nickname,
  idx,
}: propsType) => {
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <ModalContainer>
      {isOpen ? (
        <ModalBackdrop onClick={openModalHandler}>
          <ModalView onClick={(e: any) => e.stopPropagation()}>
            <TopImgContainer>
              <img
                src={import.meta.env.BASE_URL + './icon/post_' + idx + '_1.svg'}
              />
            </TopImgContainer>
            <Comment>{comment}</Comment>
            <Info>
              <div className="date">{date.replace(/-/g, '.')}</div>
              <div className="nickname">{nickname}</div>
            </Info>
            <BottomImgContainer>
              <img
                src={import.meta.env.BASE_URL + './icon/post_' + idx + '_2.svg'}
              />
            </BottomImgContainer>
          </ModalView>
        </ModalBackdrop>
      ) : null}
    </ModalContainer>
  );
};

const ModalContainer = styled.div``;

const ModalBackdrop = styled.div`
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalView = styled.div`
  width: 340px;
  height: 332px;
  margin-bottom: 120px;
  background-color: ${({ theme }) => theme.colors.gray_100};
  border-radius: 8px;
`;

const TopImgContainer = styled.div`
  width: 100%;
  height: 80px;
  margin: 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 60px;
  }
`;

const Comment = styled.div`
  width: 100%;
  height: 120px;
  padding: 16px;

  font-size: 16px;
  line-height: 22px;
  font-family: 'Pretendard';
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray_700};
`;

const Info = styled.div`
  width: 100%;
  height: 40px;
  font-family: 'Pretendard';
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray_700};
  text-align: center;

  div.date {
    font-size: 14px;
    margin-bottom: 8px;
  }

  div.nickname {
    font-size: 14px;
  }
`;

const BottomImgContainer = styled.div`
  width: 100%;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
