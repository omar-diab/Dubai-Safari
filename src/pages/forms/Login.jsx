import './Forms.css'

const Login = () => {
  const formSubmitHandler = (event) => {
    event.preventDefault();
  }

  return (
    <div className='form-wrapper'>
      <form onSubmit={formSubmitHandler} className='form'>
          <input type='email' placeholder='Enter your email' required />
          <input type='password' placeholder='Enter your password' required />
        <button className='form-btn'>Login</button>
      </form>
    </div>
  )
}

export default Login