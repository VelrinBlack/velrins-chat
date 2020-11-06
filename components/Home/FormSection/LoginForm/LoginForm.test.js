import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  beforeEach(() => {
    render(<LoginForm />);
  });

  afterEach(cleanup);

  test('Empty fields error', () => {
    const submitButton = screen.getByLabelText('submit');
    fireEvent.click(submitButton);

    const emptyFieldsError = screen.getByText('Please fill empty fields');
    expect(emptyFieldsError).toBeInTheDocument();
  });
});
