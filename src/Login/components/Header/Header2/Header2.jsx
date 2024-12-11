import React, { useState } from "react";
import "./Header2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell } from "@fortawesome/free-solid-svg-icons";

function Header2() {
    const [query, setQuery] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        }
    };

    return (
        <header className="header2-container">
    <img src="/images/logo-main.png" alt="Main Logo" className="header2-logo" />
    <div className="header2-actions">
        <form className="header2-search" onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Search"
                className="search-input"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="search-button">
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </form>
        <button className="notification-button">
            <FontAwesomeIcon icon={faBell} />
            <span>What's New</span>
        </button>
    </div>
</header>
    );
}

export default Header2;
