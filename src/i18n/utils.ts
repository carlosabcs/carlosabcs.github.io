import { en } from "./en";
import { es } from "./es";
import { SupportedLangs, type PortfolioData } from "./types";

export const defaultLang = SupportedLangs.ES;

export function getI18n(lang: SupportedLangs): PortfolioData {
	return lang === SupportedLangs.ES ? es : en;
}
