import React, { useContext } from "react";
import { Translation } from "../../translation/TranslationContextProvider";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {AiOutlineShoppingCart} from "react-icons/ai"

import { useSelector, useDispatch } from "react-redux";
import { remove } from "../../redux/slices/cartSlice";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: '550px',
  bgcolor: "seashell",
  boxShadow: 24,
  p: 2,
  outline: "none",
  borderRadius: "7px",
  overflowY: "scroll",
  maxHeight: "60vh",
  '@media (max-width: 585px)': {
    width: '95%',
  },
};
export default function CartModal({ open, handleClose }: any) {

  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.cart);

  const handleRemove = (productName: any) => {
    dispatch(remove(productName))
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
          <div style={{display: "flex", alignItems : "flex-end", justifyContent: "center", marginBottom: "2rem"}}>
            <h4>{content.my_cart}</h4>
            &nbsp;
            &nbsp;
            &nbsp;
            <AiOutlineShoppingCart size={35} fill="#1b3b6b" />
          </div>

          { products.length > 0 ?
        products.map((product: any, index: any) => {
          return (
            <div key={index}>
              <div className="card mb-3" >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={product.image}  className="w-75 rounded-start" alt="product" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{content.brand}: {product.brand}</h5>
                      <ul className="list-group">
                        <li className="list-group-item"><strong>{content.model}: </strong>{product.model}</li>
                        <li className="list-group-item"><strong>{content.price}: </strong>$ {product.price}</li>
                      </ul>
                      <p className="card-text mt-3"><small className="text-muted">{content.update_text} !</small></p>
                      <button style={{borderRadius: "100px", height: "2.4rem"}} className="btn btn-danger" onClick={() => handleRemove(product.brand)}>{content.remove_product}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })
        :
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", height: "100%", marginBottom: "2rem"}}>
          <h6 className="text-danger" style={{borderBottom: "1px solid #dc3545"}}>{content.cart_is_empty}</h6>
        </div>
      }

          <button style={{width: 200}}  className="btn btn-dark float-end" onClick={handleClose}>{content.close}</button>
        </Box>
      </Modal>
    </div>
  );
}
