import React, { useContext } from "react";
import "./cart.css";
import { Translation } from "../../translation/TranslationContextProvider";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import closeIcon from "../../images/icons8-cancel-50.png";
import ShoppingCart from "../../images/icons8-shopping-cart-64.png";

import { useSelector, useDispatch } from "react-redux";
import { remove } from "../../redux/slices/cartSlice";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "850px",
  maxWidth: "97%",
  bgcolor: "#FFFFFF",
  boxShadow: 24,
  p: 2,
  outline: "none",
  borderRadius: "7px",
  overflowY: "scroll",
  maxHeight: "70vh",
};

export default function CartModal({ open, handleClose }: any) {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.cart);

  const handleRemove = (productName: any) => {
    dispatch(remove(productName));
  };

  const { content } = useContext(Translation);

  
  
  let totalPrice: any = 0;

  products.forEach((prod: any) => {
    if (prod?.price && !isNaN(prod?.price)) {
     return totalPrice += parseFloat(prod?.price);
    }
  });

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              marginBottom: "2rem",
            }}
            className="cart-container"
          >
            <h4>{content.my_cart}</h4>
            &nbsp; &nbsp;
            <img
              src={ShoppingCart}
              style={{
                width: 40,
                height: 40,
                cursor: "pointer",
              }}
              alt="close"
            />
            <img
              onClick={() => handleClose()}
              src={closeIcon}
              style={{
                width: 30,
                height: 30,
                position: "absolute",
                right: 15,
                top: 15,
                cursor: "pointer",
              }}
              alt="close"
            />
          </div>
            <h5 className="cart-container-total-price">
              {content.full_price}: <span>{totalPrice} $</span> 
            </h5>
          {products.length > 0 ? (
            products.map((product: any, index: any) => {
              return (
                <div key={index}>
                  <div className="card mb-3">
                    <div className="row g-5">
                      <div className="col-md-4">
                        <img
                          src={product.image}
                          style={{ width: "180px" }}
                          className="rounded-start"
                          alt="product"
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">
                            {content.brand}: {product.brand}
                          </h5>
                          <ul className="list-group">
                            <li className="list-group-item">
                              <strong>{content.model}: </strong>
                              {product.model}
                            </li>
                            <li className="list-group-item border border-transparent">
                              <strong>{content.price}: </strong>${" "}
                              {product.price}
                            </li>
                          </ul>
                          <p className="card-text mt-3 mb-4">
                            <small className="text-muted">
                              {content.update_text} !
                            </small>
                          </p>
                          <button
                            style={{
                              borderRadius: "100px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              height: "2rem",
                            }}
                            className="btn btn-danger btn-sm pt-3 pb-3 "
                            onClick={() => handleRemove(product.brand)}
                          >
                            {content.remove_product}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                marginBottom: "2rem",
              }}
            >
              <h6
                style={{
                  color: "orange",
                  borderBottom: "1px solid orange",
                  fontSize: "1rem",
                  paddingBottom: "0.5rem",
                  letterSpacing: "0.8px",
                }}
              >
                {content.cart_is_empty}
              </h6>
            </div>
          )}

          <button
            style={{ width: 145 }}
            className="btn btn-dark btn-sm pt-2 pb-2  float-end"
            onClick={handleClose}
          >
            {content.close}
          </button>
        </Box>
      </Modal>
    </div>
  );
}
