import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Page.css";
import { Link } from "react-router-dom";

function Page() {
    return (
        <div className="container my-5">
            {/* Image Row */}
            <div className="row justify-content-center mb-4">
                <div className="col-md-5 mb-3 mb-md-0">
                    <img
                        src="./img/hotel4.jpg"
                        alt="Gallery Image 1"
                        className="img-fluid rounded shadow gallery-image"
                    />
                </div>
                <div className="col-md-5">
                    <img
                        src="./img/hotel5.jpg"
                        alt="Gallery Image 2"
                        className="img-fluid rounded shadow gallery-image"
                    />
                </div>
            </div>
            <div className="container">
                {/* ภาพรวมโรงแรม */}
                <section className="overview mb-4">
                    <h2>ภาพรวมโรงแรม</h2>
                    <p>
                        นอกจากที่พักจะได้รับการรับรองมาตรฐาน SHA ที่พักยังมีบริการ Wi-Fi ฟรี
                        ในทุกห้องพัก และที่จอดรถฟรี ที่พักตั้งอยู่ในย่านตัวเมือง หนองคาย
                        จึงอยู่ใกล้กับที่เที่ยวมากมายและสะดวกต่อการเดินทางไปสถานที่ต่างๆ
                        ทริปยังไม่จบถ้าไม่ได้แวะไปที่เที่ยวชื่อดังอย่างสะพานมิตรภาพไทย-ลาว
                        ที่พัก 3 ดาวคุณภาพสูงแห่งนี้มีบริการนวด, สระว่ายน้ำกลางแจ้ง และห้องอาหารคอยอำนวยความสะดวกแก่ผู้เข้าพัก
                    </p>
                </section>

                {/* บริการเด่น */}
                <section className="services mb-4">
                    <h2>บริการเด่น</h2>
                    <ul>
                        <li>บริการขนส่งสาธารณะในระยะ 650 เมตร</li>
                        <li>แผนกต้อนรับ (24 ชั่วโมง)</li>
                        <li>ใจกลางเมือง</li>
                        <li>Wi-Fi ทุกห้อง (ฟรี)</li>
                        <li>คาโรเกะ</li>
                    </ul>
                </section>

                {/* โปรโมชั่น */}
                <section className="promotion mb-4">
                    <h2>โปรโมชั่น</h2>
                    <div className="promo-item mb-3">
                        <h3>1. โปรโมชั่นจองล่วงหน้า (Early Bird)</h3>
                        <ul>
                            <li>ลด 20% สำหรับการจองล่วงหน้า 30 วัน</li>
                            <li>ลด 10% สำหรับการจองล่วงหน้า 15 วัน</li>
                            <li>ระยะเวลา: ตั้งแต่วันนี้ถึง 31 ธันวาคม 2024</li>
                        </ul>
                    </div>
                    <div className="promo-item">
                        <h3>2. พักนานคุ้มกว่า (Stay Longer, Pay Less)</h3>
                        <ul>
                            <li>เข้าพัก 3 คืน ฟรี 1 คืน</li>
                            <li>ส่วนลด 30% สำหรับการจอง 7 คืนขึ้นไป</li>
                            <li>เงื่อนไข: โปรโมชั่นนี้ใช้ได้สำหรับทุกประเภทห้องพัก</li>
                        </ul>
                    </div>
                </section>

                <div className="container my-5">
                {/* เนื้อหาหน้า */}
                <section className="view-room text-center">
                    <Link to="/reserve">
                    <button className="btn-view-room">ดูห้องพัก</button>
                    </Link>
                </section>
                </div>

            </div>
        </div>
    );
}

export default Page;
