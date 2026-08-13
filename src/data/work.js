/**
 * Products shipped for employers. These are the strongest evidence on the
 * site, so they lead: each one states what it is, what I owned, and what
 * happened. Items with a `caseStudy` get their own page at /work/<slug>.
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
			"React Native and TypeScript feature work in a small cross-functional product team, plus the Supabase Postgres behind it: schema, queries and API integration for the core listing workflows.",
		outcomes: [
			"33 releases shipped",
			"93 agents across 10 offices",
			"324 listings created in pilot",
		],
		stack: ["React Native", "TypeScript", "Supabase", "PostgreSQL"],
		/* Two shapes for two slots: the featured card's media column is tall and
		   roughly square, so a 16:10 landscape would be cover-cropped down to
		   the middle phone. The wide composite is for the case-study hero. */
		cardImage: "/work/uplist/card.webp",
		image: "/work/uplist/hero.webp",
		imageSize: [1600, 1000],
		links: [
			{ href: "https://uplist.au", label: "uplist.au" },
			{ href: "https://apps.apple.com/au/app/uplist-property/id6739601168", label: "App Store" },
			{
				href: "https://play.google.com/store/apps/details?id=com.uplist.property&hl=en_AU",
				label: "Google Play",
			},
		],
		featured: true,

		caseStudy: {
			facts: [
				{ label: "Role", value: "Full-Stack Engineer, Mobile (contract)" },
				{ label: "Period", value: "August 2024 - present" },
				{ label: "Team", value: "Small cross-functional product team" },
				{ label: "Status", value: "In pilot, on the App Store and Google Play" },
			],
			lede: "Most property portals show you a house once it's already public, by which point half the market has seen it. Uplist moves the listing earlier, so agents can share a property before it goes live and buyers can act on it first.",
			metrics: [
				{ value: "33", label: "Releases shipped" },
				{ value: "93", label: "Agents in the pilot" },
				{ value: "10", label: "Offices" },
				{ value: "324", label: "Listings created" },
			],

			sections: [
				{
					heading: "What it is",
					body: [
						"Uplist is the pre-market property app of Ray White, Australasia's largest real estate group. Agents list and share a property before it hits the public market; buyers follow properties to track price changes, save suburb searches, and get alerted the moment something matches what they're looking for.",
						"Both sides of that are the same product. The agent needs a listing to be shareable before it's public, and the buyer needs to find it, so the interesting work sits in the middle: what a listing is allowed to be before it officially exists.",
					],
				},
				{
					heading: "My part in it",
					body: [
						"This is a team product, not mine. I'm one engineer in a small cross-functional group, and the app is the result of everyone in it. What I've contributed is feature work in React Native and TypeScript across 33 releases to the App Store and Google Play.",
						"I also deliver the backend that goes with those features, on Supabase Postgres: schema design, the queries behind the feed and search, and the API integration for the core listing workflows. Working across both ends means a feature lands as one piece of work rather than being handed across a boundary and negotiated back.",
					],
				},
				{
					heading: "Still a pilot",
					body: [
						"The app is downloadable from both stores, but it is not a finished public rollout. It's running as a pilot with real agents: 93 of them across 10 offices, and 324 listings created inside the product.",
						"That distinction matters, because a pre-market tool only works if agents actually put their best properties into it before listing them anywhere else. That's a trust problem as much as a software one. It has to be quick enough to use in the moment and reliable enough to stake a listing on. Getting that right with a real cohort is what the pilot is for.",
					],
				},
			],

			galleryLayout: "phones",
			gallery: [
				{
					src: "/work/uplist/feed.webp",

					size: [620, 1262],
					alt: "The Uplist feed showing a pre-market property in Pymble with photos, bed, bath and car counts, price on application, and the listing agent",
				},
				{
					src: "/work/uplist/listing.webp",

					size: [620, 1261],
					alt: "A property detail screen for 174 Copeland Road, showing interior photos, a days-remaining countdown, and Enquire and Call actions",
				},
				{
					src: "/work/uplist/map.webp",

					size: [620, 1263],
					alt: "Map search with properties plotted across a suburb and a contact-agent card for the selected listing",
				},
				{
					src: "/work/uplist/notifications.webp",

					size: [620, 1265],
					alt: "The notifications screen with alerts for updated properties and new listings in followed suburbs",
				},
			],
		},
	},

	{
		slug: "shopshare",
		name: "ShopShare",
		company: "ShopShare.tv",
		year: "2021 - 2024",
		summary:
			"A social-commerce platform connecting stylists with shoppers through personal edits, earning creators commission on what their audience buys.",
		contribution:
			"Led the entire stack: React frontend, Node and GraphQL APIs, PostgreSQL and AWS. Rebuilt billing into four tiers with team accounts, and integrated five affiliate networks to attribute retail commission back to creators.",
		outcomes: ["$9k MRR", "412 paying subscribers", "1.29% monthly churn"],
		stack: ["React", "Node.js", "GraphQL", "PostgreSQL", "Sequelize", "AWS"],
		image: "/work/shopshare-hero.webp",
		imageSize: [1280, 1031],
		featured: true,

		caseStudy: {
			role: "Lead Developer",
			period: "January 2021 - August 2024",
			team: "Working directly with the founder",
			lede: "Online shopping lost the part of retail that actually sells: someone whose taste you trust, telling you what works. ShopShare puts that person back in the loop, and pays them for it.",
			metrics: [
				{ value: "2,106", label: "Creators on the platform" },
				{ value: "412", label: "Paying subscribers" },
				{ value: "$9k", label: "Monthly recurring revenue" },
				{ value: "1.29%", label: "Monthly churn" },
			],
			sections: [
				{
					heading: "What I owned",
					body: [
						"I led development for three and a half years, working directly with the founder. That meant the whole stack rather than a slice of it: the React frontend, the Node and GraphQL APIs, the PostgreSQL schema and Sequelize models underneath, and the AWS infrastructure it all ran on.",
						"It also meant the commercial machinery, which is the part of a product engineers usually don't touch: subscription tiers, team accounts, and the affiliate plumbing that decides whether a creator gets paid correctly.",
					],
				},
				{
					heading: "Rebuilding billing into a business",
					body: [
						"ShopShare launched as a single flat product. One price, one plan, no way to sell differently to a solo stylist and a retail team.",
						"I rebuilt it into four paid tiers with team accounts: multiple seats under one subscription, with the entitlement checks that implies threading through the whole application rather than sitting in one billing module.",
						"That restructure is what took the platform to 412 paying subscribers and $9k MRR across the US, UK and APAC, holding 1.29% monthly churn.",
					],
				},
				{
					heading: "Getting creators paid",
					body: [
						"A creator recommends a jacket, their audience buys it from the retailer, and the commission has to find its way back. Every retailer routes that through a different affiliate network, each with its own attribution model and reporting format.",
						"I integrated five of them (Rakuten, Impact, AWIN, Partnerize and Commission Factory) and normalised what they return into a single view of what a creator earned. On top of that I built the admin reporting on creator activity, so the team could see what was actually being published and what it was converting.",
					],
				},
			],
			gallery: [
				{
					src: "/work/shopshare-storefront.webp",

					size: [1278, 1279],
					alt: "A branded ShopShare storefront for the fashion label Ally, showing shopcasts and products",
				},
				{
					src: "/work/shopshare-creator.webp",

					size: [1278, 1279],
					alt: "A creator profile page on ShopShare showing shopboards and a searchable product grid with prices",
				},
				{
					src: "/work/shopshare-player.webp",

					size: [1280, 960],
					alt: "The ShopShare player showing a product video alongside a shoppable product rail with buy buttons",
				},
			],
		},
	},

	{
		slug: "shoprecorder",
		name: "ShopRecorder",
		company: "ShopShare.tv",
		year: "2021 - 2024",
		summary:
			"A Chrome extension that records a browser tab and turns it into shoppable video. It was the content engine behind the whole ShopShare platform.",
		contribution:
			"Built and launched it end to end, from the extension itself through to the upload pipeline and the creator-facing library.",
		outcomes: ["5,475 videos published", "2,106 creators"],
		stack: ["Chrome Extensions", "React", "Node.js", "AWS"],
		image: "/work/shoprecorder-hero.webp",
		imageSize: [1280, 1025],
		featured: true,

		caseStudy: {
			role: "Lead Developer",
			period: "2021 - 2024",
			team: "ShopShare.tv",
			lede: "A social-commerce platform is only worth as much as the content in it. ShopRecorder is the tool that made producing that content take minutes instead of an afternoon.",
			metrics: [
				{ value: "5,475", label: "Videos published" },
				{ value: "2,106", label: "Creators using it" },
			],
			sections: [
				{
					heading: "The problem",
					body: [
						"Creators were shooting product videos the hard way: screen-record with something generic, edit elsewhere, upload, then manually re-attach every product that appeared so the video was actually shoppable. Most of the effort went into the bookkeeping rather than the styling.",
						"The browser already knows which products are on screen, so a recorder that lives in the tab can collect them as it goes.",
					],
				},
				{
					heading: "What I built",
					body: [
						"A Chrome extension that records the tab, the microphone and the creator's camera together, with the camera composited in as the bubble you see in the finished video. Creators shop as they normally would while narrating, and the products they visit are collected into the shoppable rail automatically.",
						"I built it end to end: the extension, the upload pipeline into AWS, and the creator-facing library where recordings land, get titled and get published.",
					],
				},
				{
					heading: "A side effect worth keeping",
					body: [
						"Chrome extensions have no hot reload. Every change meant waiting for webpack, switching to chrome://extensions, clicking reload and switching back, dozens of times an hour, with no signal about whether the build you were testing was even finished.",
						"I built a webpack plugin that broadcasts build state to a companion extension, which reloads the target extension the moment the build lands. It came out of this project and I published it to npm as auto-extension-reloader.",
					],
					link: {
						href: "https://www.npmjs.com/package/auto-extension-reloader",
						label: "auto-extension-reloader on npm",
					},
				},
			],
			gallery: [
				{
					src: "/work/shoprecorder-editor.webp",

					size: [1280, 1025],
					alt: "The ShopRecorder camera bubble over a retailer's product page, with the shoppable product rail building alongside",
				},
				{
					src: "/work/shoprecorder-instore.webp",

					size: [1400, 996],
					alt: "The ShopRecorder camera bubble overlaid on a live merchant storefront selling children's books",
				},
			],
		},
	},

	{
		slug: "shopcast",
		name: "Shopcast",
		company: "ShopShare.tv",
		year: "2022 - 2024",
		summary:
			"A Shopify widget that delivers tailored product guidance to shoppers inside a merchant's own storefront, in session.",
		contribution:
			"Built and shipped the widget and its merchant-side configuration, including per-store theming and per-video analytics.",
		outcomes: [],
		stack: ["React", "Shopify", "Node.js", "GraphQL"],
		image: "/work/shopcast-hero.webp",
		imageSize: [1400, 996],
		featured: false,

		caseStudy: {
			role: "Lead Developer",
			period: "2022 - 2024",
			team: "ShopShare.tv",
			lede: "ShopShare brought shoppers to the creator. Shopcast inverted it, putting the creator inside the merchant's own storefront at the moment someone is deciding whether to buy.",
			metrics: [],
			sections: [
				{
					heading: "The idea",
					body: [
						"A shopper on a product page has exactly one question: is this right for me? A product gallery can't answer it. A short video from someone who has handled the product can.",
						"Shopcast is a widget a merchant installs from the Shopify App Store. It puts a button on the product page, and the button opens a video that plays in place, so the shopper never leaves the page they were about to buy from.",
					],
				},
				{
					heading: "Built for merchants, not for us",
					body: [
						"A widget that looks like someone else's product on your storefront doesn't get installed twice. So most of the work went into configuration: merchants set the button label, the player theme colour, the background and where the player opens from, and preview each change against their own storefront before publishing.",
						"On the reporting side, each video gets its own analytics (views, impressions and watch time over a selectable window) so a merchant can tell which videos are doing work and which aren't.",
					],
				},
				{
					heading: "What I owned",
					body: [
						"I built and shipped the widget itself, the merchant-side configuration and the video library, on the same React, Node and GraphQL stack as the rest of the platform.",
					],
				},
			],
			gallery: [
				{
					src: "/work/shopcast-library.webp",

					size: [1400, 788],
					alt: "The Shopcast merchant dashboard showing a grid of draft videos, each with a product thumbnail and creator bubble",
				},
				{
					src: "/work/shopcast-settings.webp",

					size: [1400, 788],
					alt: "Shopcast settings screen with button text, player theme colour swatches, background colour and open position controls",
				},
				{
					src: "/work/shopcast-analytics.webp",

					size: [1400, 788],
					alt: "Shopcast video analytics panel showing views, impressions and watch time with a time-series chart",
				},
			],
		},
	},
];

export function getWork(slug) {
	return work.find((w) => w.slug === slug);
}
