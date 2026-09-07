import type { Metadata } from "next";
import { Clock3, Heart, Mail, MapPin, Navigation, Phone, ShieldCheck, Wifi } from "lucide-react";
import { OpenStatusBadge } from "../components/open-status-badge";
import { PlatterEnquiryModal } from "../components/platter-modal";

export const metadata: Metadata = {
  title: "Visit & Contact",
  description: "Find Tru Delights at 1A Purton Road, Moredon, Swindon SN2 2LN. View opening hours, get directions, or call ahead to order.",
};

export default function ContactPage() {
  return (
    <main>
      {/* CONTACT HERO */}
      <section className="page-hero contact-hero">
        <div>
          <p className="eyebrow">
            <MapPin size={16} /> Come and Say Hello
          </p>
          <h1>
            Find Your Way to <em>Delight.</em>
          </h1>
          <p className="hero-subtext">
            Eat in, relax with a book, or call ahead and we’ll have your hot breakfast bap or artisan coffee freshly prepared for collection.
          </p>
        </div>
      </section>

      {/* QUICK STATUS & AMENITIES STRIP */}
      <section className="contact-amenities-strip">
        <div className="amenities-container">
          <OpenStatusBadge />
          <div className="amenities-tags">
            <span><MapPin size={15} /> Free On-Street Parking</span>
            <span><Heart size={15} /> Dog Friendly</span>
            <span><Wifi size={15} /> Free Guest Wi-Fi</span>
            <span><ShieldCheck size={15} /> 5-Star Hygiene</span>
          </div>
        </div>
      </section>

      {/* CONTACT INFO GRID */}
      <section className="contact-grid-section page-section">
        <div className="contact-grid">
          {/* ADDRESS & DIRECTIONS CARD */}
          <article className="contact-card address-card">
            <div className="contact-card-icon"><MapPin size={24} /></div>
            <small className="contact-card-eyebrow">Our Location</small>
            <h2>1A Purton Road<br />Moredon, Swindon<br />SN2 2LN</h2>
            <p className="contact-card-note">
              Conveniently situated on Purton Road, opposite local amenities with free surrounding parking.
            </p>
            <a
              className="button primary"
              href="https://maps.google.com/?q=1A+Purton+Road+Moredon+Swindon+SN2+2LN"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Navigation size={17} /> Get Directions on Google Maps
            </a>
          </article>

          {/* OPENING HOURS CARD */}
          <article className="contact-card hours-card">
            <div className="contact-card-icon"><Clock3 size={24} /></div>
            <small className="contact-card-eyebrow">Regular Hours</small>
            <h2>Opening Times</h2>
            <dl className="hours-list">
              <div>
                <dt>Monday – Friday</dt>
                <dd><strong>8:00 AM – 4:00 PM</strong></dd>
              </div>
              <div className="highlight-friday">
                <dt>Friday (Pipp & Co Day!)</dt>
                <dd><strong>8:00 AM – 4:00 PM</strong></dd>
              </div>
              <div>
                <dt>Saturday</dt>
                <dd><strong>9:00 AM – 3:00 PM</strong></dd>
              </div>
              <div className="closed-day">
                <dt>Sunday</dt>
                <dd><em>Closed for family time</em></dd>
              </div>
            </dl>
            <small className="hours-footnote">
              * Kitchen closes 30 minutes before closing for hot food orders.
            </small>
          </article>

          {/* PHONE / TAKEAWAY CARD */}
          <article className="contact-card phone-card">
            <div className="contact-card-icon"><Phone size={24} /></div>
            <small className="contact-card-eyebrow">Telephone & Pre-Orders</small>
            <h2>
              <a href="tel:+447300486228" className="phone-link">
                07300 486228
              </a>
            </h2>
            <p>
              Short on time? Call ahead with your coffee or lunch order and we'll have it freshly packaged and piping hot when you walk through the door.
            </p>
            <a className="button primary" href="tel:+447300486228">
              <Phone size={17} /> Tap to Call Café
            </a>
          </article>

          {/* EMAIL & PLATTERS CARD */}
          <article className="contact-card email-card">
            <div className="contact-card-icon"><Mail size={24} /></div>
            <small className="contact-card-eyebrow">Email & Catering</small>
            <h2>
              <a href="mailto:Tru-Delights1@hotmail.com" className="email-link">
                Tru-Delights1<br />@hotmail.com
              </a>
            </h2>
            <p>
              For group catering, sandwich platters, event reservations, or special dietary inquiries.
            </p>
            <div className="contact-card-action">
              <PlatterEnquiryModal />
            </div>
          </article>
        </div>

        {/* EMBEDDED MAP */}
        <div className="map-embed-wrapper">
          <div className="map-frame-header">
            <div>
              <strong>Interactive Map</strong>
              <small>1A Purton Road, Moredon, Swindon SN2 2LN</small>
            </div>
            <a
              href="https://maps.google.com/?q=1A+Purton+Road+Moredon+Swindon+SN2+2LN"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Open Full Map →
            </a>
          </div>
          <iframe
            title="Tru Delights Location Map"
            width="100%"
            height="380"
            style={{ border: 0, borderRadius: "0 0 24px 24px", display: "block" }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://maps.google.com/maps?q=1A+Purton+Road,+Moredon,+Swindon+SN2+2LN&t=&z=15&ie=UTF8&iwloc=&output=embed"
          />
        </div>
      </section>
    </main>
  );
}
