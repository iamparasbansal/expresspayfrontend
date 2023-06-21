import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';
import logo from "../images/expressPayLogo.jpg";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';
import axios from 'axios';
//import {UserContext} from "../App";

const Navbar = ({ user }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const renderAuthButtons = () => {
    if (user) {
      return (
        <li className="nav nav-item navbar navbar-light bg-light">
          <Link style={{ color: "black" }} className="nav-link" onClick={handleLogout}>Logout</Link>
        </li>
      );
    } else {
      return (
        <li className="nav nav-item navbar navbar-light bg-light">
          <Link style={{ color: "black" }} className="nav-link" to="/login">Login/Signup</Link>
        </li>
      );
    }
  };

  const renderCommunityButton = () => {
    if (user) {
      return (
        <li className="nav nav-item navbar navbar-light bg-light">
          <Link style={{ color: "black" }} className="nav-link" to="/community">Community</Link>
        </li>
      );
    } else {
      return (<></>
      );
    }
  };

  const renderProfileButton = () => {
    if (user) {
      return (
        <li className="nav nav-item navbar navbar-light bg-light">
          <Link style={{ color: "black" }} className="nav-link" to="/profile">Profile</Link>
        </li>
      );
    } else {
      return (<></>
      );
    }
  };

  const renderRewardsButton = () => {
    if (user) {
      return (
        <li className="nav nav-item navbar navbar-light bg-light">
          <Link style={{ color: "black" }} className="nav-link" to="/rewards">Rewards</Link>
        </li>
      );
    } else {
      return (<></>
      );
    }
  };

  const handleLogout = async () => {
    try {

      const token = localStorage.getItem('Authorization');
      await axios.get('https://server-express-pay-houy.vercel.app/logout', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });
      sessionStorage.clear();
      localStorage.clear();
      dispatch(logout());
      setTimeout(navigate, 0, "/", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };



  const RenderMenu = () => {
    return (
      <>
        <div className="navbar navbar-light bg-light">
          <li className="nav nav-item navbar navbar-light bg-light" style={{ color: "black" }}>
            <Link className="nav-link" style={{ color: "black" }} aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav nav-item navbar navbar-light bg-light">
            {renderProfileButton()}
          </li>
          <li className="nav nav-item navbar navbar-light bg-light">
            {renderRewardsButton()}
          </li>
          <li className="nav nav-item navbar navbar-light bg-light">
            <Link style={{ color: "black" }} className="nav-link" to="/contact">Contact</Link>
          </li>
          {/* <li className="nav nav-item navbar navbar-light bg-light">
            <Link style={{ color: "black" }} className="nav-link" to="/news">News</Link>
          </li> */}
          <li className="nav nav-item navbar navbar-light bg-light">
            <Link style={{ color: "black" }} className="nav-link" to="/stock">Stocks</Link>
          </li>
          <li className="nav nav-item navbar navbar-light bg-light">
            <li className="nav nav-item navbar navbar-light bg-light">
              {renderCommunityButton()}
            </li>
            {renderAuthButtons()}
          </li>

          {/* <li className="nav nav-item navbar navbar-light bg-light">
          <a href='http://localhost:2000/'>Community</a>
        </li> */}

        </div>
      </>
    )
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <RenderMenu />
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar