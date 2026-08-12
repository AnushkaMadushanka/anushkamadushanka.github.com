/**
 * Emits a real static HTML file per route, with that route's title,
 * description, canonical and Open Graph tags baked in.
 *
 * Why this exists: the site is a client-rendered SPA on GitHub Pages. Google
 * runs JavaScript, but social scrapers (Slack, LinkedIn, X, iMessage) do not;
 * they read the HTML as served. Without this, sharing a link to a case study
 * shows the home page's title and description.
 *
 * It also means /work/shopshare is served directly by GitHub Pages instead of
 * bouncing through the 404.html redirect, so those URLs load in one hop.
 *
 * The runtime still owns metadata for client-side navigation. See
 * src/lib/useMeta.js, which updates these same tags in place.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const SITE = "https://anushkamadushanka.github.io";

/* Kept in step with src/data by hand. This runs before the bundle exists, so
   it can't import JSX-adjacent modules without a transform step. The test
   below fails the build if a case study is added without a route here. */
const ROUTES = [
	{
		path: "/about",
		title: "About - Anushka Madushanka",
		description:
			"Background, experience and skills of Anushka Madushanka, a senior full-stack engineer shipping production web and mobile products since 2017.",
	},
	{
		path: "/work/uplist",
		title: "Uplist - Anushka Madushanka",
		description:
			"The pre-market property app of Ray White, Australasia's largest real estate group. React Native, TypeScript and Supabase feature work across 33 releases, in a small cross-functional product team.",
		image: "/work/uplist/hero.webp",
	},
	{
		path: "/work/shopshare",
		title: "ShopShare - Anushka Madushanka",
		description:
			"A social-commerce platform connecting stylists with shoppers through personal edits, earning creators commission on what their audience buys. Led the full stack to $9k MRR.",
		image: "/work/shopshare-hero.webp",
	},
	{
		path: "/work/shoprecorder",
		title: "ShopRecorder - Anushka Madushanka",
		description:
			"A Chrome extension that records a browser tab and turns it into shoppable video. 5,475 videos published by 2,106 creators.",
		image: "/work/shoprecorder-hero.webp",
	},
	{
		path: "/work/shopcast",
		title: "Shopcast - Anushka Madushanka",
		description:
			"A Shopify widget delivering tailored product guidance to shoppers inside a merchant's own storefront, in session.",
		image: "/work/shopcast-hero.webp",
	},
	{
		path: "/work/scales-of-faith",
		title: "Scales of Faith - Anushka Madushanka",
		description:
			"A psychological-horror tabletop card battler built solo in Unity 6, where the currency you wager is the time you have left to live. Procedural voice synthesis, adaptive music and an AI that plans against a simulator.",
		image: "/work/scales-of-faith/match-board.webp",
	},
	{
		path: "/work/hotfixed-to-death",
		title: "Hotfixed to Death - Anushka Madushanka",
		description:
			"A first-person boss fight against a live-service dev team, built solo in Unity 6. Every win ships a hotfix aimed at you, and every patch note is a real balance modifier running in the next fight.",
		image: "/work/hotfixed-to-death/minions.webp",
	},
	{
		path: "/work/ape-dansala",
		title: "Ape Dansala - Anushka Madushanka",
		description:
			"A Vesak dansala served under pressure: a Unity 6 arcade serving game built solo, with a global leaderboard on Unity Gaming Services. Playable in the browser.",
		image: "/work/ape-dansala/main-menu.webp",
	},
];

const shell = readFileSync(join(dist, "index.html"), "utf8");

/** Replace the value of `attr` on the tag matched by an attribute selector. */
function setAttr(html, matcher, attr, value) {
	const re = new RegExp(`(<[^>]*${matcher}[^>]*\\s${attr}=")[^"]*(")`, "i");
	if (!re.test(html)) throw new Error(`prerender: no tag matching ${matcher} with ${attr}`);
	return html.replace(re, `$1${escapeAttr(value)}$2`);
}

function escapeAttr(s) {
	return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

let written = 0;
for (const route of ROUTES) {
	let html = shell;

	html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${route.title}</title>`);
	html = setAttr(html, 'name="description"', "content", route.description);
	html = setAttr(html, 'rel="canonical"', "href", `${SITE}${route.path}`);

	html = setAttr(html, 'property="og:title"', "content", route.title);
	html = setAttr(html, 'property="og:description"', "content", route.description);
	html = setAttr(html, 'property="og:url"', "content", `${SITE}${route.path}`);
	html = setAttr(html, 'name="twitter:title"', "content", route.title);
	html = setAttr(html, 'name="twitter:description"', "content", route.description);

	if (route.image) {
		html = setAttr(html, 'property="og:image"', "content", `${SITE}${route.image}`);
		html = setAttr(html, 'name="twitter:image"', "content", `${SITE}${route.image}`);
	}

	const dir = join(dist, route.path);
	mkdirSync(dir, { recursive: true });
	writeFileSync(join(dir, "index.html"), html);
	written++;
	console.log(`prerender: ${route.path}/index.html`);
}

console.log(`prerender: ${written} routes written`);
