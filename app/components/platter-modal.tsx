"use client";

import { useState } from "react";
import { Sparkles, Check, Send, X } from "lucide-react";

export function PlatterEnquiryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    people: "10-15 people",
    platterType: "Mixed Sandwiches & Wraps",
    dietary: "",
  });

  const generateMailto = () => {
    const subject = encodeURIComponent(`Catering Platter Enquiry - ${formData.name || "Customer"}`);
    const body = encodeURIComponent(
      `Hello Emma and Tru Delights team,\n\n` +
      `I would like to enquire about a catering platter for our upcoming gathering:\n\n` +
      `• Contact Name: ${formData.name}\n` +
      `• Phone Number: ${formData.phone}\n` +
      `• Event Date: ${formData.date}\n` +
      `• Estimated People: ${formData.people}\n` +
      `• Platter Type: ${formData.platterType}\n` +
      `• Dietary Requirements / Notes: ${formData.dietary || "None"}\n\n` +
      `Could you please let me know your availability and pricing options?\n\n` +
      `Thank you!`
    );
    return `mailto:Tru-Delights1@hotmail.com?subject=${subject}&body=${body}`;
  };

  const handleCopy = () => {
    const details =
      `Tru Delights Platter Enquiry\n` +
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Date: ${formData.date}\n` +
      `Group Size: ${formData.people}\n` +
      `Selection: ${formData.platterType}\n` +
      `Dietary: ${formData.dietary || "None"}`;
    navigator.clipboard.writeText(details);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
      <button
        type="button"
        className="button light platter-trigger-btn"
        onClick={() => setIsOpen(true)}
      >
        <Sparkles size={18} /> Enquire About Platters
      </button>

      {isOpen && (
        <div className="modal-backdrop" role="dialog" aria-modal="true" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className="eyebrow"><Sparkles size={14} /> Freshly Prepared</span>
                <h3 className="modal-title">Catering & Platter Enquiry</h3>
              </div>
              <button
                type="button"
                className="modal-close"
                onClick={() => setIsOpen(false)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            <p className="modal-intro">
              Whether you need sandwich platters for an office meeting, fresh breakfast baps for a team, or cake boxes for a celebration, we make it easy.
            </p>

            <form
              className="modal-form"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = generateMailto();
              }}
            >
              <div className="form-row">
                <label>
                  <span>Your Name *</span>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Connor"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </label>
                <label>
                  <span>Phone Number *</span>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 07123 456789"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </label>
              </div>

              <div className="form-row">
                <label>
                  <span>Date Needed</span>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </label>
                <label>
                  <span>Number of Guests</span>
                  <select
                    value={formData.people}
                    onChange={(e) => setFormData({ ...formData, people: e.target.value })}
                  >
                    <option value="5-10 people">5 – 10 people</option>
                    <option value="10-15 people">10 – 15 people</option>
                    <option value="15-25 people">15 – 25 people</option>
                    <option value="25+ people">25+ people (Large group)</option>
                  </select>
                </label>
              </div>

              <label>
                <span>Platter Style</span>
                <select
                  value={formData.platterType}
                  onChange={(e) => setFormData({ ...formData, platterType: e.target.value })}
                >
                  <option value="Mixed Sandwiches & Wraps">Assorted Artisan Sandwiches & Wraps</option>
                  <option value="Hot Breakfast Bap Platter">Hot Morning Baps (Bacon, Sausage, Egg)</option>
                  <option value="Sweet Treat & Pastry Platter">Afternoon Cakes, Brownies & Scones</option>
                  <option value="Custom Combination">Full Buffet Combination (Savory & Sweet)</option>
                </select>
              </label>

              <label>
                <span>Dietary Requirements or Special Requests</span>
                <textarea
                  rows={2}
                  placeholder="e.g. 2 vegetarian, 1 gluten-free, individually boxed, etc."
                  value={formData.dietary}
                  onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                />
              </label>

              <div className="modal-actions">
                <button type="submit" className="button primary modal-submit-btn">
                  <Send size={18} /> Send via Email
                </button>
                <button
                  type="button"
                  className="button secondary modal-copy-btn"
                  onClick={handleCopy}
                >
                  {copied ? <Check size={18} /> : null} {copied ? "Copied to Clipboard!" : "Copy Enquiry Text"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
