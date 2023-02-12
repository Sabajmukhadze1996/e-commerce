import React, { useContext } from "react";
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

import "./basic-card.css";

import data from "../../data/HomePageAllSmartPhones/data";

export default function BasicCard() {
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

  return (
    <div className="basic-card-container">
      <div className="filter-container">
        <input
          autoFocus={true}
          placeholder={content.search}
          className="px-2 form-control"
          type="text"
          onChange={(e) => handleFilter(e.target.value)}
        />
      </div>
      {filteredData.length > 0 ? (
        filteredData.map((phone: any, index: any) => (
          <Card id="basic-card" key={index}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="110px"
              image={phone?.image}
              id="basic-card-img"
              style={{objectFit: "contain"}}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                style={{ width: "100%" }}
              >
                {content.brand}: <span style={{color: "#172585"}}>{phone.brand}</span>
              </Typography>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                style={{ width: "100%" }}
              >
                {content.price}: <span style={{color: '#f0120e'}}>$ {phone.price}</span>
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
              style={{ justifyContent: "space-between", padding: "0px 10px" }}
            >
              <NavLink
                state={{
                  brand: phone?.brand,
                  model: phone?.model,
                  price: phone?.price,
                  image: phone?.image,
                  resolution: phone?.resolution,
                  ram_memory: phone?.ram_memory,
                  video_card_model: phone?.video_card_model,
                  refresh_rate: phone?.refresh_rate,
                  bluetooth: phone?.bluetooth,
                  display_size: phone?.display_size,
                  audio_jack: phone?.audio_jack,
                }}
                to={"/smartphones-details"}
                onClick={() => window.scrollTo(0, 0)}
              >
                <Button
                  size="small"
                  style={{ background: "#343a40", borderRadius: "100px" }}
                >
                  <span
                    style={{
                      color: "#FFFFFF",
                      fontSize: "0.7rem",
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
                style={{ background: "#0073e6", borderRadius: "100px"  }}
                onClick={() => handleAdd(phone)}
              >
                <span
                  style={{
                    color: "#FFFFFF",
                    fontSize: "0.7rem",
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
            <Typography variant="h6">{content.product_not_found}</Typography>
            <MdOutlineRemoveShoppingCart size={40} />
          </div>
        </div>
      )}
    </div>
  );
}
