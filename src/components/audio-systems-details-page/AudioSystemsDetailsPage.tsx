import React, { useContext } from "react";
import { Translation } from "../../translation/TranslationContextProvider";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

const AudioSystemsDetailsPage = () => {
  const {
    image,
    brand,
    model,
    price,
    battery_life,
    water_resistant,
    wireless_range,
    bluetooth_version,
    microphone,
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
                {brand}
              </h5>
              <ul className="list-group">
                <li className="list-group-item text-secondary">
                  <span className="text-dark">
                    <strong>{content.price}:</strong> $ {price}
                  </span>
                </li>
                <li className="list-group-item text-secondary">
                  <span className="text-dark">
                    <strong>{content.model}:</strong> {model}
                  </span>
                </li>
                <li className="list-group-item text-secondary">
                  <span className="text-dark">
                    <strong>{content.battery}:</strong> {battery_life}
                  </span>
                </li>
                <li className="list-group-item text-secondary">
                  <span className="text-dark">
                    <strong>{content.water_resistant}:</strong>{" "}
                    {water_resistant ? "YES" : "NO"}
                  </span>
                </li>
                <li className="list-group-item text-secondary">
                  <span className="text-dark">
                    <strong>{content.wireless_range}:</strong> {wireless_range}
                  </span>
                </li>
                <li className="list-group-item text-secondary">
                  <span className="text-dark">
                    <strong>{content.bluetooth}:</strong> {bluetooth_version}
                  </span>
                </li>
                <li className="list-group-item text-secondary">
                  <span className="text-dark">
                    <strong>{content.microphone}:</strong> {microphone ? "YES" : "NO"}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <NavLink
            style={{
              width: "145px",
              height: "2rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "1rem",
              borderRadius: "4px",
              backgroundColor: "#007bff",
            }}
            to={"/audio-systems"}
          >
            <span className="text-white">{content.go_back}</span>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AudioSystemsDetailsPage;
