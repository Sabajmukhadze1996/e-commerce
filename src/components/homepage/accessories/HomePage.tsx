import React, { useContext, useEffect, useState } from "react";
import { Translation } from "../../../translation/TranslationContextProvider";
import AccesorriesCard from "./AccessoriesCard";
import "./Accessories.css";
import WatchesCard from "../watches/WatchesCard";
import PhotographyCard from "../photography/PhotographyCard";

const HomePage = () => {
  const { content } = useContext(Translation);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
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
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          <h5
            style={{
              color: "brown",
              marginBottom: "1.1rem",
              textAlign: "center",
            }}
          >
            {content.accessories}...
          </h5>
          <div className="accessories-container">
            <AccesorriesCard />
          </div>

          <h5
            style={{
              color: "brown",
              marginBottom: "1.1rem",
              marginTop: "2rem",
              textAlign: "center",
            }}
          >
            {content.watches}...
          </h5>
          <div className="accessories-container">
            <WatchesCard />
          </div>

          <h5
            style={{
              color: "brown",
              marginBottom: "1.1rem",
              marginTop: "2rem",
              textAlign: "center",
            }}
          >
            {content.photography}...
          </h5>
          <div className="accessories-container">
            <PhotographyCard />
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
