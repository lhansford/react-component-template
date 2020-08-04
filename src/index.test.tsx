import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Example from './index';

describe('Example', () => {
  beforeEach(() => {
    render(<Example name="Test" />);
  });

  it('Renders', () => {
    expect(screen.getByText('Test')).not.toBeNull();
  });
});
