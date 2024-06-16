import { SettingsProvider, ThemeProvider } from '@evanbrother/providers';
import { ErrorBoundary } from '@evanbrother/ui';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <SettingsProvider>
            <ThemeProvider>
                <ErrorBoundary>
                    <App />
                </ErrorBoundary>
            </ThemeProvider>
        </SettingsProvider>
    </StrictMode>
);
