import { ArrowRight, Clock3, Coffee, MapPin, Sparkles } from "lucide-react";

const heroImage = "https://primary.jwwb.nl/public/h/d/w/temp-ydhhvzbdczpqubeptngc/20260404_105635-high.jpg?crop=0.75%3A1&enable=upscale&enable-io=true&width=1200";
const treatsImage = "https://primary.jwwb.nl/public/h/d/w/temp-ydhhvzbdczpqubeptngc/20260322_100624-high.jpg?crop=1.4286%3A1%2Coffset-y51&enable=upscale&enable-io=true&width=1000";

export default function Home() {
  return <main>
    <section className="home-hero">
      <div className="hero-copy">
        <p className="eyebrow"><Sparkles size={15}/> Independent café · Moredon</p>
        <h1>Your new favourite <em>local.</em></h1>
        <p className="hero-lede">Fresh coffee, proper breakfasts, easy lunches and the kind of welcome that makes you stay for another cup.</p>
        <div className="button-row">
          <a className="button primary" href="/menu">See the full menu <ArrowRight size={18}/></a>
          <a className="button secondary" href="/contact">Plan your visit <MapPin size={18}/></a>
        </div>
        <div className="open-note"><Clock3 size={20}/><span><strong>Open today</strong><small>Monday–Friday 8am–4pm · Saturday 9am–3pm</small></span></div>
      </div>
      <div className="hero-photo">
        <img src={heroImage} alt="The bright and welcoming interior of Tru Delights café"/>
        <div className="coffee-stamp"><Coffee/><span>Good coffee<br/>Lovely company</span></div>
      </div>
    </section>

    <section className="marquee" aria-label="Café highlights"><span>Freshly made</span><b>✦</b><span>Eat in or takeaway</span><b>✦</b><span>Vegan options</span><b>✦</b><span>Five-star hygiene</span></section>

    <section className="home-intro page-section">
      <div className="section-kicker">Made for Moredon</div>
      <div><h2>A cheerful spot for every part of your day.</h2><p>Drop in for a breakfast bap, meet a friend over a RAVE coffee, pick up lunch or settle into our book nook. Everything is served with care by Emma and the team.</p><a className="text-link" href="/about">Meet Tru Delights <ArrowRight size={17}/></a></div>
    </section>

    <section className="quick-picks page-section">
      <div className="section-heading"><div><p className="eyebrow">What are you in the mood for?</p><h2>Pick your perfect stop.</h2></div><a className="text-link" href="/menu">Browse everything <ArrowRight size={17}/></a></div>
      <div className="pick-grid">
        <article className="pick-card pink"><span>01</span><h3>Breakfast</h3><p>From bacon baps to avocado toast and a full English.</p><a href="/menu#breakfast">See breakfast →</a></article>
        <article className="pick-card yellow"><span>02</span><h3>Lunch</h3><p>Paninis, wraps, jacket potatoes and generous sandwiches.</p><a href="/menu#lunch">See lunch →</a></article>
        <article className="pick-card blue"><span>03</span><h3>Drinks</h3><p>RAVE coffee, tea, smoothies, milkshakes and coolers.</p><a href="/menu#drinks">See drinks →</a></article>
      </div>
    </section>

    <section className="split-feature">
      <img src={treatsImage} alt="Fresh sweet treats at Tru Delights"/>
      <div><p className="eyebrow">A little extra delight</p><h2>Friday is doughnut day.</h2><p>We welcome fresh Pipp & Co doughnuts every Friday, with flavours changing from week to week. Come early for the best pick.</p><a className="button light" href="/contact">Find us <ArrowRight size={18}/></a></div>
    </section>

    <section className="visit-strip page-section">
      <div><p className="eyebrow">Come and say hello</p><h2>1A Purton Road, Moredon</h2></div><p>Eat in, take away, or call ahead and we’ll have your order ready to collect.</p><a className="button primary" href="tel:+447300486228">Call 07300 486228</a>
    </section>
  </main>;
}
