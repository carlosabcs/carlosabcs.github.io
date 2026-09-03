import type { PortfolioData } from "./types";

export const en: PortfolioData = {
	nav: {
		carlosCordova: "Carlos Cordova",
		acronym: "C.C. //",
		positionTitle: "Senior Software Engineer",
		experience: "Experience",
		toolkit: "Toolkit",
		lab: "Lab",
		publications: "Publications",
		community: "Community",
		connect: "Connect",
		whatsappText: "WhatsApp",
		emailText: "Email",
	},
	hero: {
		location: "BASED IN PERU / REMOTE",
		title1: "Senior Software Engineer",
		title2:
			"Building software systems with a strong focus on frontend architecture.",
		description:
			"8+ years of experience across TypeScript, React, Svelte, Go, backend services, APIs, and cloud environments. I enjoy solving complex technical problems, taking ownership end-to-end, and turning evolving requirements into maintainable software.",
		cvButton: "Download CV",
		cvLink: "/resume_carlos_cordova.pdf",
		labButton: "View Technical Lab",
	},
	meta: {
		title: "Carlos Cordova - Senior Software Engineer",
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
		highlightsLabel: "Highlights",
		techLabel: "Tech",
		metricsLabel: "Metrics",
		roles: [
			{
				title: "Senior Software Engineer",
				company: "Globant (Verily)",
				period: "04/2026 — Present",
				companyUrl: "https://verily.com/",
				description:
					"Working primarily with Go and React within Verily's healthcare technology ecosystem, contributing to platforms, studies, workflows, content, consent management, and clinical data-related systems.",
				highlights: [
					"Rapidly adapted to complex internal platforms and workflows across Orion and Lifelong.",
					"Contributed to the Bausch + Lomb Dry Eye Disease Study across Go-based services and React applications, configuring and integrating a bundle containing ~10 workflows and 20+ content resources across development and test environments.",
					"Created technical documentation and playbooks to capture system knowledge and simplify recurring operational workflows.",
					"Developing reusable AI-assisted workflows and skills to simplify configuration, validation, testing, and knowledge-navigation tasks.",
				],
				tech: [
					"Go",
					"React",
					"TypeScript",
					"REST APIs",
					"Healthcare Technology",
					"AI-Assisted Development",
				],
				metrics: [],
			},
			{
				title: "Senior Web UI Developer",
				company: "Globant (Qiddiya)",
				period: "05/2024 — 04/2026",
				companyUrl: "https://qiddiya.com/",
				description:
					"Worked on Qiddiya's digital ticketing platform, delivering complex purchase and payment experiences for Aquarabia and Six Flags.",
				highlights: [
					"Owned the frontend integration of HyperPay end-to-end, from technical investigation and proof of concept through production, implementing a customized payment form, validation logic, loading states, error handling, and checkout payment states.",
					"Built the complete Experiences purchase flow, including experience selection, ticket types, participant quantities, extras, cart, confirmation, payment, checkout, and localStorage state persistence.",
					"Developed the complete VIP Pass purchase experience, including ticket restrictions, purchase limits, accommodation options, checkout, and payment.",
					"Developed and optimized key features using SvelteKit and TypeScript while maintaining accessibility scores of 95+.",
					"Built 40+ reusable WCAG 2.1 AA-compliant components from Figma and integrated GraphQL APIs.",
					"Implemented internationalized workflows supporting English/Arabic, multiple currencies, and Hijri/Gregorian calendars while collaborating across ~8 specialized teams.",
					"Identified and resolved 50+ defects through systematic debugging and Vitest testing.",
				],
				tech: [
					"SvelteKit",
					"Svelte",
					"TypeScript",
					"GraphQL",
					"Tailwind CSS",
					"Vitest",
					"Web Accessibility",
					"Internationalization",
				],
				metrics: [
					{ value: "95+", label: "A11Y Score" },
					{ value: "40+", label: "WCAG Components" },
				],
			},
			{
				title: "Full Stack Software Engineer",
				company: "Globant (Google PSO)",
				period: "02/2022 — 04/2024",
				companyUrl: "https://www.google.com/",
				description:
					"Worked on PSO Launchpad, an internal platform supporting Google engagement teams, contributing across frontend architecture, backend services, data synchronization, and product improvements.",
				highlights: [
					"Improved PSO Launchpad provisioning scalability by 4×, reducing new Launchpad configuration from 1 day to 2 hours through frontend architecture and workflow improvements using React and TypeScript.",
					"Implemented opportunity recommendation and resource estimation modules with Express.js.",
					"Developed on-demand synchronization for real-time data retrieval, reducing manual updates by 50%.",
					"Led product demos for 50+ Google engagement managers, gathering feedback that informed UI/UX improvements.",
				],
				tech: [
					"React",
					"TypeScript",
					"Express.js",
					"GCP",
					"REST APIs",
					"Software Architecture",
				],
				metrics: [
					{ value: "4×", label: "Provisioning Capacity" },
					{ value: "50%", label: "Less Manual Updates" },
				],
			},
			{
				title: "Full Stack Software Engineer",
				company: "omegaUp",
				companyUrl: "https://omegaup.com/",
				period: "06/2019 — 01/2022",
				description:
					"Worked on an open-source competitive programming platform serving 200K+ yearly users, contributing across product features, backend systems, technical design, and developer collaboration.",
				highlights: [
					"Designed and maintained Badge and Notification Systems using Vue.js, TypeScript, Python, and PHP for a platform serving 200K+ yearly active users.",
					"Built automated recognition features including Coder of the Month and School of the Month.",
					"Authored and reviewed technical design documents and collaborated with contributors to scope 5 major product enhancements.",
					"Mentored 3 software engineering interns through CodeLabs 2020.",
				],
				tech: ["Vue.js", "TypeScript", "Python", "PHP", "Docker", "MySQL"],
				metrics: [{ value: "200K+", label: "Yearly Active Users" }],
			},
			{
				title: "Full Stack Software Engineer",
				company: "Tera Soluciones Digitales",
				period: "08/2018 — 05/2019",
				description:
					"Built web applications and real-time systems for transportation and warehouse management, working directly with clients from requirements through implementation.",
				highlights: [
					"Built a real-time public transit tracking system using Node.js, TCP, Express, and MongoDB, supporting 100+ concurrent users.",
					"Developed a warehouse management application using Vue.js and Laravel.",
					"Led requirements workshops and collaborated directly with clients to translate business needs into technical solutions.",
				],
				tech: ["Node.js", "Express.js", "MongoDB", "Vue.js", "Laravel"],
				metrics: [{ value: "100+", label: "Concurrent Users" }],
			},
		],
	},
	toolkit: {
		sectionTitle: "Capabilities",
		header: "Engineering Toolkit",
		blocks: [
			{
				label: "Languages",
				items: ["TypeScript", "JavaScript", "Go", "Python", "PHP", "SQL"],
			},
			{
				label: "Frontend",
				items: [
					"React",
					"Svelte",
					"SvelteKit",
					"Vue.js",
					"HTML",
					"CSS",
					"Tailwind CSS",
				],
			},
			{
				label: "Backend & APIs",
				items: ["Node.js", "Express.js", "GraphQL", "REST APIs"],
			},
			{
				label: "Cloud & Engineering",
				items: [
					"GCP",
					"Docker",
					"CI/CD",
					"Vitest",
					"Jest",
					"Web Accessibility",
					"Frontend Architecture",
					"Software Design",
					"Technical Documentation",
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
		header: "Selected Publications",
		viewAllText: "View all publications on Google Scholar",
		viewAllUrl: "https://scholar.google.com/citations?user=4GXga7AAAAAJ",
		items: [
			{
				conference: "Knowledge and Information Systems",
				year: "2024",
				title:
					"Understanding stance classification of BERT models: an attention-based framework",
				description:
					"Research on interpreting BERT-based stance classification through attention mechanisms across datasets and languages.",
				linkText: "Read paper",
				url: "https://link.springer.com/article/10.1007/s10115-023-01962-y",
			},
			{
				conference: "AAAI ICWSM",
				year: "2022",
				title:
					"Analysis of the influence of political polarization in the vaccination stance: the Brazilian COVID-19 scenario",
				description:
					"Analysis of political polarization and vaccination stance using large-scale social media data.",
				linkText: "Read paper",
				url: "https://ojs.aaai.org/index.php/ICWSM/article/view/19281",
			},
			{
				conference: "Journal of Information and Data Management",
				year: "2021",
				title:
					"Assessing the combination of DistilBERT news representations and difusion topological features to classify fake news",
				description:
					"Combined language-model representations and network topology features for fake news detection.",
				linkText: "Read paper",
				url: "https://journals-sol.sbc.org.br/index.php/jidm/article/view/1895",
			},
		],
	},
	community: {
		sectionTitle: "Open Source & Technical Leadership",
		header: "Beyond Professional Experience",
		items: [
			{
				icon: "diversity_3",
				category: "Open Source Mentorship",
				title: "Google Summer of Code Mentor",
				description:
					"Mentored contributors across four GSoC cycles (2022, 2023, 2024, and 2026), supporting projects in plagiarism detection, mobile optimization, frontend modernization, and database performance optimization.",
			},
			{
				icon: "military_tech",
				category: "University Honors",
				title: "Best Student, Class of 2018",
				description:
					"Graduated as the Best Student of the Computer Science class of 2018 at the National University of Trujillo.",
			},
			{
				icon: "workspace_premium",
				category: "Academic Excellence",
				title: "Award-Winning Research",
				description:
					"Received the Best Paper Award at the KDMiLe Symposium 2020 and Best Student Paper Runner-Up at the IEEE/WIC/ACM WI-IAT 2021 international conference.",
			},
			{
				icon: "school",
				category: "Engineering Leadership",
				title: "CodeLabs 2020 Intern Mentor",
				description:
					"Mentored three software engineering interns through their first open-source contributions at omegaUp, supporting technical growth and collaborative development practices.",
			},
		],
	},
};
