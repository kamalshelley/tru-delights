"use client";

import { useEffect, useState } from "react";
import { Clock3 } from "lucide-react";

interface StatusState {
  isOpen: boolean;
  isClosingSoon: boolean;
  label: string;
  subtext: string;
}

export function OpenStatusBadge() {
  const [status, setStatus] = useState<StatusState>({
    isOpen: true,
    isClosingSoon: false,
    label: "Open today",
    subtext: "Monday–Friday 8am–4pm · Saturday 9am–3pm",
  });

  useEffect(() => {
    function computeStatus(): StatusState {
      // Get current date/time in Europe/London timezone
      const now = new Date();
      const ukDateStr = now.toLocaleString("en-US", { timeZone: "Europe/London" });
      const ukDate = new Date(ukDateStr);

      const day = ukDate.getDay(); // 0 = Sun, 1 = Mon, ... 6 = Sat
      const hours = ukDate.getHours();
      const minutes = ukDate.getMinutes();
      const totalMinutes = hours * 60 + minutes;

      const monToFriOpen = 8 * 60; // 08:00
      const monToFriClose = 16 * 60; // 16:00
      const satOpen = 9 * 60; // 09:00
      const satClose = 15 * 60; // 15:00

      if (day >= 1 && day <= 5) {
        // Monday to Friday
        if (totalMinutes >= monToFriOpen && totalMinutes < monToFriClose) {
          const closingSoon = monToFriClose - totalMinutes <= 45;
          return {
            isOpen: true,
            isClosingSoon: closingSoon,
            label: closingSoon ? "Closing soon at 4pm" : "Open now until 4pm",
            subtext: "Eat in or call ahead for takeaway",
          };
        } else if (totalMinutes < monToFriOpen) {
          return {
            isOpen: false,
            isClosingSoon: false,
            label: "Closed · Opens at 8am today",
            subtext: "Monday–Friday 8am–4pm · Saturday 9am–3pm",
          };
        } else {
          // After 4pm
          const nextDayLabel = day === 5 ? "Opens Saturday at 9am" : "Opens tomorrow at 8am";
          return {
            isOpen: false,
            isClosingSoon: false,
            label: `Closed · ${nextDayLabel}`,
            subtext: "Monday–Friday 8am–4pm · Saturday 9am–3pm",
          };
        }
      } else if (day === 6) {
        // Saturday
        if (totalMinutes >= satOpen && totalMinutes < satClose) {
          const closingSoon = satClose - totalMinutes <= 45;
          return {
            isOpen: true,
            isClosingSoon: closingSoon,
            label: closingSoon ? "Closing soon at 3pm" : "Open now until 3pm",
            subtext: "Saturday brunch & treats",
          };
        } else if (totalMinutes < satOpen) {
          return {
            isOpen: false,
            isClosingSoon: false,
            label: "Closed · Opens at 9am today",
            subtext: "Saturday 9am–3pm · Sunday Closed",
          };
        } else {
          return {
            isOpen: false,
            isClosingSoon: false,
            label: "Closed · Opens Monday at 8am",
            subtext: "Sunday Closed · Back Monday at 8am",
          };
        }
      } else {
        // Sunday
        return {
          isOpen: false,
          isClosingSoon: false,
          label: "Closed Sundays · Opens Monday at 8am",
          subtext: "Monday–Friday 8am–4pm · Saturday 9am–3pm",
        };
      }
    }

    setStatus(computeStatus());
    const interval = setInterval(() => {
      setStatus(computeStatus());
    }, 60000); // re-check every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`status-pill ${status.isOpen ? (status.isClosingSoon ? "closing-soon" : "open") : "closed"}`}>
      <div className="status-indicator">
        <span className="dot" />
        <Clock3 size={18} />
      </div>
      <div className="status-text">
        <span className="status-title">{status.label}</span>
        <small className="status-hours">{status.subtext}</small>
      </div>
    </div>
  );
}
