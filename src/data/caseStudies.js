import { work } from "./work.js";
import { game } from "./game.js";
import { games } from "./games.js";

/**
 * Everything that has a written case study page at /work/<slug>, wherever it
 * came from. Employer products and the solo games share the same page template,
 * so they share one registry rather than the detail route knowing about each
 * source.
 */
export const caseStudies = [...work.filter((w) => w.caseStudy), game, ...games];

export function getCaseStudy(slug) {
	return caseStudies.find((item) => item.slug === slug);
}
