/**
 * Single source of truth for roles. Both the home timeline and the About page
 * render from this, and every duration is computed from the dates at runtime,
 * so the site can't drift out of date again.
 */
export const experience = [
	{
		company: "Ray White",
		role: "Full-Stack Engineer, Mobile",
		type: "Contract",
		location: "Remote, Australia",
		start: "2024-08",
		end: null,
		blurb:
			"Building Uplist, the pre-market property app of Australasia's largest real estate group, in a small cross-functional product team.",
		highlights: [
			"Builds features end to end on Uplist in React Native (Expo) and TypeScript.",
			"Added backend features on Supabase Postgres: queries and API integration for the core listing workflows.",
			"Covered core flows with React Native Testing Library so regressions surface before release.",
		],
		stack: ["React Native", "Expo", "TypeScript", "Supabase", "PostgreSQL"],
	},
	{
		company: "ShopShare.tv",
		role: "Lead Developer",
		type: "Full-time",
		location: "Remote, Australia",
		start: "2021-01",
		end: "2024-08",
		blurb:
			"Owned the entire stack of a social-commerce platform end to end, working directly with the founder.",
		highlights: [
			"Built and launched ShopRecorder, a Chrome extension recording browser tabs into shoppable video. 5,475 videos published by 2,106 creators.",
			"Built and shipped Shopcast, a Shopify widget delivering tailored in-session product guidance on merchant storefronts.",
			"Rebuilt billing from one flat product into four paid tiers with team accounts, reaching 412 paying subscribers and $9k MRR across US, UK and APAC at 1.29% monthly churn.",
			"Integrated five affiliate networks (Rakuten, Impact, AWIN, Partnerize and Commission Factory), attributing retail commissions back to creators.",
			"Built the Jest suite across the React frontend and the Node.js and GraphQL APIs. With no QA function, it was what caught regressions and kept frequent releases safe.",
		],
		stack: ["React", "Node.js", "GraphQL", "PostgreSQL", "Sequelize", "AWS"],
	},
	{
		company: "Bourke Technologies",
		role: "Software Engineer, Full-Stack",
		type: "Full-time",
		location: "Sri Lanka",
		start: "2017-09",
		end: "2021-01",
		blurb:
			"Delivered four client products end to end across healthcare, retail and e-commerce.",
		highlights: [
			"Led a hospital communication platform with live intra-hospital video conferencing, built in React Native on a .NET Web API and SQL Server backend.",
			"Built a Unity 3D indoor navigation system for Bunnings retail stores, with an Angular and .NET Web API admin.",
			"Built Burgercafe's POS system and product-management admin panel in .NET MVC and WPF, with Firebase.",
			"Built Buckingham Tea's e-commerce storefront in Angular and .NET Web API, with Stripe payments and Firebase.",
		],
		stack: ["Angular", ".NET Web API", "Microsoft SQL Server", "Unity", "Stripe"],
	},
];

export const education = {
	degree: "B.Eng. (Hons) Software Engineering",
	institution: "Informatics Institute of Technology",
	affiliation: "University of Westminster, UK",
	year: "2023",
	note: "Completed part-time while working full-time.",
};

export const skills = [
	{ group: "Languages", items: ["JavaScript", "TypeScript", "Python", "C#", "SQL"] },
	{ group: "Frontend", items: ["React", "React Native", "Expo", "Angular", "HTML", "CSS"] },
	{ group: "Backend", items: ["Node.js", "GraphQL", "REST APIs", ".NET Web API", "Flask", "Sequelize"] },
	{ group: "Data", items: ["PostgreSQL", "Supabase", "Microsoft SQL Server", "Firebase"] },
	{ group: "Testing & CI", items: ["Jest", "React Native Testing Library", "Playwright", "GitHub Actions"] },
	{ group: "Cloud & Tools", items: ["AWS", "Git", "Unity", "Stripe", "Shopify", "Chrome Extensions"] },
];
