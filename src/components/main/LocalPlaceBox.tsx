import { styled } from 'styled-components';

const LocalPlaceBox = () => {
  return (
    <LocalPlaceBoxContiner>
      <h1>이 근처 추천 장소</h1>
      <PlaceItemBox>
        <PlaceItem>
          <div className="wrapper">
            <img src="https://via.placeholder.com/343x186" alt="이미지" />
          </div>
          <figcaption>
            <h2>추천지명</h2>
            <p>이 콘텐츠에 대한 설명 1줄</p>
          </figcaption>
        </PlaceItem>
        <PlaceItem>
          <div className="wrapper">
            <img src="https://via.placeholder.com/343x186" alt="이미지" />
          </div>
          <figcaption>
            <h2>추천지명</h2>
            <p>이 콘텐츠에 대한 설명 1줄</p>
          </figcaption>
        </PlaceItem>
        <PlaceItem>
          <div className="wrapper">
            <img src="https://via.placeholder.com/343x186" alt="이미지" />
          </div>
          <figcaption>
            <h2>추천지명</h2>
            <p>이 콘텐츠에 대한 설명 1줄</p>
          </figcaption>
        </PlaceItem>
      </PlaceItemBox>
    </LocalPlaceBoxContiner>
  );
};

export default LocalPlaceBox;

const LocalPlaceBoxContiner = styled.div`
  padding: 8px 16px 17px;

  & > h1 {
    color: var(--gray-900, #222);
    /* Text/m_a */
    font-family: NanumSquare Neo OTF;
    font-size: 16px;
    font-style: normal;
    font-weight: 550;
    line-height: 22px;
  }
`;

const PlaceItemBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 17px;
  gap: 24px;
`;

const PlaceItem = styled.figure`
  cursor: pointer;

  & .wrapper {
    border-radius: 10px;
    overflow: hidden;
    height: 186px;

    & > img {
      width: 100%;
      height: inherit;
    }
  }

  & figcaption {
    padding-top: 8px;

    color: var(--gray-900, #222);
    font-family: Pretendard;
    font-style: normal;
    font-weight: 400;

    & > h2 {
      font-size: 16px;
      line-height: 22px;
    }

    & > p {
      font-size: 14px;
      line-height: 18px;
    }
  }
`;
