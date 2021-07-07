import React from 'react'
import {useForm} from '../../hooks/useForm'
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import validator from "validator";
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';
export const RegisterScreen = () => {
   
  const dispatch = useDispatch();
  const [formValues, handleInputChange] = useForm({
    name : "" ,
    email : "" ,
    password: "" ,
    password2: "" ,

  });
  const { name, email, password, password2 } = formValues;
  const {msgError} = useSelector( state => state.ui );
  
    const handleRegister = (e) => {
      e.preventDefault();

      if (isFormValid()) {
        dispatch(startRegisterWithEmailPasswordName(name, email, password));
      }
    };

    const isFormValid = () => {
      if (name.trim().length === 0) {
        const error = "Name is required";
        dispatch(setError(error));
        return false;
      } else if (!validator.isEmail(email)) {
        console.log("email no es valido");
        dispatch(setError("Invalid Email"));
        return false;
      } else if (password !== password2) {
        console.log(
          "No concuerdan las passwords"
        );
        dispatch(setError("Passwords don't match"));
        return false;
      }
      else if ( password.length < 5){
        console.log(
          "Minimo 6 caracteres para la contraseña"
        );
        dispatch(setError("Min 6 characters"));
        return false;
      }

      dispatch(removeError());
      return true;
    };
  return (
    <div>
      <h1 className="auth__title">Register </h1>
      <form
        onSubmit={handleRegister}
        className="animate__animated animate__fadeIn"
      >
        {msgError !== null && (
          <div className="auth__alert-error">{msgError}</div>
        )}

        <input
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input "
          autoComplete="off"
          onChange={handleInputChange}
          value={name}
        />

        <input
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input mt-2"
          onChange={handleInputChange}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input mt-2"
          onChange={handleInputChange}
          value={password}
        />
        <input
          type="password"
          placeholder="Confirm Password "
          name="password2"
          className="auth__input mt-2"
          onChange={handleInputChange}
          value={password2}
        />

        <button className="btn btn-primary btn-block mt-2" type="submit">
          Register
        </button>

        <hr />

        <Link to="/auth/login" className="link mt-2">
          Already Registered ?
        </Link>
      </form>
    </div>
  );
}
