import { useRef, useState } from 'react';

export interface ReactContextValueProps {
  isDragging: boolean;
  tabPosition: number;
  handleShowController: (arg1: boolean) => void;
  handleTouchStart: (event: React.TouchEvent<HTMLDivElement>) => void;
  handleTouchMove: (event: React.TouchEvent<HTMLDivElement>) => void;
  handleTouchEnd: () => void;
  // handleScroll: () => void;
}

const useSlider = () => {
  // 드래그 슬라이드 관련
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartY, setDragStartY] = useState(0);
  const [tabPosition, setTabPosition] = useState(0);
  const currentPositionRef = useRef<number>(0);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setDragStartY(event.touches[0].clientY);
    currentPositionRef.current = tabPosition;
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    const divTop = document
      .querySelector('.bottomSheet')
      ?.getBoundingClientRect().top;

    // console.log(divTop);

    if (isDragging) {
      const dragDistance = event.touches[0].clientY - dragStartY;
      const distance = currentPositionRef.current + dragDistance;
      if (distance <= 0) {
        setTabPosition(distance);
      }

      // 숨겨졌을 경우
      // 노출되 있을 경우

      // if (
      //   dragDistance <= -SLIDER_RANGE.min &&
      //   dragDistance >= -SLIDER_RANGE.max
      // ) {
      //   setTabPosition(SLIDER_RANGE.max + dragDistance);
      // }
      // if (
      //   dragDistance >= SLIDER_RANGE.min &&
      //   dragDistance <= SLIDER_RANGE.max
      // ) {
      // }
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    // 숨겨졌을 경우
    // if (isTabPostion && tabPosition < SLIDER_RANGE.max - 20) {
    //   setTabPosition(SLIDER_RANGE.min);
    //   setIsTabPosition(false);
    // } else if (!isTabPostion && tabPosition > SLIDER_RANGE.min + 20) {
    //   // 노출되 있을 경우
    //   setTabPosition(SLIDER_RANGE.max);
    //   setIsTabPosition(true);
    // }
  };

  // const handleScroll = (event: React.UIEventHandler<HTMLDivElement>) => {
  //   // console.log(event.scroo);
  //   console.log(window.scrollY);
  // };

  const contextValue = {
    isDragging,
    tabPosition,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    // handleScroll,
  };

  return contextValue;
};

export default useSlider;
