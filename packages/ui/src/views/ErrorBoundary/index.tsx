import { PropsWithChildren, useState } from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

import { FallbackError } from './FallbackError';

type ErrorBoundaryProps = PropsWithChildren;

export const ErrorBoundary = ({ children }: ErrorBoundaryProps) => {
    const [error, setError] = useState('');

    return (
        <ReactErrorBoundary
            fallback={<FallbackError error={error} />}
            onError={(error) => setError(error.message)}
        >
            {children}
        </ReactErrorBoundary>
    );
};
