import { render } from '@testing-library/react';
import Task from './Task';

test('renders Task', () => {
  render(<Task />);
  const container = document.querySelector('.Task');
  expect(container).toHaveTextContent('Task');
});
