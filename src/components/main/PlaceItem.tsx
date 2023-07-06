import { styled } from 'styled-components';

interface PlaceItemProps {
  title: string;
  desc: string;
  url: string;
  src: string;
}

const PlaceItem = ({ title, desc, url, src }: PlaceItemProps) => {
  const handleMove = () => {
    location.href = url;
  };

  return (
    <PlaceItemContainer onClick={handleMove}>
      <div className="wrapper">
        <img src={src} alt={title} />
      </div>
      <figcaption>
        <h2>{title}</h2>
        <p>{desc}</p>
      </figcaption>
    </PlaceItemContainer>
  );
};

export default PlaceItem;

const PlaceItemContainer = styled.figure`
  cursor: pointer;
  border-radius: 10px;
  width: 100%;
  background: var(--gray-100, #f5f5f5);

  & .wrapper {
    /* height: 186px; */
    overflow: hidden;
    border-radius: 10px 10px 0 0;

    & > img {
      width: 100%;
      height: inherit;
    }
  }

  & figcaption {
    padding: 16px;
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
