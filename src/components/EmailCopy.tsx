"use client";

import { useState } from "react";

const EMAIL = "ryankle71@gmail.com";

export default function EmailCopy() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard blocked; the mailto button still works */
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 font-mono text-sm text-foreground/80 transition-colors hover:border-white/25 hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40"
      aria-label={copied ? "Email address copied" : `Copy email address ${EMAIL}`}
    >
      <span>{EMAIL}</span>
      <span className="text-xs text-muted transition-colors group-hover:text-foreground/70">
        {copied ? "copied" : "copy"}
      </span>
    </button>
  );
}
