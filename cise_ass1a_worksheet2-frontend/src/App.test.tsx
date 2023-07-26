import { render } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  render(<App />);
});

describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });
});
