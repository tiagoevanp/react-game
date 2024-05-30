import React from 'react';
import ReactDOM from 'react-dom/client';
import { SettingsProvider, ThemeProvider } from '@evanbrother/ui';

import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <SettingsProvider>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </SettingsProvider>
    </React.StrictMode>
);
