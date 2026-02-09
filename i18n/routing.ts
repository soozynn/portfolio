import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ko", "ja", "zh"],
  defaultLocale: "ko",
  localePrefix: "always",
});
