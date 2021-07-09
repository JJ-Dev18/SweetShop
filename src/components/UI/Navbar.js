import React from 'react'
import { useForm } from '../../hooks/useForm';
import { startLogout } from "../../actions/auth";
import { useDispatch,useSelector } from "react-redux";

export const Navbar = () => {
   const dispatch = useDispatch();
  const [formValues,handleInputChange] = useForm({

  })
  const {name} = useSelector( state => state.auth );
  const {searchText} = formValues
  const handleLogout = () => {
    dispatch(startLogout());
  };
  return (
    <div className="navBar">
      <span>{name} </span>
      {/* <form>
        <input
          onChange={handleInputChange}
          type="text"
          name="searchText"
          value={searchText}
          placeholder="Find your sweet"
          autoComplete="off"
          className="form-control"
        ></input>
        <button className="btn m-1 btn-block btn-outline-primary">
          Search...
        </button> */}
        <button className="btn-danger" onClick={handleLogout}>
          Logout
        </button>
      {/* </form> */}
    </div>
  );
}
