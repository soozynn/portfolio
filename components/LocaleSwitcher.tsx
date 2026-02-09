"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useTransition, useState, useRef, useEffect } from "react";
import { routing } from "@/i18n/routing";

const localeOptions: { value: string; label: string }[] = [
  { value: "en", label: "English" },
  { value: "ko", label: "한국어" },
  { value: "ja", label: "日本語" },
  { value: "zh", label: "中文" },
];

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [open]);

  function onSelect(nextLocale: string) {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
      setOpen(false);
    });
  }

  const current = localeOptions.find((o) => o.value === locale);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        disabled={isPending}
        className="flex items-center gap-2 px-3 py-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/25 transition-all duration-200 text-sm text-white/90"
        aria-label="Change language"
        aria-expanded={open}
      >
        <svg
          className="w-4 h-4 text-white/70"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
        <span className="hidden sm:inline max-w-[4rem] truncate">
          {current?.label ?? locale}
        </span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <div
          className="absolute right-0 mt-2 py-2 min-w-[140px] rounded-xl border border-white/15 bg-[var(--card)] shadow-xl shadow-black/30 backdrop-blur-xl"
          role="listbox"
        >
          {localeOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              role="option"
              aria-selected={locale === opt.value}
              onClick={() => onSelect(opt.value)}
              disabled={isPending}
              className={`w-full px-4 py-2.5 text-left text-sm transition-colors ${
                locale === opt.value
                  ? "bg-white/15 text-white font-medium"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
