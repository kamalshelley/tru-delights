import type { Metadata } from "next";
import { BookOpen, Coffee, Heart, ShieldCheck, Sparkles, Users } from "lucide-react";
import { PlatterEnquiryModal } from "../components/platter-modal";
import { assetPath } from "@/lib/base-path";

export const metadata: Metadata = {
  title: "Our Story",
  description: "Meet Emma and the friendly team behind Tru Delights, Moredon's neighbourhood café in Swindon.",
};

export default function AboutPage() {
  return (
    <main>
      {/* STORY HERO */}
      <section className="page-hero story-hero">
        <div>
          <p className="eyebrow">
            <Heart size={16} /> Made for the Neighbourhood
          </p>
          <h1>
            A café with <em>heart.</em>
          </h1>
          <p className="hero-subtext">
            Tru Delights opened in September 2025 with one simple mission: make Moredon a warmer, brighter, and more delicious place to meet, eat, and pause.
          </p>
        </div>
      </section>

      {/* STORY INTRO */}
      <section className="story-intro page-section">
        <div className="story-copy">
          <span className="section-kicker">Hello from Emma & Team</span>
          <h2>Warm welcomes come as standard.</h2>
          <p>
            Led by Emma, our small, close-knit team — <strong>Kayley, Mark, Brooke, and Oliver</strong> — keeps the specialty coffee flowing, the food freshly prepared, and the atmosphere relaxed and unhurried.
          </p>
          <p>
            Whether you pop in every morning for your commuter espresso, bring the family for Saturday brunch, or drop by for an afternoon slice of homemade cake, there is always a friendly smile and a warm table waiting for you here.
          </p>
          <div className="team-badge-row">
            <div className="team-pill"><Users size={16} /> Emma & Team</div>
            <div className="team-pill"><Heart size={16} /> Independent & Family-Run</div>
            <div className="team-pill"><Coffee size={16} /> RAVE Coffee Partner</div>
          </div>
        </div>

        <div className="story-media">
          <img
            src={assetPath("/images/cafe-interior.jpg")}
            alt="Warm and welcoming interior of Tru Delights café on Purton Road"
            className="story-main-img"
          />
          <div className="story-caption">
            <Sparkles size={16} /> 1A Purton Road, Moredon — Your cozy neighbourhood hub
          </div>
        </div>
      </section>

      {/* WHAT WE STAND FOR */}
      <section className="values-section page-section">
        <div className="section-heading-center">
          <p className="eyebrow">What We Believe In</p>
          <h2>The Little Touches That Make Us Tru Delights</h2>
        </div>

        <div className="values-grid">
          <article className="value-card">
            <div className="value-icon-wrap"><BookOpen size={28} /></div>
            <h3>The Book Nook</h3>
            <p>
              Take a book, leave a book, or simply settle into a comfortable chair and read while enjoying your morning brew. A calm oasis in the middle of your week.
            </p>
          </article>

          <article className="value-card highlight">
            <div className="value-icon-wrap"><Coffee size={28} /></div>
            <h3>RAVE Specialty Beans</h3>
            <p>
              We don't cut corners on our coffee. We proudly grind and extract RAVE artisan beans, dialled in daily to deliver balanced, full-bodied espresso and velvety flat whites.
            </p>
          </article>

          <article className="value-card">
            <div className="value-icon-wrap"><ShieldCheck size={28} /></div>
            <h3>Five-Star Hygiene</h3>
            <p>
              We hold the highest Food Hygiene Rating of 5 with pride. Our open kitchen is spotless, organized, and committed to fresh, safe food preparation.
            </p>
          </article>

          <article className="value-card">
            <div className="value-icon-wrap"><Sparkles size={28} /></div>
            <h3>Friday Pipp & Co</h3>
            <p>
              Fridays are sacred around here! Fresh artisan sourdough brioche doughnuts delivered fresh every Friday morning from Pipp & Co, with exciting rotating weekly glazes.
            </p>
          </article>
        </div>
      </section>

      {/* PLATTERS BLOCK */}
      <section className="platters-block page-section">
        <div className="platters-text">
          <p className="eyebrow">Meetings, Parties & Community Events</p>
          <h2>Platters & Catering Made for Sharing</h2>
          <p>
            Planning an office breakfast, team lunch, baby shower, or family celebration? We prepare generous sandwich platters, wrap boxes, and sweet treat selections tailored to your guest count and dietary needs.
          </p>
        </div>

        <div className="platters-action-wrap">
          <PlatterEnquiryModal />
        </div>
      </section>
    </main>
  );
}
