import { useEffect } from "react";
import { profile } from "../data/profile.js";

/**
 * Sets page metadata by *updating* the tags already in index.html rather than
 * rendering new ones.
 *
 * React 19 can hoist `<title>` and `<meta>` from a component, but it appends —
 * it doesn't replace what the HTML document already declares. With a static
 * shell that ships its own title, description and canonical, that leaves two
 * of each in the head, and two conflicting canonicals is worse than none.
 *
 * Mutating the existing tags keeps exactly one of each, works with the
 * pre-rendered per-route HTML that `scripts/prerender.mjs` emits, and still
 * updates on client-side navigation.
 */
function setMeta(selector, attr, value) {
	const el = document.head.querySelector(selector);
	if (el) el.setAttribute(attr, value);
}

export default function useMeta({ title, description, path = "/" }) {
	useEffect(() => {
		const url = `${profile.site}${path}`;

		if (title) {
			document.title = title;
			setMeta('meta[property="og:title"]', "content", title);
			setMeta('meta[name="twitter:title"]', "content", title);
		}

		if (description) {
			setMeta('meta[name="description"]', "content", description);
			setMeta('meta[property="og:description"]', "content", description);
			setMeta('meta[name="twitter:description"]', "content", description);
		}

		setMeta('link[rel="canonical"]', "href", url);
		setMeta('meta[property="og:url"]', "content", url);
	}, [title, description, path]);
}
