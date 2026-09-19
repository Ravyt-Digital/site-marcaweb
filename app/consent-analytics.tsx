"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const measurementId = "G-CPFYSGMHY8";
const storageKey = "marcaweb-cookie-consent";
const preferencesEvent = "marcaweb:cookie-preferences";

type ConsentChoice = "accepted" | "rejected" | null;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function prepareConsentMode() {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };
  window.gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

function enableAnalytics() {
  prepareConsentMode();
  window.gtag?.("consent", "update", { analytics_storage: "granted" });

  if (!document.querySelector(`script[data-google-tag="${measurementId}"]`)) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script.dataset.googleTag = measurementId;
    document.head.appendChild(script);
  }

  window.gtag?.("js", new Date());
  window.gtag?.("config", measurementId, { anonymize_ip: true });
}

export function ConsentAnalytics() {
  const pathname = usePathname();
  const [choice, setChoice] = useState<ConsentChoice>(null);
  const [visible, setVisible] = useState(false);
  const initialized = useRef(false);
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    prepareConsentMode();
    const saved = window.localStorage.getItem(storageKey) as ConsentChoice;
    if (saved === "accepted") {
      enableAnalytics();
      initialized.current = true;
      lastTrackedPath.current = window.location.pathname;
    }

    const initialState = window.setTimeout(() => {
      setChoice(saved);
      setVisible(saved !== "accepted" && saved !== "rejected");
    }, 0);

    const openPreferences = () => setVisible(true);
    window.addEventListener(preferencesEvent, openPreferences);
    return () => {
      window.clearTimeout(initialState);
      window.removeEventListener(preferencesEvent, openPreferences);
    };
  }, []);

  useEffect(() => {
    if (choice === "accepted" && initialized.current && lastTrackedPath.current !== pathname) {
      window.gtag?.("config", measurementId, { page_path: pathname });
      lastTrackedPath.current = pathname;
    }
  }, [choice, pathname]);

  function saveChoice(nextChoice: Exclude<ConsentChoice, null>) {
    window.localStorage.setItem(storageKey, nextChoice);
    setChoice(nextChoice);
    setVisible(false);

    if (nextChoice === "accepted") {
      enableAnalytics();
      initialized.current = true;
      lastTrackedPath.current = pathname;
    } else {
      prepareConsentMode();
      window.gtag?.("consent", "update", { analytics_storage: "denied" });
    }
  }

  if (!visible) return null;

  return (
    <section className="cookie-banner" role="dialog" aria-modal="false" aria-labelledby="cookie-title" aria-describedby="cookie-description">
      <div>
        <h2 id="cookie-title">Sua privacidade importa</h2>
        <p id="cookie-description">Usamos cookies de análise somente com sua autorização para entender como o site é acessado e melhorar a experiência. Você pode recusar e continuar navegando normalmente.</p>
        <a href="/privacidade">Consultar a Política de Privacidade</a>
      </div>
      <div className="cookie-actions">
        <button type="button" className="cookie-button secondary" onClick={() => saveChoice("rejected")}>Recusar</button>
        <button type="button" className="cookie-button primary" onClick={() => saveChoice("accepted")}>Aceitar cookies de análise</button>
      </div>
    </section>
  );
}

export function CookiePreferencesButton() {
  return <button type="button" className="cookie-preferences" onClick={() => window.dispatchEvent(new Event(preferencesEvent))}>Preferências de cookies</button>;
}
