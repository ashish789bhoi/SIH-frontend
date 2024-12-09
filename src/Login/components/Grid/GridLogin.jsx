import React from 'react'
import "./GridLogin.css"

function GridLogin() {
  return (
    <div className="postal-container">
      <div className="buttons-container">
        <button className="tile-button">01 Income-Based Schemes</button>
        <button className="tile-button">02 Female Empowerment Initiatives</button>
        <button className="tile-button">03 Child Welfare Programs</button>
        <button className="tile-button">04 Community Development</button>
      </div>
      <div className="description-container">
        <h2>Postal Schemes & Initiatives</h2>
        <p>
        "Explore income-based schemes, female empowerment programs, child welfare initiatives, and community development projects to support rural progress and well-being."
        </p>
      </div>
    </div>
  )
}

export default GridLogin