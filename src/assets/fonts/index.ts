import { createGlobalStyle } from 'styled-components';
import PretendardRegular from './Pretendard-Regular.woff2';
import NanumSquareNeoRegular from './NanumSquareNeoTTF-bRg.woff2';

export default createGlobalStyle`
@font-face {
    font-family: "Pretendard";
    src: local("PretendardRegular"),
    url(${PretendardRegular}) format('woff2');
    font-style: normal;
}
@font-face {
    font-family: "NanumSquare";
    src: local("NanumSquare"),
    url(${NanumSquareNeoRegular}) format('woff2');
    font-style: normal;
}
`;
