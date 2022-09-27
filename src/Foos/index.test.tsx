import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Foos from './index';

describe('<Foos />', () => {
  it('render Foos with dumi', () => {
    const msg = 'dumi';

    render(<Foos title={msg} />);
    expect(screen.queryByText(msg)).toBeInTheDocument();
  });
});
