import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { SupportedLangs, type PortfolioData } from "../i18n/types";

interface NavbarProps {
	lang: SupportedLangs;
	navbarContent: PortfolioData["nav"];
}

export default function Navbar({ lang, navbarContent }: NavbarProps) {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isConnectOpen, setIsConnectOpen] = useState(false);
	const connectMenuRef = useRef<HTMLDivElement>(null);

	const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
	const toggleConnect = () => setIsConnectOpen(!isConnectOpen);

	const whatsappUrl = "https://wa.me/51973851600";
	const emailUrl = "mailto:carlosab1802@gmail.com";

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				connectMenuRef.current &&
				!connectMenuRef.current.contains(event.target as Node)
			) {
				setIsConnectOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const handleScroll = (
		e: React.MouseEvent<HTMLAnchorElement>,
		targetId: string,
	) => {
		e.preventDefault();
		const target = document.getElementById(targetId);
		if (target) {
			const offset = 64;
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

				<div className="hidden md:block relative" ref={connectMenuRef}>
					<button
						onClick={toggleConnect}
						className={`border text-on-surface px-6 py-2 uppercase tracking-widest text-[0.625rem] font-bold transition-colors duration-300 cursor-pointer ${isConnectOpen ? "border-primary bg-surface-container-high" : "border-outline-variant/30 hover:bg-surface-container-high"}`}
					>
						{navbarContent.connect}
					</button>

					<AnimatePresence>
						{isConnectOpen && (
							<motion.div
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: 10 }}
								transition={{ duration: 0.2 }}
								className="absolute right-0 mt-2 w-48 bg-surface-container border border-outline-variant/20 shadow-2xl flex flex-col"
							>
								<a
									href={emailUrl}
									className="px-6 py-4 text-xs font-bold font-sans uppercase tracking-widest text-outline hover:text-primary hover:bg-surface-container-high transition-colors flex items-center gap-3 border-b border-outline-variant/10"
								>
									<span className="material-symbols-outlined text-lg">
										mail
									</span>
									{navbarContent.emailText}
								</a>
								<a
									href={whatsappUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="px-6 py-4 text-xs font-bold font-sans uppercase tracking-widest text-outline hover:text-primary hover:bg-surface-container-high transition-colors flex items-center gap-3"
								>
									<span className="material-symbols-outlined text-lg">
										phone
									</span>
									{navbarContent.whatsappText}
								</a>
							</motion.div>
						)}
					</AnimatePresence>
				</div>

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
						{/* Hidden for v1
						<a
							href="#lab"
							onClick={(e) => handleScroll(e, "lab")}
							className="font-sans tracking-widest text-xs uppercase font-bold text-outline hover:text-primary transition-colors duration-300"
						>
							{navbarContent.lab}
						</a> */}
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

						<div className="border-t border-outline-variant/20 pt-6 mt-2 flex flex-col gap-4">
							<span className="text-[0.625rem] font-bold uppercase tracking-widest text-outline-variant">
								{navbarContent.connect}
							</span>
							<a
								href={emailUrl}
								className="font-sans tracking-widest text-xs uppercase font-bold text-on-surface hover:text-primary transition-colors flex items-center gap-3"
							>
								<span className="material-symbols-outlined">mail</span>{" "}
								{navbarContent.emailText}
							</a>
							<a
								href={whatsappUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="font-sans tracking-widest text-xs uppercase font-bold text-on-surface hover:text-primary transition-colors flex items-center gap-3"
							>
								<span className="material-symbols-outlined">chat</span>{" "}
								{navbarContent.whatsappText}
							</a>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
}
