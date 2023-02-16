import React, { useContext } from "react";
import { Translation } from "../../../translation/TranslationContextProvider";
import data from "../../../data/HomePageAllCameras/data/data";
import HomePageDetailsModal from "../HomePageDetailsModal";
import HomePageCartAddedAlertModal from "../HomePageCartAddedAlertModal";

import { useDispatch } from "react-redux";
import { add } from "../../../redux/slices/cartSlice";

const PhotographyCard = ({}: any) => {
  const [selectedProduct, setSelectedProduct] = React.useState<any>(null);
  const [open, setOpen] = React.useState(false);

  const handleOpenDetailsModal = (product: any) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleCloseDetailsModal = () => {
    setSelectedProduct(null);
    setOpen(false);
  };

  // redux operation passing object as a payload
  const dispatch = useDispatch();

  const handleAdd = (product: any) => {
    dispatch(add(product));
  };

  const [openAddedCartModal, setOpenAddedCartModal] = React.useState(false);
  const handleCloseCartAddedModal = () => setOpenAddedCartModal(false);


  const { content } = useContext(Translation);

  return (
    <>
      {data.map((product: any, index: any) => {
        return (
          <div key={index} className="accessories-card">
            <div className="accessories-card-img-container">
              <img
                src={product.image}
                className="accessories-card-img"
                alt=".."
              />
            </div>
            <div className="accessories-card-descr-container">
              <h2 style={{ fontSize: "0.83rem" }}>
                <span style={{ color: "#070739", fontWeight: "400" }}>
                {content.brand}: {product.brand}
                </span>
              </h2>
              <p style={{ fontSize: "0.9em" }}>
                <span style={{ color: "#070739", fontWeight: "400" }}>
                {content.model}: {product.model}
                </span>
              </p>
              <div style={{ display: "flex" }}>
                <span style={{ color: "#070739", fontWeight: "400" }}>
                {content.price}:
                </span>
                &nbsp;
                <p style={{ fontSize: "0.9em", color: "#28a745" }}>
                  $ {product.price}
                </p>
                &nbsp; &nbsp;
                <p
                  style={{
                    fontSize: "0.9em",
                    color: "#e31f1f",
                    fontWeight: "500",
                    textDecoration: "line-through",
                  }}
                >
                  $ {product.old_price}
                </p>
              </div>
              <button
                style={{
                  borderRadius: "100px",
                  outline: "none",
                  border: "none",
                  fontSize: "0.7em",
                  paddingInline: "0.6rem",
                  paddingBlock: "0.18rem",
                  backgroundColor: "#343a40",
                  color: "#FFFFFF",
                }}
                onClick={() => handleOpenDetailsModal(product)}
              >
                {content.see_details}
              </button>
              &nbsp; &nbsp;
              <button
                style={{
                  borderRadius: "100px",
                  outline: "none",
                  border: "none",
                  fontSize: "0.7em",
                  paddingInline: "0.6rem",
                  paddingBlock: "0.18rem",
                  backgroundColor: "#0073e6",
                  color: "#FFFFFF",
                }}
                onClick={() => {handleAdd(product); setOpenAddedCartModal(true)}}
              >
                {content.add_to_cart}
              </button>
            </div>
          </div>
        );
      })}
      {selectedProduct && (
        <HomePageDetailsModal
          open={open}
          setOpen={setOpen}
          handleCloseDetailsModal={handleCloseDetailsModal}
          name={selectedProduct.brand}
          model={selectedProduct.model}
          price={selectedProduct.price}
          oldPrice={selectedProduct.old_price}
          release_year={selectedProduct.release_year}
          image={selectedProduct.image}
          weight={selectedProduct.weight}
          battery_mah={selectedProduct.battery_mah}
          chipset={selectedProduct.chipset}
        />
      )}

      <HomePageCartAddedAlertModal
        open={openAddedCartModal}
        setOpen={setOpen}
        handleCloseCartAddedModal={handleCloseCartAddedModal}
      />
    </>
  );
};

export default PhotographyCard;
