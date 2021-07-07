import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { Link } from "react-router-dom";
import {  startFacebookLogin, startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import {useForm} from '../../hooks/useForm'
export const LoginScreen = () => {

   const [formValues, handleInputChange] = useForm({
     email:"",
     password: "",
   })
    const {loading} = useSelector( state => state.ui );  
    const {email,password} = formValues;
    const dispatch = useDispatch();
    const handleLogin = (e) => {
         dispatch(startLoginEmailPassword(email,password))
         e.preventDefault();
    }
    const handleGoogleLogin = () => {
      dispatch(startGoogleLogin());
    };
    const handleFacebookLogin = () => {
      dispatch(startFacebookLogin())
    }
  return (
    <div className="login__container">
      <h1>Login</h1>
      <form
        onSubmit={handleLogin}
        className="animate__animated animate__fadeIn"
      >
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          className="auth__input mt-2"
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          className="auth__input mt-2"
          onChange={handleInputChange}
        />

        <button
          className="btn btn-primary btn-block mt-2"
          type="submit"
          disabled={loading}
        >
          Login
        </button>
        <div className="login-extra">
          <img
            className="google-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="google button"
            onClick={handleGoogleLogin}
          />
          <img
            className="facebook-icon"
            src="https://icons-for-free.com/iconfiles/png/512/app+facebook+global+ios+media+social+icon-1320193328615936618.png"
            alt="facebook button"
            onClick={handleFacebookLogin}
          />
        </div>
        <Link to="/auth/register" className="link mt-2">
          Create New Acountt
        </Link>
      </form>
    </div>
  );
}
