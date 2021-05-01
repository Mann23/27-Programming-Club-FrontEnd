import GoogleLogin from 'react-google-login'
import './Login.css'
import axios from 'axios';

const Login = () => {
  const responseGoogle = (Response) => {
   
    axios.post("http://localhost:4000/signIn", {
      email: Response.profileObj.email,
      username: Response.profileObj.username,
    }).then(res => {
      console.log.log(res)
      localStorage.setItem("UserId",Response.profileObj.name)
      localStorage.setItem('accessToken', res.data.accessToken)
    }).catch(err => {
      console.log(err)
    })
  }

  const errorGoogle = (error) => {
    console.log(error)
  }


	return (
    <div className='Login'>
      <h1 className = 'Login__Lable'>Programming : Programming club</h1>

    <GoogleLogin 
    className = 'Login__Google'
    clientId="737901721241-gn29uqtr305vr05cu2eaq3t0h8i71h9m.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={errorGoogle}
    cookiePolicy={'single_host_origin'}
    />
 </div>
	)
}

export default Login;