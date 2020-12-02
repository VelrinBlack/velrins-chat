import { screen, render, cleanup, fireEvent } from '../../../testUtils';
import '@testing-library/jest-dom';

import ActivationScreen from './ActivationScreen';

describe('ActivationScreen', () => {
  beforeEach(() => {
    render(<ActivationScreen />);
  });

  afterEach(cleanup);

  test('Empty code error', () => {
    const submitButton = screen.getByLabelText('submit');

    fireEvent.click(submitButton);

    const emptyCodeError = screen.getByText('Please, enter activation code');
    expect(emptyCodeError).toBeInTheDocument();
  });

  test('Too short code error', () => {
    const input = screen.getByPlaceholderText('Enter the code');
    const submitButton = screen.getByLabelText('submit');

    fireEvent.change(input, { target: { value: '123' } });
    fireEvent.click(submitButton);

    const tooShortCodeError = screen.getByText('Activation code is too short');
    expect(tooShortCodeError).toBeInTheDocument();
  });

  test('Resend code button', () => {
    const resendCodeButton = screen.getByText('Resend my code');

    fireEvent.click(resendCodeButton);

    const codeSentOneMoreTimeText = screen.getByText('Code sent one more time!');
    expect(codeSentOneMoreTimeText).toBeInTheDocument();
  });
});
