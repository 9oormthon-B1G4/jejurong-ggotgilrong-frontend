import { styled } from 'styled-components';
import ThemeBox from './ThemeBox';
import QuestBookBox from './QuestBookBox';
import useSlider from 'src/hooks/useSlider';
import LocalPlaceBox from './LocalPlaceBox';

const BottomSheet = () => {
  const { tabPosition, handleTouchStart, handleTouchMove, handleTouchEnd } =
    useSlider();

  return (
    <BottomSheetContainer
      className="bottomSheet"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ transform: `translateY(${tabPosition}px)` }}
    >
      <TopBtnArea>
        <span></span>
      </TopBtnArea>
      <ThemeBox />
      <Divider />
      <ContentsBox className="contentsBox" $isScroll={tabPosition === -450}>
        <QuestBookBox id={1} />
        <LocalPlaceBox />
      </ContentsBox>
    </BottomSheetContainer>
  );
};

export default BottomSheet;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e0e0e0;
`;

const BottomSheetContainer = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  top: calc(100% - 300px);
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 30px 30px 0px 0px;
  background: var(--white, #fff);
  z-index: 99;
  transition: all 0.2s;
  box-shadow: 0px -4px 8px 0px rgba(25, 31, 40, 0.08);
`;

const TopBtnArea = styled.div`
  height: 27px;
  padding-top: 8px;

  & > span {
    cursor: pointer;
    display: block;
    margin: 0 auto;
    height: 3px;
    width: 40px;
    border-radius: 1.5px;
    background-color: #d9d9d9;
  }
`;

const ContentsBox = styled.div<{ $isScroll: boolean }>`
  height: calc(100vh - 200px);
  overflow-y: ${({ $isScroll }) => ($isScroll ? 'scroll' : 'hidden')};
`;
