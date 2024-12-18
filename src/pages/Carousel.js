import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Carousel.css"; // ใช้ไฟล์ CSS สำหรับปรับแต่ง

function Carousel() {
    return (
        <div className="carousel-container">
            <div id="customCarousel" className="carousel slide" data-bs-ride="carousel">
                {/* Indicators */}
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#customCarousel"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#customCarousel"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#customCarousel"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>

                {/* Carousel Items */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./img/hotel1.jpg" className="d-block w-100 custom-carousel-image" alt="Hotel 1" />
                    </div>
                    <div className="carousel-item">
                        <img src="./img/hotel2.jpg" className="d-block w-100 custom-carousel-image" alt="Hotel 2" />
                    </div>
                    <div className="carousel-item">
                        <img src="./img/hotel3.jpg" className="d-block w-100 custom-carousel-image" alt="Hotel 3" />
                    </div>
                </div>

                {/* Navigation Controls */}
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#customCarousel"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#customCarousel"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carousel;
