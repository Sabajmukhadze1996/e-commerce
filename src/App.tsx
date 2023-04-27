import React, { useContext } from "react";
import { SignupContext } from "./components/signup/SignUpContextProvider";
import BasicCard from "./components/basic-card/BasicCard";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/homepage/accessories/HomePage";
import SmartPhonesDetailsPage from "./components/smartphones-details-page/SmartPhonesDetailsPage";
import LaptopsPage from "./components/laptops-page/LaptopsPage";
import LaptopsDetailsPage from "./components/laptops-details-page/LaptopsDetailsPage";
import AudioSystemsPage from "./components/audio-systems-page/AudioSystemsPage";
import AudioSystemsDetailsPage from "./components/audio-systems-details-page/AudioSystemsDetailsPage";
import { Footer } from "./components/footer/Footer";
import Signup from "./components/signup/Signup";
import { FaUserCircle } from "react-icons/fa";
import Banks from "./components/banks/Banks";

const App: React.FC = () => {
  const { isSubmitted, userName } = useContext(SignupContext);

  return (
    <>
      {isSubmitted ? (
        <div className="app">
          <Navbar />
          <main id="main">




            <Banks />




            <Routes>
              <Route>
                <Route path="/*"  element={<HomePage />} />
              </Route>

              <Route>
                <Route path="/smartphones" element={<BasicCard />} />
                <Route
                  path="/smartphones-details"
                  element={<SmartPhonesDetailsPage />}
                />
              </Route>
              <Route>
                <Route path="/laptops-page" element={<LaptopsPage />} />
                <Route
                  path="/laptops-details-page"
                  element={<LaptopsDetailsPage />}
                />
              </Route>
              <Route>
                <Route path="/audio-systems" element={<AudioSystemsPage />} />
                <Route
                  path="/audio-systems-details-page"
                  element={<AudioSystemsDetailsPage />}
                />
              </Route>
            </Routes>
          </main>
          <Footer />
        </div>
      ) : (
        <Signup />
      )}
    </>
  );
};

export default App;
