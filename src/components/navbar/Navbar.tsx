import React, { useContext } from "react";
import { SignupContext } from "../signup/SignUpContextProvider";
import "./navbar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Badge from "@material-ui/core/Badge";
import CartModal from "../cart-modal/CartModal";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import TranslationComp from "../../translation/TranslationComponent";
import { Translation } from "../../translation/TranslationContextProvider";
import Logout from "../logout/Logout";

import { FaUserCircle } from "react-icons/fa";
import UserInfoModal from "../user-info-modal/UserInfoModal";

const Navbar = () => {
  const { userName } = useContext(SignupContext);
  //  cart modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openUserModal, setOpenUserModal] = React.useState(false);
  const handleOpenUserModal = () => setOpenUserModal(true);
  const handleCloseUserModal = () => setOpenUserModal(false);




  const products = useSelector((state: any) => state.cart);
  const { content } = useContext(Translation);
  return (
    <>
    <UserInfoModal userName={userName} openUserModal={openUserModal} handleCloseUserModal={handleCloseUserModal}/>
      <nav>
        <div className="inner-container">
          <div className="logo">
            <NavLink className="logo-text" to="/">
              <span>SJ's commerce</span>
            </NavLink>
            <div id="cart-container" onClick={handleOpen}>
              <AiOutlineShoppingCart id="cart" fill="#fff" />
              <Badge
                style={{ position: "absolute" }}
                badgeContent={products.length}
                color="error"
                hidden={false}
                invisible={false}
                id="nav-cart-badge"
              ></Badge>
            </div>
            &nbsp;
            <div className="user-container">
              <FaUserCircle onClick={handleOpenUserModal} id="navbar-user-icon" size={33} color="#fff" />
            </div>
            <CartModal open={open} handleClose={handleClose} />
          </div>

          <ul className="nav-links">
            <li>
              {" "}
              <NavLink className="nav-link " to="/">
                {content.home}
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link " to="/smartphones">
                {content.smartphones}
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link " to="/laptops-page">
                {content.laptops}
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link " to="/audio-systems">
                {content.audio_systems}
              </NavLink>
            </li>
          </ul>
          <div className="nav-icons">
            <div id="translation-div">
              <TranslationComp />
            </div>
            <div id="logout-div">
              <Logout />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
