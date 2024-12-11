import React, { useEffect, useState } from "react";
import "./Header1.css";

function Header1() {
    const [currentTime, setCurrentTime] = useState("");
    const [fontMode, setFontMode] = useState("normal");
    const [showTooltip, setShowTooltip] = useState(false);
    const [tooltipText, setTooltipText] = useState("");

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

    const handleFontChange = (mode) => {
        setFontMode(mode);
    };

    const handleMouseEnter = (language) => {
        if (language !== "English") {
            setShowTooltip(true);
            setTooltipText(`${language} support is not available in the current version.`);
        }
    };

    const handleMouseLeave = () => {
        setShowTooltip(false);
        setTooltipText("");
    };

    return (
        <header className="header1-container">
            <div class="header1-left-container">
    <div class="header1-section">
        <img src="/images/h1logo.png" alt="UDAY Logo" class="header1-logo" />
        <div class="header1-text">
            <h1>GOVERNMENT OF INDIA</h1>
            <h2>MINISTRY OF COMMUNICATIONS</h2>
        </div>
    </div>
    <div class="header1-section">
        <img src="/images/Ip.png" alt="Department Logo" class="header1-logo" />
        <div class="header1-text">
            <h1>DEPARTMENT OF POSTS</h1>
            <h2>INDIA POST</h2>

        </div>
    </div>
</div>
            <div className="header1-right">
                <span className="header1-time">{currentTime}</span>
                <div className="font-controls">
                    <button
                        className={`font-btn ${fontMode === "small" ? "active" : ""}`}
                        onClick={() => handleFontChange("small")}
                    >
                        A-
                    </button>
                    <button
                        className={`font-btn ${fontMode === "normal" ? "active" : ""}`}
                        onClick={() => handleFontChange("normal")}
                    >
                        A
                    </button>
                    <button
                        className={`font-btn ${fontMode === "large" ? "active" : ""}`}
                        onClick={() => handleFontChange("large")}
                    >
                        A+
                    </button>
                </div>
                <div className="language-dropdown-container">
                    <select
                        className="language-dropdown"
                        onMouseLeave={handleMouseLeave}
                    >
                        <option value="english" onMouseEnter={() => handleMouseLeave()}>
                            English
                        </option>
                        <option
                            value="hindi"
                            disabled
                            onMouseEnter={() => handleMouseEnter("Hindi")}
                        >
                            हिन्दी
                        </option>
                        <option
                            value="tamil"
                            disabled
                            onMouseEnter={() => handleMouseEnter("Tamil")}
                        >
                            தமிழ்
                        </option>
                        <option
                            value="telugu"
                            disabled
                            onMouseEnter={() => handleMouseEnter("Telugu")}
                        >
                            తెలుగు
                        </option>
                        <option
                            value="magahi"
                            disabled
                            onMouseEnter={() => handleMouseEnter("Magahi")}
                        >
                            𑂧𑂏𑂡𑂲
                        </option>
                        <option
                            value="marathi"
                            disabled
                            onMouseEnter={() => handleMouseEnter("Marathi")}
                        >
                            मराठी
                        </option>
                    </select>
                    {showTooltip && <div className="tooltip">{tooltipText}</div>}
                </div>
            </div>
        </header>
    );
}

export default Header1;
