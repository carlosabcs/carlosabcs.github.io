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
		header: "Engineering Experience",
		roles: [
			{
				title: "Frontend Web Developer",
				company: "Globant (Qiddiya)",
				period: "05/2024 — 03/2026",
				companyUrl: "https://omegaup.com/",
				description:
					"Built and optimized UI features using SvelteKit and TypeScript. Translated Figma prototypes into a design system with over 60 reusable components, strictly following WCAG 2.1 AA accessibility guidelines. Integrated both REST and GraphQL endpoints and developed a dual-calendar (Hijri/Gregorian) for international audiences. Handled state management and fluid UI animations using Lottie.",
				tech: ["Svelte", "SvelteKit", "TypeScript", "GraphQL", "Vitest"],
				metrics: [
					{ value: "≥95", label: "A11Y Score" },
					{ value: "60+", label: "UI Components" },
				],
			},
			{
				title: "Full Stack Software Engineer",
				company: "Globant (Google PSO)",
				companyUrl: "https://omegaup.com/",
				period: "02/2022 — 04/2024",
				description:
					"Maintained and evolved the PSO Launchpad platform using React and TypeScript. Built backend modules in Express.js for resource estimation and opportunity recommendation. Implemented an on-demand data sync feature that cut manual updates in half. Configured CI/CD pipelines via GCP to optimize the release process.",
				tech: ["React", "Express.js", "GCP", "TypeScript"],
				metrics: [
					{ value: "8 min", label: "Deploy Time" },
					{ value: "50%", label: "Less Manual Syncs" },
				],
			},
			{
				title: "Full Stack Software Engineer",
				company: "omegaUp",
				companyUrl: "https://omegaup.com/",
				period: "06/2019 — 01/2022",
				description:
					"Architected the Notification and Badge systems for the open-source competitive programming platform. Wrote the School Ranking algorithm and set up automated cronjobs for daily data aggregation. Collaborated on technical design documents to scope large-scale enhancements for a massive user base.",
				tech: ["Vue.js", "Python", "PHP", "Docker", "TypeScript", "MySQL"],
				metrics: [
					{ value: "200k+", label: "Yearly Users" },
					{ value: "8+", label: "Own Projects" },
				],
			},
			{
				title: "Full Stack Software Engineer",
				company: "Tera Soluciones Digitales",
				period: "08/2018 — 05/2019",
				description:
					"Developed 'Urbano', a real-time public transit tracking application. Set up TCP communication with GPS hardware using Node.js and managed data streams with Express and MongoDB. Also built a warehouse management dashboard ('Sysfarma') using Laravel and Vue.js.",
				tech: ["Node.js", "MongoDB", "Vue.js", "Laravel"],
				metrics: [
					{ value: "100+", label: "Concurrent Users" },
					{ value: "2", label: "Products Launched" },
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
				conference: "Knowledge and Information Systems",
				year: "2024",
				title:
					"Understanding stance classification of BERT models: an attention-based framework",
				description:
					"An attention-based interpretability framework to identify the most influential words for stance classification using BERT-based models, assessing performance across multiple datasets and languages.",
				linkText: "Read paper",
				url: "https://link.springer.com/article/10.1007/s10115-023-01962-y",
			},
			{
				conference: "AAAI ICWSM",
				year: "2022",
				title:
					"Analysis of the influence of political polarization in the vaccination stance: the Brazilian COVID-19 scenario",
				description:
					"Research leveraging advanced data mining to analyze political polarization and its effect on vaccination behaviors during the pandemic using social media data.",
				linkText: "Read paper",
				url: "https://ojs.aaai.org/index.php/ICWSM/article/view/19281",
			},
			{
				conference: "Simpósio Brasileiro de Banco de Dados (SBBD)",
				year: "2021",
				title:
					"Interpreting BERT-based stance classification: a case study about the Brazilian COVID vaccination",
				description:
					"An interpretability study focusing on Natural Language Processing and Transformer models applied to public health stance classification.",
				linkText: "Read paper",
				url: "https://sol.sbc.org.br/index.php/sbbd/article/view/17867",
			},
			{
				conference: "Journal of Information and Data Management",
				year: "2021",
				title:
					"Assessing the combination of DistilBERT news representations and difusion topological features to classify fake news",
				description:
					"A novel approach combining compact language models (DistilBERT) with network topology features for enhanced fake news detection on social media.",
				linkText: "Read paper",
				url: "https://journals-sol.sbc.org.br/index.php/jidm/article/view/1895",
			},
			{
				conference: "IEEE/WIC/ACM WI-IAT",
				year: "2020",
				title:
					"Quarenteners vs. Chloroquiners: A framework to analyze how political polarization affects the behavior of groups",
				description:
					"A computational framework designed to measure the impact of political extremes on social distancing compliance using large-scale social data.",
				linkText: "Read paper",
				url: "https://ieeexplore.ieee.org/abstract/document/9457781",
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
