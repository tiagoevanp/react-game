import { test, expect } from 'bun:test';

import { render, screen } from '@testing-library/react';

import { Button } from '.';

test('Button', () => {
    render(<Button onClick={() => {}}>{'something'}</Button>);

    expect(screen.getByRole('button').textContent).toBe('something');
});
