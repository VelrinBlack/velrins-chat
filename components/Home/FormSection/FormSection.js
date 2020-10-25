import FormSectionStyles from './FormSectionStyles';

const FormSection = () => {
  return (
    <FormSectionStyles>
      <div className='background'></div>
      <div className='contentContainer'>
        <h2>Sign up now!</h2>

        <form>
          <div className='container'>
            <input type='text' placeholder='Name' />
            <input type='text' placeholder='Surname' />
          </div>

          <input type='text' placeholder='Email' />
          <input type='password' placeholder='Password' />
          <input type='password' placeholder='Repeat password' />

          <button type='submit'>
            <span>Sign up</span>
          </button>
        </form>
      </div>
    </FormSectionStyles>
  );
};

export default FormSection;
