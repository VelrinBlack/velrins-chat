import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import FormSection from './FormSection';

describe('FormSection', () => {
  beforeEach(() => {
    render(<FormSection />);
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

    const passwordError = screen.getByText(
      'Password must contain from 7 to 20 characters',
    );
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
});
