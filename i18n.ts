// i18n.ts
import { getRequestConfig } from "next-intl/server";
import { getLocale, defaultLocale } from "./configs/localeConfig";

export default getRequestConfig(async ({ locale }) => {
  const finalLocale = getLocale(locale);
  try {
    const messages = (await import(`./messages/${finalLocale}.json`)).default;
    return { messages };
  } catch (e) {
    return {
      messages: (await import(`./messages/${defaultLocale}.json`)).default,
    };
  }
});

export { defaultLocale };