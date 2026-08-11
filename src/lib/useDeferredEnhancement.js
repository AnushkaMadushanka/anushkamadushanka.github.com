import { useEffect, useState } from "react";

/**
 * Gate for expensive, purely decorative enhancements — here, the WebGL avatar.
 *
 * Returns true only once the browser is idle *and* the device looks like it can
 * afford it. The static portrait renders regardless, so nothing below depends
 * on this resolving; the 3D head is strictly an upgrade on top of it.
 */
export default function useDeferredEnhancement({ minWidth = 900 } = {}) {
	const [ready, setReady] = useState(false);

	useEffect(() => {
		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const narrow = window.matchMedia(`(max-width: ${minWidth - 1}px)`).matches;
		const coarse = window.matchMedia("(pointer: coarse)").matches;

		/* The head tracks a cursor. Without one it has nothing to do, so a
		   touch device would pay 257 KB and a WebGL context for no behaviour. */
		if (reduced || narrow || coarse) return;

		/* Respect an explicitly low-memory device or a metered connection. */
		if (navigator.deviceMemory && navigator.deviceMemory < 4) return;
		const conn = navigator.connection;
		if (conn?.saveData) return;
		if (conn?.effectiveType && /2g/.test(conn.effectiveType)) return;

		const schedule = window.requestIdleCallback ?? ((cb) => setTimeout(cb, 900));
		const cancel = window.cancelIdleCallback ?? clearTimeout;
		const handle = schedule(() => setReady(true), { timeout: 3000 });

		return () => cancel(handle);
	}, [minWidth]);

	return ready;
}
