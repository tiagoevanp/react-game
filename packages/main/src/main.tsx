import React from 'react';
import ReactDOM from 'react-dom/client';
import { SettingsProvider, ThemeProvider } from '@evanbrother/providers';
import { ErrorBoundary } from '@evanbrother/ui';

import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <SettingsProvider>
            <ThemeProvider>
                <ErrorBoundary>
                    <App />
                </ErrorBoundary>
            </ThemeProvider>
        </SettingsProvider>
    </React.StrictMode>
);
