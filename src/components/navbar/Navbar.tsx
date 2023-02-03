import React, { useContext } from "react";
import "./navbar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiBars4 } from "react-icons/hi2";
import Badge from "@material-ui/core/Badge";
import CartModal from "../cart-modal/CartModal";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import TranslationComp from "../../translation/TranslationComponent";
import { Translation } from "../../translation/TranslationContextProvider";

const Navbar = () => {
  //  cart modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.cart);

  const { content } = useContext(Translation);

  return (
    <nav className="navbar navbar-expand-md bg-dark px-3 sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          E-commerce
        </a>
        <button
          style={{ color: "transparent" }}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <HiBars4
            className="navbar-toggler-icon "
            fill="#FFFFFF"
            style={{ fontSize: 23 }}
          />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <TranslationComp />
          <div className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link " to="/">
                {content.smartphones}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/laptops-page">
                {content.laptops}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/audio-systems">
                {content.audio_systems}
              </NavLink>
            </li>
          </div>
        </div>
      </div>
      <div style={{ position: "relative" }} onClick={handleOpen}>
        <AiOutlineShoppingCart id="cart" fill="#FFFFFF" size={27} />
        {!products.length ? null : (
          <Badge
            style={{ position: "absolute", top: "5px" }}
            badgeContent={products.length}
            color="error"
            hidden={false}
          ></Badge>
        )}
      </div>

      <CartModal open={open} handleClose={handleClose} />
    </nav>
  );
};

export default Navbar;
