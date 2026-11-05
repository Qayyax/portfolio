"use client";

import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { EMAIL_URL, TRAINING_PLAN_URL } from "@/app/_data_exports/socials";
import { weeklyPlan } from "@/app/_data_exports/training";

// Show the week Monday-first, with Sunday's rest day closing it out.
const week = [...weeklyPlan.slice(1), weeklyPlan[0]];

export default function Schedule() {
  // Set after mount so the highlight follows the visitor's day, not the server's.
  const [today, setToday] = useState<string | null>(null);

  useEffect(() => {
    setToday(weeklyPlan[new Date().getDay()].day);
  }, []);

  return (
    <section id="plan" className="section">
      <div className="section-head reveal">
        <h2>The Plan</h2>
      </div>

      <div className="plan">
        <div className="plan-intro reveal">
          <p>Every session, every exercise, sets and rep ranges. Copy it, run it, make it yours.</p>
          <a href={TRAINING_PLAN_URL} target="_blank" rel="noopener noreferrer" className="button">
            Open the plan <FaArrowRight aria-hidden />
          </a>
          <a href={EMAIL_URL} className="text-link">
            Want a plan made for you?
          </a>
        </div>

        <ul className="week">
          {week.map(({ day, workout, rest }) => (
            <li key={day} className="reveal" data-today={today === day} data-rest={rest ?? false}>
              <span className="week-day">{day}</span>
              <span className="week-workout">{workout}</span>
              {today === day && <span className="week-live">Today</span>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
