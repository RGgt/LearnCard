import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import { TestComponent } from './TestComponent';

describe('Testing the TestComponent', () => {
  it('Renders hello world', () => {
    // Arrange
    // Act
    render(<TestComponent />);
    // Assess
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Hello world!',
    );
  });
});

describe('Testing something else', () => {
  it('3+5=8', () => {
    // Arrange
    // Act
    render(<TestComponent />);
    // Assess
    expect(3 + 5).toBe(8);
  });
  it('5+5=10', () => {
    // Arrange
    // Act
    render(<TestComponent />);
    // Assess
    expect(5 + 5).toBe(10);
  });
});
