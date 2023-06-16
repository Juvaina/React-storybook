import React from "react";

const showCurrentYear = () => {
  return new Date().getFullYear();
};

export default function P2Footer() {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#323232",
          borderTop: "10px solid #0A676D",
        }}
      >
        <div className="container">
          <div className="footer_title px-4">Housing & Development Board</div>
        </div>
        <div className="container">
          <footer className="py-4 px-4">
            <div className="row">
              <div className="col-lg-2 mb-lg-3">
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="#" className="footer_text">
                      About
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="footer_text">
                      HDB Pulse
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="footer_text">
                      Buying a flat
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 mb-lg-3">
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="#" className="footer_text">
                      Managing my home
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="footer_text">
                      Renting a flat
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="footer_text">
                      Shops and offices
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 mb-3">
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="#" className="footer_text">
                      Business with HDB
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="footer_text">
                      Parking
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="footer_text">
                      e-Services
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="container border-top border-secondary">
              <div className="row">
                <ul className="nav col-4 col-md-2 col-lg-12 justify-content-lg-end py-2 mt-2">
                  <li className="nav-item mb-2">
                    <a href="#" className="px-lg-2 footer_text ">
                      Contact Us
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a
                      href="#"
                      className="px-lg-3 footer_text border-end border-secondary"
                    >
                      Feedback
                    </a>
                  </li>
                  <li className="nav-item my-2 d-flex">
                    <div className="social_icon ps-lg-4">
                      <a
                        href="https://www.facebook.com/SingaporeHDB"
                        className="ps-4"
                      >
                        <span className="facebook"></span>
                      </a>
                    </div>
                    <div className="social_icon ps-4">
                      <a
                        href="https://www.facebook.com/SingaporeHDB"
                        className="ps-4"
                      >
                        <i className="twitter"></i>
                      </a>
                    </div>
                    <div className="social_icon ps-4">
                      <a
                        href="https://www.facebook.com/SingaporeHDB"
                        className="ps-4"
                      >
                        <i className="linkedin"></i>
                      </a>
                    </div>
                    <div className="social_icon ps-4">
                      <a
                        href="https://www.facebook.com/SingaporeHDB"
                        className="ps-4"
                      >
                        <i className="youtube"></i>
                      </a>
                    </div>
                    <div className="social_icon ps-4">
                      <a
                        href="https://www.facebook.com/SingaporeHDB"
                        className="ps-4"
                      >
                        <i className="telegram"></i>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="container border-top border-secondary">
              <div className="row">
                <ul className="nav col-6 col-md-3 col-lg-12 py-2 mt-2">
                  <li className="nav-item mb-2 border-end border-secondary">
                    <a href="#" className=" footer_text">
                      Report Vulnerability
                    </a>
                    <i className="bi bi-box-arrow-up-right px-lg-3 footer_text"></i>
                  </li>
                  <li className="nav-item mb-2 border-end border-secondary">
                    <a href="#" className="px-lg-3 footer_text">
                      Privacy Statement
                    </a>
                  </li>
                  <li className="nav-item mb-2 border-end border-secondary">
                    <a href="#" className="pe-sm-2 px-lg-3 footer_text">
                      Terms of Use
                    </a>
                  </li>
                  <li className="nav-item mb-2 border-end border-secondary">
                    <a href="#" className="px-lg-3 pe-sm-4 footer_text">
                      Sitemap
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="px-lg-3 footer_text">
                      Site Requirements
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="d-flex justify-content-lg-end footer_text"
              style={{ height: "20px" }}
            >
              <p>Copyright © {showCurrentYear()}, Government of Singapore</p>
            </div>
            <div className="d-flex justify-content-lg-end footer_text">
              <p>Last Updated 27 Apr 2023</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
