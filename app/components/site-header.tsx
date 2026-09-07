"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { assetPath } from "@/lib/base-path";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="header-top-row">
        <div className="header-brand-wrap">
          <Link className="brand" href="/" aria-label="Tru Delights home">
            <img src={assetPath("/images/logo.png")} alt="Tru Delights Café" />
          </Link>
        </div>

        {/* Desktop Navigation (in center on desktop) */}
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link>
          <Link href="/about" className={pathname === "/about" ? "active" : ""}>Our Story</Link>
          <Link href="/menu" className={pathname === "/menu" ? "active" : ""}>Menu</Link>
          <Link href="/contact" className={pathname === "/contact" ? "active" : ""}>Visit</Link>
        </nav>

        {/* Header Actions: Hygiene Logo & Call Button */}
        <div className="header-actions">
          <div className="header-hygiene" title="Food Hygiene Rating 5 (Very Good)">
            <img src={assetPath("/fhrs-badge-5.svg")} alt="Food Hygiene Rating 5" />
          </div>
          <a className="header-call" href="tel:+447300486228" aria-label="Call 07300 486228 to order">
            <Phone size={15} /> <span>Call to Order</span>
          </a>
        </div>
      </div>

      {/* Fixed Mobile Navigation Strip (permanently visible on mobile screens) */}
      <nav className="mobile-fixed-nav" aria-label="Mobile navigation">
        <Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link>
        <Link href="/about" className={pathname === "/about" ? "active" : ""}>Our Story</Link>
        <Link href="/menu" className={pathname === "/menu" ? "active" : ""}>Menu</Link>
        <Link href="/contact" className={pathname === "/contact" ? "active" : ""}>Visit</Link>
      </nav>
    </header>
  );
}
