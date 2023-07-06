import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import KakaoMapScriptLoader from '@components/map/KakaoMapScriptLoader.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <KakaoMapScriptLoader>
      <App />
    </KakaoMapScriptLoader>
  </React.StrictMode>,
);
