import React, { useState, useEffect, useContext } from "react";
import { Translation } from "../../translation/TranslationContextProvider";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom";

import { useDispatch } from "react-redux";
import { add } from "../../redux/slices/cartSlice";
import AddToCartModal from "../add-to-cart-modal/AddToCartModal";

import "./audio-systems.css";

import data from "../../data/HomePageAllAudioSystems/data";

export default function AudioSystemsPage() {
  const [filteredData, setFilteredData] = React.useState(data);

  const handleFilter = (input: string) => {
    const filtered = data.filter(
      (phone: any) =>
        phone.brand.toLowerCase().includes(input.toLowerCase()) ||
        phone.model.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const dispatch = useDispatch();

  const handleAdd = (product: any) => {
    dispatch(add(product));
  };

  const { content } = useContext(Translation);

  const [open, setOpen] = React.useState(false);
  const handleCloseCartAddedModal = () => setOpen(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 600);
  }, []);

  return (
    <>
      {loading ? (
        <div
          style={{
            height: "32vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <div className="spinner-grow text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1.5rem",
            }}
          >
            <input
              autoFocus={true}
              placeholder={content.search}
              className="px-3"
              type="text"
              onChange={(e) => handleFilter(e.target.value)}
              style={{
                width: "310px",
                outline: "none",
                borderRadius: "100px",
                border: "1px solid #d3cece",
                paddingBlock: "0.3rem",
              }}
            />
          </div>
          <h5
            style={{
              textAlign: "center",
              marginBottom: "1.5rem",
              color: "brown",
              fontWeight: "400",
            }}
          >
            {content.audio_systems}
          </h5>
          <div className="audio-systems-card-container">
            <AddToCartModal
              open={open}
              setOpen={setOpen}
              handleCloseCartAddedModal={handleCloseCartAddedModal}
            />
            {filteredData.length > 0 ? (
              filteredData.map((phone: any, index: any) => (
                <Card id="audio-systems-card" key={index}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="81px"
                    image={phone?.image}
                    id="basic-card-img"
                    style={{ objectFit: "contain" }}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      style={{ width: "100%", fontSize: "0.9rem" }}
                    >
                      {content.brand}:{" "}
                      <span style={{ color: "#172585" }}>{phone.brand}</span>
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      style={{ width: "100%", fontSize: "0.9rem" }}
                    >
                      {content.price}:{" "}
                      <span style={{ color: "#f0120e" }}>$ {phone.price}</span>
                    </Typography>
                    <li
                      style={{
                        fontSize: "0.8rem",
                        listStyle: "none",
                        padding: "0 3px",
                      }}
                    >
                      <strong>{content.model}:</strong>{" "}
                      <span style={{ fontWeight: "600" }}>{phone.model}</span>
                    </li>
                  </CardContent>
                  <CardActions
                    style={{
                      justifyContent: "space-between",
                      padding: "0px 10px",
                    }}
                  >
                    <NavLink
                      state={{
                        image: phone?.image,
                        brand: phone?.brand,
                        model: phone?.model,
                        price: phone?.price,
                        battery_life: phone?.battery_life,
                        water_resistant: phone?.water_resistant,
                        wireless_range: phone?.wireless_range,
                        bluetooth_version: phone?.bluetooth_version,
                        microphone: phone?.microphone,
                      }}
                      to={"/audio-systems-details-page"}
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <Button
                        size="small"
                        style={{ background: "#343a40", borderRadius: "100px" }}
                      >
                        <span
                          style={{
                            color: "#FFFFFF",
                            fontSize: "0.65rem",
                            fontWeight: "600",
                            padding: "0 3px",
                          }}
                        >
                          {content.see_details}
                        </span>
                      </Button>
                    </NavLink>
                    <Button
                      size="small"
                      style={{ background: "#0073e6", borderRadius: "100px" }}
                      onClick={() => {
                        handleAdd(phone);
                        setOpen(true);
                      }}
                    >
                      <span
                        style={{
                          color: "#FFFFFF",
                          fontSize: "0.65rem",
                          fontWeight: "600",
                          padding: "0 3px",
                        }}
                      >
                        {content.add_to_cart}
                      </span>
                    </Button>
                  </CardActions>
                </Card>
              ))
            ) : (
              <div
                className="product-not-found"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <div>
                  <Typography variant="h6">
                    {content.product_not_found}
                  </Typography>
                  <MdOutlineRemoveShoppingCart size={40} />
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}
