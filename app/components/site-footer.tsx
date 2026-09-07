import { Heart, MapPin, Phone, Clock3 } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand-col">
        <img src="/images/logo.png" alt="Tru Delights Café" className="footer-logo" />
        <p className="footer-tagline">
          Good coffee, lovely company, and freshly made food right in the heart of Moredon.
        </p>
        <div className="footer-hygiene-note">
          <img src="/fhrs-badge-5.svg" alt="Food Hygiene Rating 5" width={110} />
          <span>Proud to hold a 5-star Food Hygiene Rating</span>
        </div>
      </div>

      <div className="footer-links-col">
        <strong>Explore</strong>
        <a href="/">Home</a>
        <a href="/about">Our Story</a>
        <a href="/menu">Full Menu & Prices</a>
        <a href="/contact">Visit & Contact</a>
      </div>

      <div className="footer-hours-col">
        <strong><Clock3 size={15} /> Opening Times</strong>
        <p>Monday – Friday: 8:00am – 4:00pm</p>
        <p>Saturday: 9:00am – 3:00pm</p>
        <p>Sunday: Closed</p>
        <small>Pipp & Co Doughnuts fresh every Friday!</small>
      </div>

      <div className="footer-contact-col">
        <strong><MapPin size={15} /> Visit Us</strong>
        <span>1A Purton Road, Moredon<br />Swindon, SN2 2LN</span>
        <a href="tel:+447300486228" className="footer-tel">
          <Phone size={14} /> 07300 486228
        </a>
      </div>

      <div className="footer-bottom">
        <small>© {new Date().getFullYear()} Tru Delights Café. Built with <Heart size={13} className="inline text-pink-400" /> for Moredon, Swindon.</small>
      </div>
    </footer>
  );
}
