import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { SupportedLangs, type PortfolioData } from "../i18n/types";

interface NavbarProps {
	lang: SupportedLangs;
	navbarContent: PortfolioData["nav"];
}

export default function Navbar({ lang, navbarContent }: NavbarProps) {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

	const desktopLinkClass =
		"font-sans tracking-widest text-[0.6875rem] uppercase font-bold text-outline hover:text-primary border-b border-transparent hover:border-primary pb-1 transition-all";

	return (
		<nav className="fixed top-0 w-full h-16 z-50 glass-nav bg-surface/60 px-6 md:px-12 flex justify-between items-center gap-2 transition-colors">
			<div className="hidden lg:block text-xl font-bold tracking-tighter text-on-surface font-headline">
				CARLOS CORDOVA
			</div>

			<div className="lg:hidden flex items-center gap-3">
				<span className="material-symbols-outlined text-primary text-2xl">
					terminal
				</span>
				<div className="flex flex-col leading-none font-headline font-bold text-on-surface tracking-widest text-[0.625rem]">
					<span>S.F.E. //</span>
					<span className="text-base tracking-tighter">ARCHITECT</span>
				</div>
			</div>

			<div className="hidden lg:flex items-center gap-8">
				<a href="#experience" className={desktopLinkClass}>
					{navbarContent.experience}
				</a>
				<a href="#lab" className={desktopLinkClass}>
					{navbarContent.lab}
				</a>
				<a href="#publications" className={desktopLinkClass}>
					{navbarContent.publications}
				</a>
				<a href="#community" className={desktopLinkClass}>
					{navbarContent.community}
				</a>
			</div>

			<div className="flex items-center gap-4 md:gap-6">
				<div className="flex items-center gap-2 font-sans tracking-widest text-[0.625rem] font-bold uppercase">
					<a
						href="/"
						className={`transition-colors hover:text-primary ${lang === SupportedLangs.EN ? "text-primary" : "text-outline"}`}
					>
						EN
					</a>
					<span className="text-outline-variant/50">/</span>
					<a
						href="/es/"
						className={`transition-colors hover:text-primary ${lang === SupportedLangs.ES ? "text-primary" : "text-outline"}`}
					>
						ES
					</a>
				</div>

				<ThemeToggle />

				<button className="hidden md:block border border-outline-variant/30 text-on-surface px-6 py-2 uppercase tracking-widest text-[0.625rem] font-bold hover:bg-surface-container-high transition-colors">
					{navbarContent.connect}
				</button>

				<button
					className="md:hidden text-on-surface flex items-center justify-center cursor-pointer"
					onClick={toggleMenu}
					aria-label="Toggle mobile menu"
				>
					<span className="material-symbols-outlined text-2xl">
						{isMobileMenuOpen ? "close" : "menu"}
					</span>
				</button>
			</div>

			{isMobileMenuOpen && (
				<div className="absolute top-16 left-0 w-full bg-surface-container-low border-b border-outline-variant/20 flex flex-col p-6 gap-6 md:hidden shadow-2xl">
					<a
						href="#experience"
						onClick={toggleMenu}
						className="font-sans tracking-widest text-xs uppercase font-bold text-outline hover:text-primary transition-colors"
					>
						{navbarContent.experience}
					</a>
					<a
						href="#lab"
						onClick={toggleMenu}
						className="font-sans tracking-widest text-xs uppercase font-bold text-outline hover:text-primary transition-colors"
					>
						{navbarContent.lab}
					</a>
					<a
						href="#publications"
						onClick={toggleMenu}
						className="font-sans tracking-widest text-xs uppercase font-bold text-outline hover:text-primary transition-colors"
					>
						{navbarContent.publications}
					</a>
					<a
						href="#community"
						onClick={toggleMenu}
						className="font-sans tracking-widest text-xs uppercase font-bold text-outline hover:text-primary transition-colors"
					>
						{navbarContent.community}
					</a>
					<button className="border border-outline-variant/30 text-on-surface px-6 py-4 uppercase tracking-widest text-[0.625rem] font-bold hover:bg-surface-container-high transition-colors w-full text-left mt-4 cursor-pointer">
						{navbarContent.connect}
					</button>
				</div>
			)}
		</nav>
	);
}
