"use client";

import { useRef, useState } from "react";
import { FaArrowRight, FaCheck, FaRegCopy } from "react-icons/fa6";
import { referrals } from "@/app/_data_exports/referrals";
import { EMAIL_URL } from "@/app/_data_exports/socials";

const COPIED_MS = 1800;

export default function Referrals() {
  const [copied, setCopied] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const copy = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      // Clipboard access can be refused; the code stays visible on the button to copy by hand.
      return;
    }
    setCopied(code);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(null), COPIED_MS);
  };

  return (
    <section id="referrals" className="section">
      <div className="section-head reveal">
        <h2>Referrals</h2>
        <a href={EMAIL_URL} className="text-link">
          Want me to join yours?
        </a>
      </div>

      <div className="tickets">
        {referrals.map(({ title, description, code }) => (
          <article key={title} className="ticket reveal">
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
            <div className="ticket-actions">
              {code.type === "code" && (
                <button type="button" onClick={() => copy(code.code)} className="ticket-action">
                  {copied === code.code ? (
                    <>
                      Copied <FaCheck aria-hidden />
                    </>
                  ) : (
                    <>
                      {code.code} <FaRegCopy aria-hidden />
                    </>
                  )}
                </button>
              )}
              {code.link && (
                <a href={code.link} target="_blank" rel="noopener noreferrer" className="ticket-action">
                  Open <FaArrowRight aria-hidden />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
