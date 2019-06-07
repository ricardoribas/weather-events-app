import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { App } from './App';

describe('App', () => {

  beforeEach(() => {});

  it('should render correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<App />);

    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});

