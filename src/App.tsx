import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/global-style';

import { MainPage } from '@pages/Main';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
