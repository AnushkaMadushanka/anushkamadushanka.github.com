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
 * The span since `CAREER_START`, written for prose: "over eight years",
 * "nearly nine years", "nine years".
 *
 * Flooring the number is honest but sells the last eleven months short, and
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

/*
 * No headline-metrics export here, on purpose.
 *
 * The hero used to close on a four-tile strip: years, creators, MRR, releases.
 * Every one of those numbers already appears in the case study or the
 * experience entry it came from, where the reader has the story that makes it
 * mean something. As bare tiles they lost that. "33 releases" is an activity
 * count with no outcome attached, and "$9k MRR" reads small until you know it
 * came from restructuring one flat plan into four tiers. Each number now
 * appears exactly once, next to its cause.
 */
