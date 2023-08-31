import React from "react";
import {Link} from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <span className="navbar-brand ms-md-3">
            <img
              src="https://www.urbansciencemep.com/_next/static/images/blackLogo-10fc2f582f155efcc2c792a97edc1f33.png"
              alt=""
              style={{ width: "70px" }}
            />
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto me-md-3 mb-2 mb-lg-0">
              <li className="nav-item">
                <span className="nav-link active" aria-current="page">
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Home
                  </Link>
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link active" aria-current="page">
                  <Link
                    to="/about"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    About
                  </Link>
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link active" aria-current="page">
                  <Link
                    to="/project"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Project
                  </Link>
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link active" aria-current="page">
                  <Link
                    to="/services"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Services
                  </Link>
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link active" aria-current="page">
                  <Link
                    to="/blog"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Blog
                  </Link>
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link active" aria-current="page">
                  <Link
                    to="/contact"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Contact
                  </Link>
                </span>
              </li>
              <button
                className="p-2"
                style={{
                  backgroundColor: "#596AFF",
                  border: "2px solid white",
                  borderRadius: "25px"
                }}
              >
                <Link
                  to="/services"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Enquire Now
                </Link>
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
