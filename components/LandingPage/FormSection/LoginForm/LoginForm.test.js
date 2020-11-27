import { render, screen, fireEvent, cleanup, waitFor } from '../../../../testUtils';
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

  test('Invalid email or password error', async () => {
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const submitButton = screen.getByLabelText('submit');

    fireEvent.change(emailInput, {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(passwordInput, {
      target: { value: 'invalid password' },
    });

    fireEvent.click(submitButton);

    await waitFor(() => {
      const userAlreadyExistsError = screen.getByText('Invalid email or password');
      return expect(userAlreadyExistsError).toBeInTheDocument();
    });
  });
});
