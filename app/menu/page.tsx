"use client";

import { useState, useMemo } from "react";
import { Coffee, Phone, Search, Sparkles, Utensils, X } from "lucide-react";
import { menuGroups, menuCategories, MenuItem } from "../menu-data";

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredGroups = useMemo(() => {
    return menuGroups
      .map((group) => {
        // Category filtering
        if (selectedCategory !== "all" && group.id !== selectedCategory) {
          return null;
        }

        // Search query filtering
        let items = group.items;
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          items = items.filter(
            (item: MenuItem) =>
              item.name.toLowerCase().includes(q) ||
              (item.description && item.description.toLowerCase().includes(q))
          );
        }

        if (items.length === 0) return null;

        return {
          ...group,
          items,
        };
      })
      .filter((group): group is NonNullable<typeof group> => group !== null);
  }, [selectedCategory, searchQuery]);

  return (
    <main>
      {/* MENU HERO */}
      <section className="page-hero menu-hero">
        <div>
          <p className="eyebrow">
            <Sparkles size={16} /> Made Fresh to Order Daily
          </p>
          <h1>
            Our Complete <em>Menu.</em>
          </h1>
          <p className="menu-hero-desc">
            From specialty RAVE espresso and hot breakfast rolls to melted sourdough paninis and Friday Pipp & Co doughnuts. Eat in or takeaway.
          </p>
        </div>

        {/* SEARCH BAR */}
        <div className="menu-search-wrapper">
          <div className="menu-search-input">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search coffee, paninis, baps, jackets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search menu items"
            />
            {searchQuery && (
              <button
                type="button"
                className="clear-search-btn"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* CATEGORY FILTER TABS */}
      <section className="menu-nav-strip">
        <div className="category-pills" role="tablist" aria-label="Menu categories">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={selectedCategory === cat.id}
              className={`cat-pill ${selectedCategory === cat.id ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* MENU LISTING */}
      <section className="menu-page page-section">
        {filteredGroups.length === 0 ? (
          <div className="menu-empty-state">
            <Utensils size={40} />
            <h3>No matching menu items found</h3>
            <p>Try searching for another dish or reset your search query.</p>
            <button
              type="button"
              className="button secondary"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
            >
              Show Full Menu
            </button>
          </div>
        ) : (
          <div className="menu-grid">
            {filteredGroups.map((group, idx) => (
              <article className="menu-card" id={group.id} key={`${group.title}-${idx}`}>
                <div className="menu-card-header">
                  <div className="menu-number">{String(idx + 1).padStart(2, "0")}</div>
                  <div className="menu-header-copy">
                    <small className="menu-note">{group.note}</small>
                    <h2>{group.title}</h2>
                  </div>
                </div>

                <div className="menu-items-list">
                  {group.items.map((item) => (
                    <div className="menu-item-row" key={item.name}>
                      <div className="item-info">
                        <div className="item-name-wrap">
                          <strong className="item-name">{item.name}</strong>
                          {item.popular && <span className="badge-popular">Popular</span>}
                          {item.dietary?.map((tag) => (
                            <span key={tag} className={`badge-dietary ${tag.toLowerCase()}`} title={
                              tag === "V" ? "Vegetarian" : tag === "VG" ? "Vegan" : "Gluten-Free Available"
                            }>
                              {tag}
                            </span>
                          ))}
                        </div>
                        {item.description && (
                          <p className="item-desc">{item.description}</p>
                        )}
                      </div>
                      <div className="item-price">{item.price}</div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}

        {/* DIETARY AND PRE-ORDER CALLOUT */}
        <div className="dietary-note">
          <div className="dietary-copy">
            <div className="dietary-tags-legend">
              <span className="badge-dietary v">V</span> Vegetarian
              <span className="badge-dietary vg">VG</span> Vegan
              <span className="badge-dietary gf">GF</span> Gluten-Free Available
            </div>
            <strong>Special Dietary Requirements or Allergies?</strong>
            <p>
              Oat and soya milk alternatives available (+40p). Please inform our friendly team about any food allergies or intolerances when ordering.
            </p>
          </div>
          <a className="button primary order-call-btn" href="tel:+447300486228">
            <Phone size={18} /> Call 07300 486228 to Order
          </a>
        </div>
      </section>
    </main>
  );
}
