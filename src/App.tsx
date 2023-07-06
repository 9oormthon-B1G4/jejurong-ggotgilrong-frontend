import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/global-style';
import GlobalFonts from '@assets/fonts';

import { MainPage } from '@pages/Main';
import { GuestBookPage } from '@pages/Guestbook';
import { LandingPage } from '@pages/Landing';
import { NotFoundPage } from '@pages/NotFound';
import { Layout } from '@layout/index';

const staticServerUri = import.meta.env.VITE_REACT_APP_PATH || '';
console.log('staticServerUri:', staticServerUri);

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <GlobalFonts />
      <Layout>
        <Routes>
          <Route path={staticServerUri + '/'} element={<LandingPage />} />
          <Route path={staticServerUri + '/main'} element={<MainPage />} />
          <Route
            path={staticServerUri + '/main/:routeId/book'}
            element={<GuestBookPage />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
