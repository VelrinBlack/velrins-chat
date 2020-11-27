import { render, screen, fireEvent, cleanup, waitFor } from '../../../../testUtils';
import '@testing-library/jest-dom';

import RegisterForm from './RegisterForm';

describe('RegisterForm', () => {
  beforeEach(() => {
    render(<RegisterForm />);
  });

  afterEach(cleanup);

  test('Email error', () => {
    const emailInput = screen.getByPlaceholderText('Email');
    fireEvent.change(emailInput, {
      target: {
        value: 'Not valid email',
      },
    });

    const submitButton = screen.getByLabelText('submit');
    fireEvent.click(submitButton);

    const emailError = screen.getByText('Email is not valid');
    expect(emailError).toBeInTheDocument();
  });

  test('Password error', () => {
    const passwordInput = screen.getByPlaceholderText('Password');
    fireEvent.change(passwordInput, {
      target: {
        value: 'Password, that contain more than 20 characters',
      },
    });

    const submitButton = screen.getByLabelText('submit');
    fireEvent.click(submitButton);

    const passwordError = screen.getByText('Password must contain from 7 to 20 characters');
    expect(passwordError).toBeInTheDocument();
  });

  test('Repeat password error', () => {
    const passwordInput = screen.getByPlaceholderText('Password');
    fireEvent.change(passwordInput, {
      target: {
        value: 'Example password',
      },
    });

    const repeatPasswordInput = screen.getByPlaceholderText('Repeat password');
    fireEvent.change(repeatPasswordInput, {
      target: {
        value: 'Another password',
      },
    });

    const submitButton = screen.getByLabelText('submit');
    fireEvent.click(submitButton);

    const repeatPasswordError = screen.getByText("Passwords don't match");
    expect(repeatPasswordError).toBeInTheDocument();
  });

  test('Empty fields error', () => {
    const submitButton = screen.getByLabelText('submit');
    fireEvent.click(submitButton);

    const emptyFieldsError = screen.getByText('Please fill empty fields');
    expect(emptyFieldsError).toBeInTheDocument();
  });

  test('User already exists error', async () => {
    const nameInput = screen.getByPlaceholderText('Name');
    const surnameInput = screen.getByPlaceholderText('Surname');
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const repeatPasswordInput = screen.getByPlaceholderText('Repeat password');
    const submitButton = screen.getByLabelText('submit');

    fireEvent.change(nameInput, {
      target: { value: 'Test' },
    });
    fireEvent.change(surnameInput, {
      target: { value: 'User' },
    });
    fireEvent.change(emailInput, {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(passwordInput, {
      target: { value: 'testpassword' },
    });
    fireEvent.change(repeatPasswordInput, {
      target: { value: 'testpassword' },
    });

    fireEvent.click(submitButton);

    await waitFor(() => {
      const userAlreadyExistsError = screen.getByText('User already exists');
      return expect(userAlreadyExistsError).toBeInTheDocument();
    });
  });
});
