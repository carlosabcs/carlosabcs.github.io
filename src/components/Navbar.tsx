import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { SupportedLangs, type PortfolioData } from "../i18n/types";

interface NavbarProps {
	lang: SupportedLangs;
	navbarContent: PortfolioData["nav"];
}

export default function Navbar({ lang, navbarContent }: NavbarProps) {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

	const handleScroll = (
		e: React.MouseEvent<HTMLAnchorElement>,
		targetId: string,
	) => {
		e.preventDefault();
		const target = document.getElementById(targetId);
		if (target) {
			const offset = 64; // 4rem (h-16) to account for fixed navbar
			const elementPosition = target.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.scrollY - offset;

			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth",
			});
		}
		setIsMobileMenuOpen(false);
	};

	const desktopLinkClass =
		"font-sans tracking-widest text-[0.6875rem] uppercase font-bold text-outline hover:text-primary border-b border-transparent hover:border-primary pb-1 transition-all duration-300";

	return (
		<nav className="fixed top-0 w-full h-16 z-50 glass-nav bg-surface/80 px-6 md:px-12 flex justify-between items-center gap-2 transition-colors duration-300">
			<div className="hidden lg:block text-xl font-bold tracking-tighter text-on-surface font-headline">
				{navbarContent.carlosCordova}
			</div>

			<div className="lg:hidden flex items-center gap-3">
				<span className="material-symbols-outlined text-primary text-2xl">
					terminal
				</span>
				<div className="flex flex-col leading-none font-headline font-bold text-on-surface tracking-widest text-[0.625rem]">
					<span>{navbarContent.acronym}</span>
					<span className="text-base tracking-tighter">
						{navbarContent.positionTitle}
					</span>
				</div>
			</div>

			<div className="hidden lg:flex items-center gap-8">
				<a
					href="#experience"
					onClick={(e) => handleScroll(e, "experience")}
					className={desktopLinkClass}
				>
					{navbarContent.experience}
				</a>
				<a
					href="#lab"
					onClick={(e) => handleScroll(e, "lab")}
					className={desktopLinkClass}
				>
					{navbarContent.lab}
				</a>
				<a
					href="#publications"
					onClick={(e) => handleScroll(e, "publications")}
					className={desktopLinkClass}
				>
					{navbarContent.publications}
				</a>
				<a
					href="#community"
					onClick={(e) => handleScroll(e, "community")}
					className={desktopLinkClass}
				>
					{navbarContent.community}
				</a>
			</div>

			<div className="flex items-center gap-4 md:gap-6">
				<div className="flex items-center gap-2 font-sans tracking-widest text-[0.625rem] font-bold uppercase">
					<a
						href="/"
						className={`transition-colors duration-300 hover:text-primary ${lang === SupportedLangs.EN ? "text-primary" : "text-outline"}`}
					>
						EN
					</a>
					<span className="text-outline-variant/50">/</span>
					<a
						href="/es/"
						className={`transition-colors duration-300 hover:text-primary ${lang === SupportedLangs.ES ? "text-primary" : "text-outline"}`}
					>
						ES
					</a>
				</div>

				<ThemeToggle />

				<button className="hidden md:block border border-outline-variant/30 text-on-surface px-6 py-2 uppercase tracking-widest text-[0.625rem] font-bold hover:bg-surface-container-high transition-colors duration-300">
					{navbarContent.connect}
				</button>

				<button
					className="lg:hidden text-on-surface flex items-center justify-center cursor-pointer transition-transform duration-300 active:scale-90"
					onClick={toggleMenu}
					aria-label="Toggle mobile menu"
				>
					<motion.span
						key={isMobileMenuOpen ? "close" : "menu"}
						initial={{ opacity: 0, rotate: -90 }}
						animate={{ opacity: 1, rotate: 0 }}
						transition={{ duration: 0.2 }}
						className="material-symbols-outlined text-2xl"
					>
						{isMobileMenuOpen ? "close" : "menu"}
					</motion.span>
				</button>
			</div>

			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.2, ease: "easeOut" }}
						className="absolute top-16 left-0 w-full bg-surface-container border-b border-outline-variant/20 flex flex-col p-6 gap-6 lg:hidden shadow-2xl origin-top"
					>
						<a
							href="#experience"
							onClick={(e) => handleScroll(e, "experience")}
							className="font-sans tracking-widest text-xs uppercase font-bold text-outline hover:text-primary transition-colors duration-300"
						>
							{navbarContent.experience}
						</a>
						<a
							href="#lab"
							onClick={(e) => handleScroll(e, "lab")}
							className="font-sans tracking-widest text-xs uppercase font-bold text-outline hover:text-primary transition-colors duration-300"
						>
							{navbarContent.lab}
						</a>
						<a
							href="#publications"
							onClick={(e) => handleScroll(e, "publications")}
							className="font-sans tracking-widest text-xs uppercase font-bold text-outline hover:text-primary transition-colors duration-300"
						>
							{navbarContent.publications}
						</a>
						<a
							href="#community"
							onClick={(e) => handleScroll(e, "community")}
							className="font-sans tracking-widest text-xs uppercase font-bold text-outline hover:text-primary transition-colors duration-300"
						>
							{navbarContent.community}
						</a>
						<button className="border border-outline-variant/30 text-on-surface px-6 py-4 uppercase tracking-widest text-[0.625rem] font-bold hover:bg-surface-container-high transition-colors duration-300 w-full text-left mt-4 cursor-pointer">
							{navbarContent.connect}
						</button>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
}
