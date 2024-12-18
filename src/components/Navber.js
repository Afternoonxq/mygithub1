import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    const goToReservePage = () => {
        navigate("/reserve");
    };

    return (
        <div className="row">
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#3366ff", color: "white" }}>
                <div className="container-fluid">
                    {/* Logo and Hotel Name Section */}
                    <div className="d-flex align-items-center">
                        <img
                            src="./img/hotel.png"
                            alt="Hotel Logo"
                            style={{ width: "40px", height: "40px", borderRadius: "50%", marginRight: "10px" }}
                        />
                        <span style={{ fontSize: "18px", fontWeight: "bold", color: "white" }}>Hotel</span>
                    </div>

                    {/* Navbar Items */}
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
                        <ul className="navbar-nav ms-auto d-flex align-items-center">
                            {/* Room Button */}
                            <li className="nav-item">
                                <button
                                    className="btn btn-light"
                                    style={{ color: "#3366ff", marginRight: "15px", fontWeight: "bold" }}
                                    onClick={goToReservePage}
                                >
                                    ดูห้องพัก
                                </button>
                            </li>
                            {/* Currency Dropdown */}
                            <li className="nav-item">
                                <button
                                    className="btn btn-light"
                                    style={{ color: "#3366ff", marginRight: "15px", fontWeight: "bold" }}
                                >
                                    THB
                                </button>
                            </li>
                            {/* Language Flag */}
                            <li className="nav-item">
                                <img
                                    src="./img/thai.jpg"
                                    alt="Thai Flag"
                                    style={{ width: "30px", height: "20px", marginRight: "15px" }}
                                />
                            </li>
                            {/* Notification Icon */}
                            <li className="nav-item">
                                <span className="nav-link" style={{ fontSize: "20px", marginRight: "15px", color: "white" }}>🔔</span>
                            </li>
                            {/* User Section */}
                            <li className="nav-item">
                                <div className="d-flex align-items-center">
                                    <img
                                        src="./img/phofi.jpg"
                                        alt="User Avatar"
                                        style={{ width: "30px", height: "30px", borderRadius: "50%", marginRight: "5px" }}
                                    />
                                    <span style={{ color: "white" }}>User</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
