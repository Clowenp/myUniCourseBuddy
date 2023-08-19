import Header from '../components/header'
import Link from 'next/link'
export default function Register() {
    return(
        <div>
      <Header />
      <form className='login'>
        <h1>Create an Account!</h1>
        {/* <label for="username">username:</label> */}
        <input type="text"
               name="username"
               placeholder="username"
               className="login-form-textbox" />
        {/* <label for="password">password:</label> */}
        <input type="text" 
               name="password"
               placeholder="password"
               className="login-form-textbox" />
        <input type="text" 
               name="password"
               placeholder="re-enter password"
               className="login-form-textbox" />
        <button type="submit" className='login-form-submit'>Register!</button>
      </form>
    </div>
    )
}