import React, { useContext } from "react";
import { Translation } from "../../translation/TranslationContextProvider";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import closeIcon from "../../images/icons8-cancel-50.png";
import ShoppingCart from "../../images/icons8-shopping-cart-64.png";

import { useSelector, useDispatch } from "react-redux";
import { remove } from "../../redux/slices/cartSlice";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "550px",
  bgcolor: "seashell",
  boxShadow: 24,
  p: 2,
  outline: "none",
  borderRadius: "7px",
  overflowY: "scroll",
  maxHeight: "60vh",
  "@media (max-width: 585px)": {
    width: "95%",
  },
};
export default function CartModal({ open, handleClose }: any) {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.cart);

  const handleRemove = (productName: any) => {
    dispatch(remove(productName));
  };

  const { content } = useContext(Translation);

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
                cursor: "pointer",
              }}
              alt="close"
            />
          </div>

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
                            <li className="list-group-item">
                              <strong>{content.price}: </strong>${" "}
                              {product.price}
                            </li>
                          </ul>
                          <p className="card-text mt-3">
                            <small className="text-muted">
                              {content.update_text} !
                            </small>
                          </p>
                          <button
                            style={{ borderRadius: "100px", height: "2rem" }}
                            className="btn btn-danger btn-sm "
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
                className="text-danger"
                style={{ borderBottom: "1px solid #dc3545", fontSize: "1rem", paddingBottom: "0.5rem", letterSpacing: "0.8px" }}
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
