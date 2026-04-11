import type { PortfolioData } from "./types";

export const es: PortfolioData = {
	nav: {
		carlosCordova: "Carlos Cordova",
		acronym: "C.C. //",
		positionTitle: "Software Engineer",
		experience: "Experiencia",
		lab: "Laboratorio",
		publications: "Publicaciones",
		community: "Comunidad",
		connect: "Conectar",
		whatsappText: "WhatsApp",
		emailText: "Email",
	},
	hero: {
		location: "PERÚ / REMOTO",
		title1: "Creando soluciones web",
		title2: "con precisión inquebrantable.",
		description:
			"Senior Full-Stack Engineer con más de 6 años de experiencia. Especializado en React, Svelte y TypeScript, con una sólida base en backend. Construyo sistemas resilientes de extremo a extremo que escalan sin esfuerzo, transformando requerimientos complejos en soluciones robustas y altamente accesibles.",
		cvButton: "Descargar CV",
		cvLink: "/Resume_Carlos_Cordova.pdf",
		labButton: "Ver Laboratorio Técnico",
	},
	meta: {
		title: "Carlos Cordova - Software Engineer",
	},
	footer: {
		logo: "Carlos Cordova",
		copyright: "TODOS LOS DERECHOS RESERVADOS.",
		githubText: "Github",
		githubUrl: "https://github.com/carlosabcs",
		linkedinText: "LinkedIn",
		linkedinUrl: "https://linkedin.com/in/carlosabcs",
	},
	experience: {
		sectionTitle: "Trayectoria Profesional",
		header: "Experiencia en Ingeniería",
		roles: [
			{
				title: "Frontend Web Developer",
				company: "Globant (Qiddiya)",
				companyUrl: "https://omegaup.com/",
				period: "05/2024 — 03/2026",
				description:
					"Desarrollé UI features utilizando SvelteKit y TypeScript. Convertí prototipos de Figma en un sistema de diseño con más de 60 componentes, cumpliendo con los estándares de Accesibilidad WCAG 2.1 AA. Integré endpoints REST y GraphQL, y programé un calendario dual (Gregoriano/Hijri) para flujos de localización. Manejé animaciones con Lottie.",
				tech: ["Svelte", "SvelteKit", "TypeScript", "GraphQL", "Vitest"],
				metrics: [
					{ value: "≥95", label: "Score de A11y" },
					{ value: "60+", label: "Componentes UI" },
				],
			},
			{
				title: "Full Stack Software Engineer",
				company: "Globant (Google PSO)",
				companyUrl: "https://omegaup.com/",
				period: "02/2022 — 04/2024",
				description:
					"Mantuve y optimicé la plataforma PSO Launchpad usando React y TypeScript. Construí módulos de backend en Express.js para estimación de oportunidades. Implementé una cronjob de sincronización de datos bajo demanda que redujo las actualizaciones manuales a la mitad. Optimicé los pipelines de CI/CD usando GCP para acelerar pases a producción.",
				tech: ["React", "Express.js", "GCP", "TypeScript"],
				metrics: [
					{ value: "8 min", label: "Tiempo de Deploy" },
					{ value: "50%", label: "Menos Syncs Manuales" },
				],
			},
			{
				title: "Full Stack Software Engineer",
				company: "omegaUp",
				companyUrl: "https://omegaup.com/",
				period: "06/2019 — 01/2022",
				description:
					"Diseñé los sistemas de Notificaciones e Insignias para la plataforma de programación competitiva open-source. Escribí el algoritmo de ranking de escuelas y configuré cronjobs para la agregación diaria de datos. Diseñé e implementé documentos de diseño técnico para planificar arquitectura y escalabilidad de nuevas características.",
				tech: ["Vue.js", "Python", "PHP", "Docker", "TypeScript", "MySQL"],
				metrics: [
					{ value: "200k+", label: "Usuarios Anuales" },
					{ value: "8+", label: "Proyetos propios" },
				],
			},
			{
				title: "Full Stack Software Engineer",
				company: "Tera Soluciones Digitales",
				period: "08/2018 — 05/2019",
				description:
					"Desarrollé 'Urbano', una aplicación de rastreo de transporte público en tiempo real. Configuré la comunicación TCP con hardware GPS usando Node.js y gestioné el flujo de datos con Express y MongoDB. También construí un dashboard de gestión de almacenes ('Sysfarma') usando Laravel y Vue.js.",
				tech: ["Node.js", "MongoDB", "Vue.js", "Laravel"],
				metrics: [
					{ value: "100+", label: "Usuarios Concurrentes" },
					{ value: "2", label: "Productos Lanzados" },
				],
			},
		],
	},
	lab: {
		sectionTitle: "Laboratorio Interno",
		header: "Componentes Técnicos",
		items: [
			{
				icon: "calendar_month",
				version: "VERSIÓN 1.0.0",
				title: "Motor de Calendario Dual",
				description:
					"Componente de calendario dual que soporta entradas Gregorianas e Islámicas (Hijri), permitiendo flujos de trabajo internacionales con sincronización de estado perfecta.",
				tags: ["React", "SvelteKit", "DateMath"],
				linkText: "Ver Código Base",
			},
			{
				icon: "notifications_active",
				version: "VERSIÓN 2.1.0",
				title: "Proxy de Sistema de Notificaciones",
				description:
					"Plano arquitectónico y sistema de componentes para la entrega de notificaciones de alto rendimiento y renderizado de medallas.",
				tags: ["TypeScript", "Vue Concept", "State Management"],
				linkText: "Ver Arquitectura",
			},
		],
	},
	publications: {
		sectionTitle: "Investigación y Teoría",
		header: "Publicaciones Académicas",
		items: [
			{
				conference: "Knowledge and Information Systems",
				year: "2024",
				title:
					"Understanding stance classification of BERT models: an attention-based framework",
				description:
					"An attention-based interpretability framework to identify the most influential words for stance classification using BERT-based models, assessing performance across multiple datasets and languages.",
				linkText: "Leer artículo",
				url: "https://link.springer.com/article/10.1007/s10115-023-01962-y",
			},
			{
				conference: "AAAI ICWSM",
				year: "2022",
				title:
					"Analysis of the influence of political polarization in the vaccination stance: the Brazilian COVID-19 scenario",
				description:
					"Research leveraging advanced data mining to analyze political polarization and its effect on vaccination behaviors during the pandemic using social media data.",
				linkText: "Leer artículo",
				url: "https://ojs.aaai.org/index.php/ICWSM/article/view/19281",
			},
			{
				conference: "Simpósio Brasileiro de Banco de Dados (SBBD)",
				year: "2021",
				title:
					"Interpreting BERT-based stance classification: a case study about the Brazilian COVID vaccination",
				description:
					"An interpretability study focusing on Natural Language Processing and Transformer models applied to public health stance classification.",
				linkText: "Leer artículo",
				url: "https://sol.sbc.org.br/index.php/sbbd/article/view/17867",
			},
			{
				conference: "Journal of Information and Data Management",
				year: "2021",
				title:
					"Assessing the combination of DistilBERT news representations and difusion topological features to classify fake news",
				description:
					"A novel approach combining compact language models (DistilBERT) with network topology features for enhanced fake news detection on social media.",
				linkText: "Leer artículo",
				url: "https://journals-sol.sbc.org.br/index.php/jidm/article/view/1895",
			},
			{
				conference: "IEEE/WIC/ACM WI-IAT",
				year: "2020",
				title:
					"Quarenteners vs. Chloroquiners: A framework to analyze how political polarization affects the behavior of groups",
				description:
					"A computational framework designed to measure the impact of political extremes on social distancing compliance using large-scale social data.",
				linkText: "Leer artículo",
				url: "https://ieeexplore.ieee.org/abstract/document/9457781",
			},
		],
	},
	community: {
		sectionTitle: "Liderazgo",
		header: "Comunidad y Mentoría",
		items: [
			{
				icon: "diversity_3",
				category: "Mentoría Open Source",
				title: "Google Summer of Code (3x)",
				description:
					"Fui mentor de tres pasantes para omegaUp en el GSoC durante tres años consecutivos (2022-2024), logrando el 100% de finalización de proyectos y facilitando dos contrataciones para la organización.",
			},
			{
				icon: "military_tech",
				category: "Honores Universitarios",
				title: "Primer Puesto de Promoción",
				description:
					"Graduado en el primer puesto de la promoción 2018 de la carrera de Informática (Ciencias de la Computación) en la Universidad Nacional de Trujillo, demostrando excelencia académica constante.",
			},
			{
				icon: "workspace_premium",
				category: "Excelencia Académica",
				title: "Investigación Premiada",
				description:
					"Recibí el Premio al Mejor Artículo en el Simposio KDMiLe 2020 y el 2do Puesto al Mejor Artículo de Estudiante en la conferencia internacional IEEE/WIC/ACM WI-IAT 2021.",
			},
			{
				icon: "school",
				category: "Liderazgo en Ingeniería",
				title: "Mentor en CodeLabs 2020",
				description:
					"Guié a tres pasantes de ingeniería de software en sus primeras contribuciones open-source, fomentando el desarrollo de habilidades técnicas y el trabajo colaborativo.",
			},
		],
	},
};
