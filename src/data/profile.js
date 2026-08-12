export const CAREER_START = "2017-09";

const WORDS = [
	"zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
	"ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen",
	"seventeen", "eighteen", "nineteen", "twenty",
];

/** Whole months elapsed since `isoMonth`. */
function monthsSince(isoMonth) {
	const [y, m] = isoMonth.split("-").map(Number);
	const now = new Date();
	return (now.getFullYear() - y) * 12 + (now.getMonth() + 1 - m);
}

/**
 * Completed years since `CAREER_START`, floored — the number for the metric
 * tile, which renders it as "n+".
 *
 * Floored rather than rounded: rounding turned 8 years 11 months into a flat
 * "9 years", which the dated experience list directly below it contradicts.
 */
export function yearsSince(isoMonth = CAREER_START) {
	return Math.floor(monthsSince(isoMonth) / 12);
}

/**
 * The same span written for prose — "nearly nine years", "nine years".
 *
 * A single floored number is honest but sells the last eleven months short, and
 * "8+ years" reads weaker than the truth. This says whichever of the three is
 * actually true today, so the copy stays accurate through every rollover
 * without anyone remembering to edit it.
 */
export function yearsPhrase(isoMonth = CAREER_START) {
	const months = monthsSince(isoMonth);
	const years = Math.floor(months / 12);
	const rest = months % 12;

	if (rest === 0) return `${WORDS[years]} years`;
	if (rest >= 9) return `nearly ${WORDS[years + 1]} years`;
	return `over ${WORDS[years]} years`;
}

/**
 * Months between two `YYYY-MM` strings, formatted the way a CV reads.
 * `end` omitted means "to today".
 *
 * Both the start and end month count, which is how LinkedIn and the CV present
 * these: Sep 2017 to Jan 2021 reads as "3 yrs 5 mos", not "3 yrs 4 mos". Using
 * the same convention means the site and the PDF agree.
 */
export function duration(start, end) {
	const [sy, sm] = start.split("-").map(Number);
	const now = new Date();
	const [ey, em] = end
		? end.split("-").map(Number)
		: [now.getFullYear(), now.getMonth() + 1];

	let months = (ey - sy) * 12 + (em - sm) + 1;
	if (months < 0) months = 0;

	const years = Math.floor(months / 12);
	const rem = months % 12;
	if (years && rem) return `${years} yr${years > 1 ? "s" : ""} ${rem} mo${rem > 1 ? "s" : ""}`;
	if (years) return `${years} yr${years > 1 ? "s" : ""}`;
	return `${rem} mo${rem > 1 ? "s" : ""}`;
}

export const profile = {
	name: "Anushka Madushanka",
	role: "Senior Full-Stack Engineer",
	email: "anushkamadushanka1998@gmail.com",
	phone: "+94 77 610 5003",
	location: "Sri Lanka",
	timezone: "UTC+5:30",
	availability: "Open to remote roles and Colombo on-site",

	/** The one-line pitch. */
	tagline:
		"I build and own products end to end: React and React Native on the front, Node, GraphQL and Postgres behind them.",

	/** Longer version for the About page and meta descriptions. */
	summary: `Full-stack engineer with ${yearsPhrase()} shipping production web and mobile products across social commerce, real estate and healthcare, the last five remote with Australian teams. Nearly four years as lead developer at ShopShare.tv, taking a React, Node.js, GraphQL and PostgreSQL platform on AWS to $9k MRR. Now building Uplist, Ray White's React Native and Supabase property app.`,

	links: {
		github: "https://github.com/AnushkaMadushanka",
		linkedin: "https://www.linkedin.com/in/anushka-madushanka/",
		itch: "https://anushka-madushanka.itch.io/",
		cv: "/cv.pdf",
	},

	site: "https://anushkamadushanka.github.io",
};

/** Headline numbers. Each one is traceable to something real. */
export const metrics = [
	{ value: yearsSince(), suffix: "+", label: "Years shipping", detail: "Production web and mobile since 2017" },
	{ value: "2,106", suffix: "", label: "Creators served", detail: "On the ShopShare platform I led" },
	{ value: "9", prefix: "$", suffix: "k", label: "MRR reached", detail: "412 paying subscribers, 1.29% churn" },
	{ value: "33", suffix: "", label: "Releases shipped", detail: "Of Uplist, Ray White's property app" },
];
