import { useCallback, useSyncExternalStore } from "react";

/**
 * Reactive media query.
 *
 * `useSyncExternalStore` is the right primitive here: matchMedia is an
 * external store with a synchronous snapshot. The first render already has the
 * correct value — no flash, no layout shift from a value that only settles
 * after an effect — and React handles any change that lands between render and
 * subscribe, which a useState/useEffect pair would miss.
 */
export default function useMediaQuery(query) {
	const subscribe = useCallback(
		(onChange) => {
			const mql = window.matchMedia(query);
			mql.addEventListener("change", onChange);
			return () => mql.removeEventListener("change", onChange);
		},
		[query]
	);

	const getSnapshot = useCallback(() => window.matchMedia(query).matches, [query]);

	return useSyncExternalStore(subscribe, getSnapshot);
}
