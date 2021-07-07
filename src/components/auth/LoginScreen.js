import React from 'react'
import { Link } from "react-router-dom";
import {useForm} from '../../hooks/useForm'
export const LoginScreen = () => {

   const [formValues, handleInputChange] = useForm({
    })
    const {email,password} = formValues;

    const handleLogin = (e) => {
         e.preventDefault();
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
          className="auth__input"
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          className="auth__input"
          onChange={handleInputChange}
        />

        <button
          className="btn btn-primary btn-block mt-2"
          type="submit"
          // disabled={loading}
        >
          Login
        </button>
        <Link to="/auth/register" className="link">
          Create New Acountt
        </Link>
      </form>
    </div>
  );
}
