import React, { useContext } from "react";
import { Translation } from "../../../translation/TranslationContextProvider";
import data from "../../../data/HomePageAllAccessories/data/data";
import HomePageDetailsModal from "../HomePageDetailsModal";
import HomePageCartAddedAlertModal from "../HomePageCartAddedAlertModal";

import { useDispatch } from "react-redux";
import { add } from "../../../redux/slices/cartSlice";

const AccessoriesCard = ({}: any) => {
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
          <div
            style={{
              backgroundColor:
                product.available === "yes" ? "transparent" : "#fdf1f2",
            }}
            key={index}
            className="accessories-card"
          >
            <div className="accessories-card-img-container">
              <img
                src={product.image}
                className="accessories-card-img"
                alt="product"
              />
            </div>
            <div className="accessories-card-descr-container">
              <h2 style={{ fontSize: "0.83rem" }}>
                <span style={{ fontWeight: "400" }}>
                  <strong style={{ color: "#444" }}>{content.brand}:</strong>{" "}
                  <span style={{ marginTop: "-19px" }}>{product.brand}</span>
                </span>
              </h2>
              <p style={{ fontSize: "0.9em" }}>
                <span style={{ fontWeight: "400" }}>
                  <strong style={{ color: "#444" }}>{content.model}:</strong>{" "}
                  <span style={{ marginTop: "-17px" }}>{product.model}</span>
                </span>
              </p>
              <div style={{ display: "flex" }}>
                <span style={{ fontWeight: "400" }}>
                  <strong style={{ color: "#444" }}>{content.price}:</strong>
                </span>
                &nbsp;
                <p
                  id="product-new-price"
                  style={{
                    fontSize: "0.9em",
                    color: "#28a745",
                    marginTop: "3px",
                    fontWeight: "600",
                  }}
                >
                  $ {product.price}
                </p>
                &nbsp; &nbsp;
                <p
                  id="product-old-price"
                  style={{
                    fontSize: "0.9em",
                    color: "#e31f1f",
                    fontWeight: "500",
                    textDecoration: "line-through",
                    marginTop: "3px",
                  }}
                >
                  $ {product.old_price}
                </p>
              </div>
              <div className="accessories-cart-btns-container">
                <button
                  className="accessories-cart-left-btn"
                  onClick={() => handleOpenDetailsModal(product)}
                >
                  {content.see_details}
                </button>
                &nbsp; &nbsp; &nbsp; &nbsp;
                {product.available === "no" ? (
                  <button
                    style={{ backgroundColor: "#ec0f0f" }}
                    className="accessories-cart-right-btn"
                  >
                    {content.will_be_added_soon}!
                  </button>
                ) : (
                  <button
                    className="accessories-cart-right-btn"
                    onClick={() => {
                      handleAdd(product);
                      setOpenAddedCartModal(true);
                    }}
                  >
                    {content.add_to_cart}
                  </button>
                )}
              </div>
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

export default AccessoriesCard;
