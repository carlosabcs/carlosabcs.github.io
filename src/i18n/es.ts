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
				conference: "Proceedings of the International AAAI Conference",
				year: "2022",
				title:
					"Análisis de la influencia de la polarización política en la postura de vacunación",
				description:
					"Investigación sobre el escenario brasileño de COVID-19 utilizando técnicas avanzadas de minería de datos y clasificación.",
				linkText: "Leer Artículo",
				url: "#",
			},
			{
				conference: "Anais Do Simpósio Brasileiro de Banco de Dados (SBBD)",
				year: "2021",
				title: "Interpretando la clasificación de posturas basada en BERT",
				description:
					"Un estudio de caso sobre la vacunación contra el COVID en Brasil centrado en PNL y modelos Transformer.",
				linkText: "Leer Artículo",
				url: "#",
			},
		],
	},
	community: {
		sectionTitle: "Liderazgo",
		header: "Comunidad y Mentoría",
		items: [
			{
				icon: "diversity_3",
				category: "Mentoría GSoC",
				title: "Mentor de Proyecto (3x)",
				description:
					"Mentor para Google Summer of Code con omegaUp (2022-2024), logrando 100% de finalización de proyectos y 2 pasantías a tiempo completo.",
			},
			{
				icon: "workspace_premium",
				category: "Reconocimiento",
				title: "Premios a Mejores Artículos",
				description:
					"Premio al Mejor Artículo en el Simposio KDMiLe 2020 y Subcampeón al Mejor Artículo de Estudiante en IEEE/WIC/ACM WI-IAT 2021.",
			},
			{
				icon: "school",
				category: "CodeLabs 2020",
				title: "Mentor de Pasantes",
				description:
					"Mentor de tres pasantes, fomentando el desarrollo de habilidades y las contribuciones a proyectos de código abierto.",
			},
		],
	},
};
