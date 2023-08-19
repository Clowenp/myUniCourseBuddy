// Home page = Log-in Page.
import Header from "./components/header"
import Link from 'next/link'
// import Register from "./pages/register"
export default function Home() {
  return (
    // (note) handle event such that new link isnt http://localhost:3000/?username=&password=
    <div>
      <Header />
      <form className='login'>
        <h1>Log-in</h1>
        {/* <label for="username">username:</label> */}
        <input type="text"
               name="username"
               placeholder="username"
               className="login-form-textbox" />
        {/* <label for="password">password:</label> */}
        <input type="password" 
               name="password"
               placeholder="password"
               className="login-form-textbox" />
        <button type="submit" className='login-form-submit'>Log-in!</button>
        <p>Don't have an account? <Link href="/register">Register</Link> here!</p>
      </form>
      {/* <Link href="/register" /> */}
    </div>
  )
}
