import { React, useState } from "react";
import siteLogo from "../../resources/site-logo-small.png";
import Masthead from "../Masthead";
import LoginMenu from "../LoginMenu";
import HeaderWarning from "../HeaderWarning";

const navbarcontents = [
  {
    name: "Buying a flat",
    url: "",
  },
  {
    name: "Managing my home",
    url: "",
  },
  {
    name: "Renting a flat",
    url: "",
  },
  {
    name: "Shops & offices",
    url: "",
  },
  {
    name: "Business partners",
    url: "",
  },
  {
    name: "Parking",
    url: "",
  },
  {
    name: "e-Services",
    url: "",
  },
];

export default function P2Header() {
  // This is to Toggle the Search Bar #######################################
  const [toggleSearch, setSearchbar] = useState(false);

  // This is to Toogle the warning icon
  const [warningIcon, setWarningicon] = useState(false);

  const clickSearch = () => {
    if (toggleSearch == true) {
      setSearchbar(false);
    } else {
      setSearchbar(true);
      setWarningicon(false);
    }
  };

  const clickWarning = () => {
    if (warningIcon == true) {
      setWarningicon(false);
    } else {
      setWarningicon(true);
      setSearchbar(false);
    }
  };

  //This is to Toggle Login box
  const [isnotLogin, setLog] = useState(true);
  return (
    <>
      <Masthead></Masthead>
      <div className="shadow">
        <header className="flex-wrap">
          <div className="container d-flex">
            <div className="col-md-3">
              <img src={siteLogo} alt="" className="site-logo my-3" />
            </div>
            <ul className="nav col-9 justify-content-md-end justify-content-lg-end">
              <li className="px-3 pt-4 d-none d-lg-block">
                <a
                  href="#"
                  className="text-decoration-none text-black me-2 fw-bold"
                >
                  About Us
                </a>
              </li>
              {isnotLogin ? (
                <li className="p-3">
                  <button type="button" className="btn btn-primary-2 me-2">
                    <i className="bi bi-lock-fill pe-2"></i>
                    Login
                    {/* <i className="bi bi-chevron-down ps-2"></i> */}
                  </button>
                </li>
              ) : (
                <li className="p-3">
                  <a type="button" className="btn btn-primary-2 me-2">
                    <i className="bi bi-box-arrow-right pe-2"></i>
                    Logout
                    {/* <i className="bi bi-chevron-down ps-2"></i> */}
                  </a>
                </li>
              )}
              <li className="d-lg-none bg-lighter-teal p-3">
                <a className="fs-4">
                  <i className="bi bi-list"></i>
                </a>
              </li>

              <li className="p-3">
                <a className="fs-4" onClick={clickWarning}>
                  <i
                    className="bi bi-exclamation-triangle"
                    style={{ color: "red" }}
                  ></i>
                </a>
              </li>
              <li className="px-4 pt-4 d-none d-lg-block">
                <a className="text-black" onClick={clickSearch}>
                  {toggleSearch ? (
                    <i className="bi bi-x-lg"></i>
                  ) : (
                    <i className="bi bi-search"></i>
                  )}
                </a>
              </li>
            </ul>
          </div>
          {toggleSearch ? (
            <div className="container d-flex">
              <div className="input-group flex-nowrap">
                <input
                  type="search"
                  className="form-control form-control-lg border border-0"
                  placeholder="Search our website"
                  aria-label=".form-control-lg example"
                  aria-describedby="addon-wrapping"
                />
                <span
                  className="input-group-text bg-white border-0"
                  id="addon-wrapping"
                >
                  <i className="bi bi-search"></i>
                </span>
              </div>
            </div>
          ) : (
            ""
          )}
          {warningIcon ? <HeaderWarning toggle={clickWarning} /> : ""}
          {/* Navbar content */}
          <nav className="col-12 navbar navbar-expand-lg bg-body-tertiary py-0">
            <div
              className="collapse navbar-collapse justify-content-center"
              style={{ backgroundColor: "rgb(112, 112, 112)" }}
            >
              <div className="navbar-nav">
                {navbarcontents?.map((content) => (
                  <a className="nav-link text-white px-4" href={content.url}>
                    {content.name}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}
