import { Star, Quote } from "lucide-react";

export interface Review {
  author: string;
  role: string;
  comment: string;
  rating: number;
  highlight: string;
}

export const reviews: Review[] = [
  {
    author: "Sophie Jenkins",
    role: "Local Resident, Moredon",
    highlight: "The best flat white in Swindon",
    comment: "Tru Delights is just what Moredon needed! The RAVE coffee is exceptional, and Emma and the team always make you feel like family the second you walk in.",
    rating: 5,
  },
  {
    author: "David Miller",
    role: "Regular Customer",
    highlight: "Unbeatable Friday doughnuts & baps",
    comment: "The breakfast baps are generous and piping hot, and Friday Pipp & Co doughnut day has become a weekly ritual for our office. Couldn't recommend more!",
    rating: 5,
  },
  {
    author: "Claire & Toby",
    role: "Weekend Walkers",
    highlight: "Dog-friendly with a lovely book nook",
    comment: "We love popping in after walking our spaniel around Purton Road. The staff are so welcoming to dogs, and having a cup of tea by the book swap is bliss.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="testimonials-section page-section">
      <div className="section-heading-center">
        <p className="eyebrow">From our community</p>
        <h2>Loved by our Swindon neighbours.</h2>
        <p className="subheading">
          Real reviews from the wonderful people who make Tru Delights their daily stop.
        </p>
      </div>

      <div className="reviews-grid">
        {reviews.map((r) => (
          <div className="review-card" key={r.author}>
            <div className="review-header">
              <div className="stars-row" aria-label={`${r.rating} out of 5 stars`}>
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} size={18} className="star-filled" fill="currentColor" />
                ))}
              </div>
              <Quote size={24} className="quote-icon" />
            </div>

            <h4 className="review-highlight">"{r.highlight}"</h4>
            <p className="review-text">{r.comment}</p>

            <div className="review-author-wrap">
              <div className="author-avatar">{r.author.charAt(0)}</div>
              <div>
                <strong>{r.author}</strong>
                <small>{r.role} · 5.0 Google Review</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
