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
            <input type="password" 
                name="password"
                placeholder="password"
                className="login-form-textbox" />
            <input type="password" 
                name="password"
                placeholder="re-enter password"
                className="login-form-textbox" />
            <select
                    name="university"
                    className="register-form-unidropdown"
            >
                    <option value="">Select your University!</option>
                    <option value="wlu">Wilfrid Laurier</option>
                    <option value="uw"><img href="../public/waterloo.png" />Waterloo</option>
                    <option value="uoft">Toronto</option>
                    <option value="ubc">British Columbia</option>
                    <option value="mcgill">McGill</option>
                    <option value="queens">Queens</option>
                    <option value="uwo">Western</option>
                    <option value="mac">McMaster</option>
                    <option value="tmu">Toronto Metropolitan University</option>
            </select>
            <Link href="/"><button type="submit" className='login-form-submit'>Register!</button></Link>
        </form>
    </div>
    )
}