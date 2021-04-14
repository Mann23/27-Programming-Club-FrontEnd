import react, { Componet } from 'react'
import GoogleLogin from 'react-google-login'
import './Login.css'



const Login = () => {
  const responseGoogle = (Response) => {console.log(Response);
    console.log(Response.profileobj);}
	return (
    <div className='style'>
      <h1 className = 'Daksh'>Programming : Programming club</h1>

      <input type="email" name="email" placeholder="Email" />
   
      <input type="password" name="Password" placeholder="Password" />

    <GoogleLogin 
    className = 'Chirag'
    clientId="737901721241-gn29uqtr305vr05cu2eaq3t0h8i71h9m.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
    />
 </div>
	)
}

export default Login;
