// Home page = Log-in Page.
import Header from "./components/header.js"
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
        <input type="text" 
               name="password"
               placeholder="password"
               className="login-form-textbox" />
        <button type="submit" className='login-form-submit'>Log-in!</button>
        <p>Don't have an account? <a href="">Register</a> here!</p>
      </form>
    </div>
  )
}
