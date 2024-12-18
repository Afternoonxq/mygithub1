import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Reserve.css"; // ไฟล์ CSS สำหรับปรับแต่ง

function Reserve() {
    return (
        <div className="reserve-container">
            <div className="reserve-selection">
                <div className="selection-box">
                    <label>ประเภทห้อง</label>
                    <select>
                        <option>ห้องเดี่ยว</option>
                        <option>ห้องเตียงคู่</option>
                        <option>ห้องดีลักซ์</option>
                        <option>ห้องสตูดิโอ</option>
                        <option>ห้องจูเนียร์สวีท</option>
                        <option>ห้องเอ็กเซ็กคูทีฟสวีท</option>
                        <option>ห้องเพรซิเดนเชียลสวีท</option>
                    </select>
                </div>
                <div className="selection-box">
                    <label>เข้า</label>
                    <input type="date" />
                </div>
                <div className="selection-box">
                    <label>เวลา</label>
                    <select>
                        <option>06:00</option>
                        <option>07:00</option>
                        <option>08:00</option>
                        <option>09:00</option>
                        <option>10:00</option>
                        <option>11:00</option>
                        <option>12:00</option>
                    </select>
                </div>
                <div className="selection-box">
                    <label>ออก</label>
                    <input type="date" />
                </div>
                <div className="selection-box">
                    <label>เวลา</label>
                    <select>
                        <option>06:00</option>
                        <option>07:00</option>
                        <option>08:00</option>
                        <option>09:00</option>
                        <option>10:00</option>
                        <option>11:00</option>
                        <option>12:00</option>
                    </select>
                </div>
            </div>

            <div className="reserve-content">
                <div className="room-preview">
                    <img src="./img/hotel1.jpg" alt="Room" className="main-room-image" />
                </div>
                <div className="room-description">
                    <p>
                        ห้องเดี่ยวเหมาะสำหรับผู้ที่มีความต้องการความเป็นส่วนตัวและสะดวกสบาย อันที่โรงแรมของเราก็มีให้เตรียมพร้อมสำหรับคุณ โดยเตียงของเราถูกผลิตขึ้นมาจากขนเป็ดอย่างดีที่จะทำให้เตียงนั้นนุ่มฟูอย่างไม่น่าเชื่อ
                    </p>
                </div>
            </div>

            <div className="room-gallery">
                <img src="./img/hotel1.jpg" alt="Room 1" />
                <img src="./img/hotel2.jpg" alt="Room 2" />
                <img src="./img/hotel3.jpg" alt="Room 3" />
                <img src="./img/hotel4.jpg" alt="Room 4" />
                <img src="./img/hotel5.jpg" alt="Room 5" />
            </div>

            <div className="reserve-button">
                <button>จอง</button>
            </div>
        </div>
    );
}

export default Reserve;