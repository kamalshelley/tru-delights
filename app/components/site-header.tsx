"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { assetPath } from "@/lib/base-path";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-brand-wrap">
        <Link className="brand" href="/" aria-label="Tru Delights home">
          <img src={assetPath("/images/logo.png")} alt="Tru Delights Café" />
        </Link>
      </div>

      <nav className={`main-nav ${mobileMenuOpen ? "open" : ""}`} aria-label="Main navigation">
        <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
        <Link href="/about" onClick={() => setMobileMenuOpen(false)}>Our Story</Link>
        <Link href="/menu" onClick={() => setMobileMenuOpen(false)}>Menu</Link>
        <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Visit & Contact</Link>
      </nav>

      <div className="header-actions">
        <div className="header-hygiene" title="Food Hygiene Rating 5 (Very Good)">
          <img src={assetPath("/fhrs-badge-5.svg")} alt="Food Hygiene Rating 5" />
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
