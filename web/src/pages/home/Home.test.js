import { render } from '@testing-library/react';
import Home from './Home';

test('renders Home', () => {
  render(<Home />);
  const container = document.querySelector('.Home');
  expect(container).toHaveTextContent('Home');
});
