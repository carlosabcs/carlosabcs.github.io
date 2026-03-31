import type { PortfolioData } from "./types";

export const es: PortfolioData = {
	nav: {
		experience: "Experiencia",
		lab: "Laboratorio",
		publications: "Publicaciones",
		community: "Comunidad",
		connect: "Conectar",
	},
	hero: {
		location: "BASADO EN LIMA, PERÚ / REMOTO",
		title1: "Construyo sistemas resilientes para",
		title2: "problemas complejos.",
		description:
			"Senior Frontend Engineer con más de 6 años de experiencia desarrollando y escalando aplicaciones web para audiencias de más de 50,000 usuarios. Especializado en React.js, Svelte y TypeScript.",
		cvButton: "Descargar CV",
		labButton: "Ver Laboratorio Técnico",
	},
	experience: {
		sectionTitle: "Trayectoria Profesional",
		header: "Impacto Técnico",
		roles: [
			{
				title: "Frontend Web Developer",
				company: "Globant (Qiddiya)",
				period: "05/2024 — PRESENTE",
				description:
					"Desarrollo y optimización de funcionalidades clave con SvelteKit y TypeScript. Creación de más de 40 componentes reutilizables (WCAG 2.1 AA) desde prototipos en Figma para el sistema de diseño.",
				tech: ["SvelteKit", "TypeScript", "GraphQL"],
				metrics: [
					{ value: "≥95", label: "Puntuación A11Y" },
					{ value: "50+", label: "Bugs Resueltos" },
				],
			},
			{
				title: "Full Stack Software Engineer",
				company: "Globant (Google PSO)",
				period: "02/2022 — 04/2024",
				description:
					"Desarrollo y evolución de PSO Launchpad usando React.js y TypeScript, enfocado en una arquitectura de UI escalable y mantenible.",
				tech: ["React", "Express.js", "GCP"],
				metrics: [
					{ value: "200%", label: "Aumento de Escalabilidad" },
					{ value: "8 min", label: "Tiempo de Deploy (de 30m)" },
				],
			},
			{
				title: "Full Stack Software Engineer",
				company: "omegaUp",
				period: "06/2019 — 01/2022",
				description:
					"Diseño y mantenimiento de sistemas de notificaciones y medallas con Vue.js, TypeScript, Python y PHP para una plataforma de más de 200,000 usuarios activos anuales.",
				tech: ["Vue.js", "Python", "PHP"],
				metrics: [
					{ value: "200k+", label: "Usuarios Activos Anuales" },
					{ value: "5", label: "Mejoras Mayores" },
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
