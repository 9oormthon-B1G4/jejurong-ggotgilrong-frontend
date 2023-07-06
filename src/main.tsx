import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import KakaoMapScriptLoader from '@components/map/KakaoMapScriptLoader.tsx';
import { ThemeContextProvider } from './hooks/useTheme.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <KakaoMapScriptLoader>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </KakaoMapScriptLoader>
  </React.StrictMode>,
);
