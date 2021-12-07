import { render } from '@testing-library/react';
import TaskList from './TaskList';

test('renders TaskList', () => {
  render(<TaskList />);
  const container = document.querySelector('.TaskList');
  expect(container).toHaveTextContent('TaskList');
});
