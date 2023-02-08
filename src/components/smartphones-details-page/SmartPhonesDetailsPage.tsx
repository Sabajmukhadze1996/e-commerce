import React, { useContext } from "react";
import { Translation } from "../../translation/TranslationContextProvider";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

const SmartPhonesDetailsPage = () => {
  const {
    brand,
    model,
    price,
    image,
    resolution,
    ram_memory,
    video_card_model,
    refresh_rate,
    bluetooth,
    display_size,
    audio_jack,
  } = useLocation().state;

  const { content } = useContext(Translation);


  return (
    <>
      <div
        className="card mb-3"
        style={{ maxWidth: "840px", margin: "0 auto" }}
      >
        <div className="row g-0">
          <div className="col-sm-4">
            <img src={image} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-secondary">
                <span className="text-dark">
                  <strong>{content.brand}:</strong>
                </span>{" "}
                <span style={{color: "#172585", textTransform: "uppercase"}}>{brand}</span>
              </h5>
              <ul className="list-group">
                <li className="list-group-item text-secondary">
                  <span className="text-dark">
                    <strong style={{color: "#172585"}}>{content.price}:</strong> $ {price}
                  </span>
                </li>
                <li className="list-group-item text-secondary">
                  <span className="text-dark">
                    <strong style={{color: "#172585"}}>{content.model}:</strong> {model}
                  </span>
                </li>
                <li className="list-group-item text-secondary">
                  <span className="text-dark">
                    <strong style={{color: "#172585"}}>{content.resolution}:</strong> {resolution}
                  </span>
                </li>
                <li className="list-group-item text-secondary">
                  <span className="text-dark">
                    <strong style={{color: "#172585"}}>{content.ram_memory}:</strong> {ram_memory} GB
                  </span>
                </li>
                <li className="list-group-item text-secondary">
                  <span className="text-dark">
                    <strong style={{color: "#172585"}}>{content.features}:</strong> {refresh_rate}
                  </span>
                </li>
                <li className="list-group-item text-secondary">
                  <span className="text-dark">
                    <strong style={{color: "#172585"}}>{content.bluetooth}:</strong> {bluetooth}
                  </span>
                </li>
                <li className="list-group-item text-secondary">
                  <span className="text-dark">
                    <strong style={{color: "#172585"}}>{content.display_size}:</strong> {display_size} INCH
                  </span>
                </li>
                <li className="list-group-item text-secondary">
                  <span className="text-dark">
                    <strong style={{color: "#172585"}}>{content.audio_jack}:</strong> {audio_jack ? "YES" : "NO"}
                  </span>
                </li>
                <li className="list-group-item text-secondary">
                  <span className="text-dark">
                    <strong style={{color: "#172585"}}>{content.video_card}:</strong> {video_card_model}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <NavLink
            style={{
              width: "166px",
              height: "2.5rem",
              display: "flex",
              justifyContent: "center",
              alignItems:"center",
              margin: "1rem",
              borderRadius: "100px",
              backgroundColor: "#172585",
            }}
            to={"/"}
          >
            <span className="text-white">{content.go_back}</span>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default SmartPhonesDetailsPage;
