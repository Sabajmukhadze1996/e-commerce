import React, { useState, useEffect, useContext } from "react";
import { Translation } from "../../translation/TranslationContextProvider";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
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
          &nbsp;&nbsp;&nbsp;
          <div className="spinner-grow text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          &nbsp;&nbsp;&nbsp;
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
              marginTop: "20px",
            }}
          >
            <BiSearch
              size={20}
              style={{ position: "relative", left: "50px", top: "1.9px" }}
            />
            <input
              autoFocus={true}
              placeholder={content.search}
              type="text"
              onChange={(e) => handleFilter(e.target.value)}
              style={{
                maxWidth: "550px",
                width: "100%",
                outline: "none",
                border: "1px solid #d3cece",
                paddingBlock: "0.8rem",
                paddingLeft: "3.6rem",
                borderRadius: "30px",
                backgroundColor: "#fafafa",
              }}
            />
          </div>
          <h5
            className="audio-systems-title"
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
                <Card
                  id="audio-systems-card"
                  style={{
                    backgroundColor:
                      phone.available === "no" ? "#fdf1f2" : "transparent",
                  }}
                  key={index}
                >
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="100px"
                    image={phone?.image}
                    id="basic-card-img"
                    style={{ objectFit: "contain" }}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      style={{
                        width: "100%",
                        fontWeight: "bold",
                        fontSize: "0.8rem",
                      }}
                    >
                      {content.brand}:{" "}
                      <span style={{ color: "#172585" }}>{phone.brand}</span>
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      style={{
                        width: "100%",
                        fontWeight: "bold",
                        fontSize: "0.8rem",
                      }}
                    >
                      {content.price}:{" "}
                      <span style={{ color: "#28a745" }}>${phone.price}</span>
                      &nbsp;
                      <span
                        style={{
                          color: "#e31f1f",
                          textDecorationLine: "line-through",
                        }}
                      >
                        ${phone.old_price}
                      </span>
                    </Typography>

                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      style={{
                        width: "100%",
                        fontWeight: "bold",
                        fontSize: "0.8rem",
                      }}
                    >
                      {content.model}: <span>{phone.model}</span>
                    </Typography>
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
                        className="left-btn"
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

                    {phone.available === "yes" ? (
                      <Button
                        className="right-btn"
                        size="small"
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
                    ) : (
                      <Button
                        size="small"
                        style={{ backgroundColor: "#fb3030" }}
                      >
                        <span
                          style={{
                            color: "#FFFFFF",
                            fontSize: "0.65rem",
                            fontWeight: "600",
                            padding: "0 3px",
                          }}
                        >
                          {content.will_be_added_soon}!
                        </span>
                      </Button>
                    )}
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
