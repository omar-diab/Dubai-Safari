import './Forms.css'

const Register = () => {
  const formSubmitHandler = (event) => {
    event.preventDefault();
  }

  return (
    <div className='form-wrapper'>
    <form onSubmit={formSubmitHandler} className='form'>
        <input type='text' placeholder='Enter name' required />
        <input type='email' placeholder='Enter email' required />
        <input type='password' placeholder='Enter password' required />
        <input type='password' placeholder='Confirm password' required />
      <button className='form-btn'>Register</button>
    </form>
  </div>
  )
}

export default Register