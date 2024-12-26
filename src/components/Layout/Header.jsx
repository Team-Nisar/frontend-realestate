import React, { useState } from "react";
import "../../styles/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Toggler for small screens
  const [activeAccordion, setActiveAccordion] = useState(null); // Active accordion index

  const menuItems = [
    {
      title: "Properties for Sale",
      links: [
        "Property in Mumbai",
        "Property in Delhi",
        "Property in Noida",
        "Property in Gurgaon",
        "Property in Pune",
        "Property in Bangalore",
      ],
    },
    {
      title: "Apartments / Flats",
      links: [
        "Flats in Mumbai",
        "Flats in Delhi",
        "Flats in Noida",
        "Flats in Gurgaon",
        "Flats in Pune",
        "Flats in Bangalore",
      ],
    },
    {
      title: "Independent Houses",
      links: [
        "Houses in Mumbai",
        "Houses in Delhi",
        "Houses in Noida",
        "Houses in Gurgaon",
        "Houses in Pune",
        "Houses in Bangalore",
      ],
    },
    {
      title: "Builder Floors",
      links: [
        "Builder Floor in Mumbai",
        "Builder Floor in Delhi",
        "Builder Floor in Noida",
        "Builder Floor in Gurgaon",
        "Builder Floor in Pune",
        "Builder Floor in Bangalore",
      ],
    },
  ];

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">RealEstate</div>
        {/* Navigation */}
        <nav>
          {/* Mega Menu for Large Screens */}
          <ul className={`mega-menu ${isMenuOpen ? "open" : ""}`}>
            {menuItems.map((item, index) => (
              <li key={index} className="menu-item">
                <span>{item.title}</span>
                <div className="dropdown">
                  {item.links.map((link, idx) => (
                    <a href="/" key={idx}>
                      {link}
                    </a>
                  ))}
                </div>
              </li>
            ))}
          </ul>

          {/* Accordion Menu for Small Screens */}
          <ul className={`accordion-menu ${isMenuOpen ? "open" : ""}`}>
            {menuItems.map((item, index) => (
              <li key={index} className="accordion-item">
                <button
                  className="accordion-title"
                  onClick={() => toggleAccordion(index)}
                >
                  {item.title}
                </button>
                <div
                  className={`accordion-content ${
                    activeAccordion === index ? "active" : ""
                  }`}
                >
                  {item.links.map((link, idx) => (
                    <a href="/" key={idx}>
                      {link}
                    </a>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </nav>

        {/* Controls */}
        <div className="controls">
          <button className="login-btn">Login</button>
          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;