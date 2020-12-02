import { useState } from 'react';

import FormSectionStyles from './FormSectionStyles';
import RegisterForm from './RegisterForm/RegisterForm';
import LoginForm from './LoginForm/LoginForm';

const FormSection = () => {
  const [formType, setFormType] = useState('register');

  return (
    <FormSectionStyles>
      <div className='formSectionContainer'>
        {formType === 'register' ? (
          <>
            <h2>Sign up now!</h2>
            <RegisterForm changeToLogin={() => setFormType('login')} />
          </>
        ) : (
          <>
            <h2>Sign in</h2>
            <LoginForm changeToRegister={() => setFormType('register')} />
          </>
        )}
      </div>
    </FormSectionStyles>
  );
};

export default FormSection;
