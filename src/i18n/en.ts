import type { PortfolioData } from "./types";

export const en: PortfolioData = {
	nav: {
		carlosCordova: "Carlos Cordova",
		acronym: "C.C. //",
		positionTitle: "Software Engineer",
		experience: "Experience",
		lab: "Lab",
		publications: "Publications",
		community: "Community",
		connect: "Connect",
		whatsappText: "WhatsApp",
		emailText: "Email",
	},
	hero: {
		location: "BASED IN PERU / REMOTE",
		title1: "Architecting web solutions",
		title2: "with uncompromising precision.",
		description:
			"Senior Full-Stack Engineer with 6+ years of experience. Specialized in React, Svelte, and TypeScript, backed by solid server-side expertise. I engineer resilient, end-to-end systems that scale effortlessly—transforming complex requirements into robust, highly accessible solutions.",
		cvButton: "Download CV",
		cvLink: "/Resume_Carlos_Cordova.pdf", // Matches file in public/ folder
		labButton: "View Technical Lab",
	},
	meta: {
		title: "Carlos Cordova - Software Engineer",
	},
	footer: {
		logo: "Carlos Cordova",
		copyright: "ALL RIGHTS RESERVED.",
		githubText: "Github",
		githubUrl: "https://github.com/carlosabcs",
		linkedinText: "LinkedIn",
		linkedinUrl: "https://linkedin.com/in/carlosabcs",
	},
	experience: {
		sectionTitle: "Professional Trajectory",
		header: "Engineered Impact",
		roles: [
			{
				title: "Frontend Web Developer",
				company: "Globant (Qiddiya)",
				period: "05/2024 — PRESENT",
				description:
					"Developed and optimized key features with SvelteKit and TypeScript. Created 40+ reusable components (WCAG 2.1 AA) from Figma prototypes for the platform design system.",
				tech: ["SvelteKit", "TypeScript", "GraphQL"],
				metrics: [
					{ value: "≥95", label: "A11Y Score" },
					{ value: "50+", label: "Bugs Resolved" },
				],
			},
			{
				title: "Full Stack Software Engineer",
				company: "Globant (Google PSO)",
				period: "02/2022 — 04/2024",
				description:
					"Worked on the development and evolution of PSO Launchpad using React.js and TypeScript, focusing on scalable and maintainable UI architecture.",
				tech: ["React", "Express.js", "GCP"],
				metrics: [
					{ value: "200%", label: "Scalability Increase" },
					{ value: "8 min", label: "Deploy Time (from 30m)" },
				],
			},
			{
				title: "Full Stack Software Engineer",
				company: "omegaUp",
				period: "06/2019 — 01/2022",
				description:
					"Designed & maintained Badge and Notification Systems with Vue.js, TypeScript, Python, and PHP for a platform of 200,000+ yearly active users.",
				tech: ["Vue.js", "Python", "PHP"],
				metrics: [
					{ value: "200k+", label: "Yearly Active Users" },
					{ value: "5", label: "Major Enhancements" },
				],
			},
		],
	},
	lab: {
		sectionTitle: "Internal Laboratory",
		header: "Technical Components",
		items: [
			{
				icon: "calendar_month",
				version: "VERSION 1.0.0",
				title: "Dual-Calendar Engine",
				description:
					"A dual-calendar component supporting Hijri & Gregorian inputs, enabling international user workflows with seamless state synchronization.",
				tags: ["React", "SvelteKit", "DateMath"],
				linkText: "View Source",
			},
			{
				icon: "notifications_active",
				version: "VERSION 2.1.0",
				title: "Notification System Proxy",
				description:
					"Architectural blueprint and component system for high-throughput notification delivery and badge rendering.",
				tags: ["TypeScript", "Vue Concept", "State Management"],
				linkText: "View Architecture",
			},
		],
	},
	publications: {
		sectionTitle: "Research & Theory",
		header: "Academic Publications",
		items: [
			{
				conference: "Proceedings of the International AAAI Conference",
				year: "2022",
				title:
					"Analysis of the influence of political polarization in the vaccination stance",
				description:
					"Research on the Brazilian COVID-19 scenario utilizing advanced data mining and classification techniques.",
				linkText: "Read Paper",
				url: "#",
			},
			{
				conference: "Anais Do Simpósio Brasileiro de Banco de Dados (SBBD)",
				year: "2021",
				title: "Interpreting BERT-based stance classification",
				description:
					"A case study about the Brazilian COVID vaccination focusing on NLP and Transformer models.",
				linkText: "Read Paper",
				url: "#",
			},
		],
	},
	community: {
		sectionTitle: "Stewardship",
		header: "Community & Leadership",
		items: [
			{
				icon: "diversity_3",
				category: "GSoC Mentorship",
				title: "3x Project Mentor",
				description:
					"Mentored for Google Summer of Code with omegaUp (2022-2024), achieving 100% project completion and 2 full-time internships.",
			},
			{
				icon: "workspace_premium",
				category: "Recognition",
				title: "Best Paper Awards",
				description:
					"Best Paper Award at KDMiLe Symposium 2020 and Best Student Paper Runner-Up at IEEE/WIC/ACM WI-IAT 2021.",
			},
			{
				icon: "school",
				category: "CodeLabs 2020",
				title: "Intern Mentor",
				description:
					"Mentored three interns, fostering skill development and open-source project contributions.",
			},
		],
	},
};
