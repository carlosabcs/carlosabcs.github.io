export enum SupportedLangs {
	ES = "es",
	EN = "en",
}

export interface Metric {
	value: string;
	label: string;
}

export interface ExperienceRole {
	title: string;
	company: string;
	period: string;
	description: string;
	tech: string[];
	metrics: Metric[];
}

export interface LabItem {
	icon: string;
	version: string;
	title: string;
	description: string;
	tags: string[];
	linkText: string;
}

export interface Publication {
	conference: string;
	year: string;
	title: string;
	description: string;
	linkText: string;
	url: string;
}

export interface CommunityRole {
	icon: string;
	category: string;
	title: string;
	description: string;
}

export interface PortfolioData {
	meta: {
		title: string;
	};
	nav: {
		carlosCordova: string;
		acronym: string;
		positionTitle: string;
		experience: string;
		lab: string;
		publications: string;
		community: string;
		connect: string;
		whatsappText: string;
		emailText: string;
	};
	hero: {
		location: string;
		title1: string;
		title2: string;
		description: string;
		cvButton: string;
		cvLink: string;
		labButton: string;
	};
	experience: {
		sectionTitle: string;
		header: string;
		roles: ExperienceRole[];
	};
	lab: {
		sectionTitle: string;
		header: string;
		items: LabItem[];
	};
	publications: {
		sectionTitle: string;
		header: string;
		items: Publication[];
	};
	community: {
		sectionTitle: string;
		header: string;
		items: CommunityRole[];
	};
	footer: {
		logo: string;
		copyright: string;
		githubText: string;
		githubUrl: string;
		linkedinText: string;
		linkedinUrl: string;
	};
}
