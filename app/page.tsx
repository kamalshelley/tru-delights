import Link from "next/link";
import { ArrowRight, Coffee, Heart, MapPin, Sparkles, Star, Utensils } from "lucide-react";
import { OpenStatusBadge } from "./components/open-status-badge";
import { Testimonials } from "./components/testimonials";
import { assetPath } from "@/lib/base-path";

export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="home-hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <Sparkles size={16} /> Independent Café · Moredon, Swindon
          </p>
          <h1>
            Your new favourite <em>local.</em>
          </h1>
          <p className="hero-lede">
            Freshly brewed specialty RAVE coffee, sizzling breakfast baps, hot toasted paninis, and the kind of warm welcome that makes you want to stay for another cup.
          </p>

          <div className="button-row">
            <Link className="button primary" href="/menu">
              Explore Our Menu <ArrowRight size={18} />
            </Link>
            <Link className="button secondary" href="/contact">
              Plan Your Visit <MapPin size={18} />
            </Link>
          </div>

          <OpenStatusBadge />
        </div>

        <div className="hero-photo-mosaic">
          <div className="mosaic-main">
            <img
              src={assetPath("/images/cafe-interior.jpg")}
              alt="The bright, cheerful and welcoming interior of Tru Delights café in Moredon"
            />
            <div className="coffee-stamp">
              <Coffee size={22} />
              <span>Good Coffee<br />Lovely Company</span>
            </div>
          </div>
          <div className="mosaic-secondary">
            <div className="mosaic-thumb top">
              <img
                src={assetPath("/images/rave-coffee.jpg")}
                alt="Freshly poured RAVE flat white with velvety crema"
              />
              <span className="photo-tag">RAVE Espresso</span>
            </div>
            <div className="mosaic-thumb bottom">
              <img
                src={assetPath("/images/pipp-doughnuts.jpg")}
                alt="Artisan glazed Pipp and Co doughnuts served fresh on Fridays"
              />
              <span className="photo-tag">Friday Doughnuts</span>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE BANNER */}
      <section className="marquee" aria-label="Café highlights">
        <span><Coffee size={15} /> Specialty RAVE Coffee</span>
        <b>✦</b>
        <span><Utensils size={15} /> Sizzling Breakfast Baps</span>
        <b>✦</b>
        <span><Sparkles size={15} /> Pipp & Co Doughnuts (Fridays)</span>
        <b>✦</b>
        <span><Heart size={15} /> Dog Friendly</span>
        <b>✦</b>
        <span><Star size={15} /> 5-Star Hygiene Rated</span>
        <b>✦</b>
        <span>Eat-In or Takeaway</span>
      </section>

      {/* INTRO SECTION */}
      <section className="home-intro page-section">
        <div className="section-kicker-wrap">
          <span className="section-kicker">Made for Moredon</span>
          <div className="kicker-pill">Locally Loved</div>
        </div>
        <div className="home-intro-content">
          <h2>A cheerful spot for every part of your day.</h2>
          <p>
            Drop in for a morning bacon bap, catch up with friends over a velvety flat white, grab a hot pressed panini on your lunch break, or lose yourself in our cozy book swap nook. Everything is prepared fresh with love and care by Emma and the team.
          </p>
          <div className="intro-actions">
            <Link className="text-link" href="/about">
              Read Our Story & Meet the Team <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* QUICK PICKS CARDS */}
      <section className="quick-picks page-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">What are you in the mood for?</p>
            <h2>Fresh flavours, made to order.</h2>
          </div>
          <Link className="text-link" href="/menu">
            Browse full menu & prices <ArrowRight size={17} />
          </Link>
        </div>

        <div className="pick-grid">
          <article className="pick-card pick-breakfast">
            <div className="pick-card-top">
              <span className="card-num">01</span>
              <span className="card-tag">Morning Fuel</span>
            </div>
            <h3>Breakfast</h3>
            <p>Crispy smoked bacon rolls, butcher-made sausage baps, creamy avocado toast, and the hearty Tru Big Breakfast Wrap.</p>
            <div className="card-price-lead">From £3.50</div>
            <Link href="/menu#breakfast" className="card-link">
              See Breakfast Menu <ArrowRight size={16} />
            </Link>
          </article>

          <article className="pick-card pick-lunch">
            <div className="pick-card-top">
              <span className="card-num">02</span>
              <span className="card-tag">Midday Favourites</span>
            </div>
            <h3>Lunch & Toasties</h3>
            <p>Melted brie & cranberry paninis, chicken pesto toasties, sweet chilli wraps, and steaming jacket potatoes with rich toppings.</p>
            <div className="card-price-lead">From £5.25</div>
            <Link href="/menu#lunch" className="card-link">
              See Lunch Menu <ArrowRight size={16} />
            </Link>
          </article>

          <article className="pick-card pick-drinks">
            <div className="pick-card-top">
              <span className="card-num">03</span>
              <span className="card-tag">Artisan Brews</span>
            </div>
            <h3>Drinks & Treats</h3>
            <p>Specialty RAVE espresso blends, iced caramel lattes, thick real-fruit smoothies, milkshakes, and Friday Pipp & Co bakes.</p>
            <div className="card-price-lead">From £2.30</div>
            <Link href="/menu#drinks" className="card-link">
              See Drinks & Treats <ArrowRight size={16} />
            </Link>
          </article>
        </div>
      </section>

      {/* FRIDAY DOUGHNUT FEATURE SPOTLIGHT */}
      <section className="doughnut-feature-banner">
        <div className="doughnut-visual">
          <img
            src={assetPath("/images/pipp-doughnuts.jpg")}
            alt="Handcrafted fresh Pipp & Co artisan sourdough doughnuts"
          />
          <div className="doughnut-badge">
            <Sparkles size={18} />
            <strong>Every Friday</strong>
            <span>Pipp & Co Day</span>
          </div>
        </div>
        <div className="doughnut-copy">
          <p className="eyebrow">A Friday Neighbourhood Tradition</p>
          <h2>Fresh Pipp & Co doughnuts every Friday morning.</h2>
          <p>
            Every single Friday, we receive a fresh delivery of handcrafted artisan brioche sourdough doughnuts from Wiltshire’s renowned <strong>Pipp & Co</strong>. From salted caramel and cinnamon swirls to seasonal berry glazes, the flavours change every week!
          </p>
          <div className="doughnut-tip">
            <strong>Pro tip:</strong> They arrive fresh at 8:00 AM and sell out fast. Pop in early or call ahead to save yours!
          </div>
          <div className="button-row">
            <a className="button primary" href="tel:+447300486228">
              Call to Reserve Yours <ArrowRight size={17} />
            </a>
            <Link className="button secondary" href="/contact">
              Directions to Café
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <Testimonials />

      {/* VISIT STRIP */}
      <section className="visit-strip page-section">
        <div className="visit-text">
          <p className="eyebrow"><MapPin size={16} /> Come and Say Hello</p>
          <h2>1A Purton Road, Moredon</h2>
          <p>Easy street parking, dog-friendly seating, and free Wi-Fi. Pop in or call ahead for quick collection.</p>
        </div>
        <div className="visit-actions">
          <a className="button primary" href="tel:+447300486228">
            Call 07300 486228
          </a>
          <Link className="button secondary" href="/contact">
            View Map & Hours
          </Link>
        </div>
      </section>
    </main>
  );
}
