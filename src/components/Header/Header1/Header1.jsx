import React, { useEffect, useState } from "react";
import "./Header1.css";

function Header1() {
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const options = { year: "numeric", month: "long", day: "2-digit" };
            const datePart = now.toLocaleDateString("en-US", options);
            const timePart = now
                .toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false })
                .replace(":", ".");
            setCurrentTime(`${datePart} | ${timePart} hrs`);
        };
        updateTime();
        const interval = setInterval(updateTime, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <header className="header1-container">
            <div className="header1-left">
                <img src="/images/h1logo.png" alt="UDAY Logo" className="header1-logo" />
                <div className="header1-text">
                    <h1>GOVERNMENT OF INDIA</h1>
                    <h2>MINISTRY OF COMMUNICATIONS</h2>
                </div>
            </div>
            <div className="header1-right">
                <span className="header1-time">{currentTime}</span>
                <div className="font-controls">
                    <button className="font-btn">A-</button>
                    <button className="font-btn">A</button>
                    <button className="font-btn">A+</button>
                </div>
                <select className="language-dropdown">
                    <option value="english">English</option>
                    <option value="hindi">Hindi</option>
                    <option value="tamil">Tamil</option>
                    <option value="malayalam">Malayalam</option>
                    <option value="magahi">Malayalam</option>
                </select>
            </div>
        </header>
    );
}

export default Header1;
