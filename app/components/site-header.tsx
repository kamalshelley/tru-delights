"use client";

import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-brand-wrap">
        <a className="brand" href="/" aria-label="Tru Delights home">
          <img src="/images/logo.png" alt="Tru Delights Café" />
        </a>
      </div>

      <nav className={`main-nav ${mobileMenuOpen ? "open" : ""}`} aria-label="Main navigation">
        <a href="/" onClick={() => setMobileMenuOpen(false)}>Home</a>
        <a href="/about" onClick={() => setMobileMenuOpen(false)}>Our Story</a>
        <a href="/menu" onClick={() => setMobileMenuOpen(false)}>Menu</a>
        <a href="/contact" onClick={() => setMobileMenuOpen(false)}>Visit & Contact</a>
      </nav>

      <div className="header-actions">
        <div className="header-hygiene" title="Food Hygiene Rating 5 (Very Good)">
          <img src="/fhrs-badge-5.svg" alt="Food Hygiene Rating 5" />
        </div>
        <a className="header-call" href="tel:+447300486228" aria-label="Call 07300 486228 to order">
          <Phone size={16} /> <span>Call to Order</span>
        </a>
        <button
          type="button"
          className="mobile-nav-toggle"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
