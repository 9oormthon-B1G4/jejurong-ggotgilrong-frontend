import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/global-style';
import GlobalFonts from '@assets/fonts';

import { MainPage } from '@pages/Main';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <GlobalFonts />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
