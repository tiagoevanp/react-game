import { render, screen } from '@testing-library/react';
import { test, expect } from 'bun:test';

import { Button } from '.';

test('Button', () => {
    render(<Button onClick={() => {}}>{'something'}</Button>);

    expect(screen.getByRole('button').textContent).toBe('something');
});
