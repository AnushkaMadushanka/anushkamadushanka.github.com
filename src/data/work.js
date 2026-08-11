/**
 * Products shipped for employers. These are the strongest evidence on the site,
 * so they lead — each one states what it is, what I owned, and what happened.
 */
export const work = [
	{
		slug: "uplist",
		name: "Uplist",
		company: "Ray White",
		year: "2024 - present",
		summary:
			"The pre-market property app of Australasia's largest real estate group. Agents list and share properties before they hit the public market.",
		contribution:
			"React Native and TypeScript app, plus the Supabase Postgres work behind it — schema, queries and API integration for the core listing workflows.",
		outcomes: [
			"33 releases shipped",
			"93 agents across 10 offices",
			"324 listings created in pilot",
		],
		stack: ["React Native", "TypeScript", "Supabase", "PostgreSQL"],
		/* No screenshot: Uplist is a pre-market listing app, so real screens
		   contain unpublished property data. Drop a cleared image here and the
		   card picks it up automatically. */
		image: null,
		href: "https://uplist.com.au",
		hrefLabel: "uplist.com.au",
		featured: true,
	},
	{
		slug: "shoprecorder",
		name: "ShopRecorder",
		company: "ShopShare.tv",
		year: "2021 - 2024",
		summary:
			"A Chrome extension that records a browser tab and turns it into shoppable video — the content engine behind the whole ShopShare platform.",
		contribution:
			"Built and launched it end to end, from the extension itself through to the upload pipeline and the creator-facing library.",
		outcomes: ["5,475 videos published", "2,106 creators"],
		stack: ["Chrome Extensions", "React", "Node.js", "AWS"],
		image: "/projects/shopcast-recorder.webp",
		href: "https://shopshare.tv",
		hrefLabel: "shopshare.tv",
		featured: true,
	},
	{
		slug: "shopshare",
		name: "ShopShare",
		company: "ShopShare.tv",
		year: "2021 - 2024",
		summary:
			"A social-commerce platform connecting stylists with shoppers through personal edits, earning creators commission on what their audience buys.",
		contribution:
			"Led the entire stack — React frontend, Node and GraphQL APIs, PostgreSQL and AWS. Rebuilt billing into four tiers with team accounts, and integrated five affiliate networks to attribute retail commission back to creators.",
		outcomes: ["$9k MRR", "412 paying subscribers", "1.29% monthly churn"],
		stack: ["React", "Node.js", "GraphQL", "PostgreSQL", "AWS", "Stripe"],
		image: "/projects/shopshare.webp",
		href: "https://shopshare.tv",
		hrefLabel: "shopshare.tv",
		featured: true,
	},
	{
		slug: "shopcast",
		name: "Shopcast",
		company: "ShopShare.tv",
		year: "2022 - 2024",
		summary:
			"A Shopify widget that delivers tailored product guidance to shoppers inside a merchant's own storefront, in session.",
		contribution:
			"Built and shipped the widget and its merchant-side configuration.",
		outcomes: [],
		stack: ["React", "Shopify", "Node.js", "GraphQL"],
		image: "/projects/shopcast.webp",
		href: null,
		featured: false,
	},
];
