import { useEffect, useMemo, useState } from "react";
import useMediaQuery from "./useMediaQuery.js";

/**
 * Gate for an expensive, purely decorative enhancement. Here, the WebGL head.
 *
 * Returns two separate signals, because callers need them at different times:
 *
 *   eligible: known synchronously on first render. "This device is going to
 *              get the 3D." Anything that has to wait for the model needs to
 *              know this immediately, or it will show a loaded state and then
 *              have to take it back once loading actually starts.
 *   ready:    eligible *and* the browser has gone idle. This is when the
 *              canvas should actually mount.
 *
 * Both track viewport and motion-preference changes, so rotating a tablet or
 * dragging a window across the breakpoint works in either direction.
 */
export default function useDeferredEnhancement({ minWidth = 1024 } = {}) {
	const wideEnough = useMediaQuery(`(min-width: ${minWidth}px)`);
	const finePointer = useMediaQuery("(pointer: fine)");
	const motionWelcome = useMediaQuery("(prefers-reduced-motion: no-preference)");

	/* Static capability checks. These don't change during a session. The head
	   tracks a cursor, so a touch device would pay ~450 KB and a WebGL context
	   for behaviour it can't trigger. */
	const affordable = useMemo(() => {
		const conn = navigator.connection;
		if (navigator.deviceMemory && navigator.deviceMemory < 4) return false;
		if (conn?.saveData) return false;
		if (/2g/.test(conn?.effectiveType ?? "")) return false;
		return true;
	}, []);

	const eligible = affordable && wideEnough && finePointer && motionWelcome;

	const [idleFired, setIdleFired] = useState(false);

	useEffect(() => {
		if (!eligible) return;
		const schedule = window.requestIdleCallback ?? ((cb) => setTimeout(cb, 900));
		const cancel = window.cancelIdleCallback ?? clearTimeout;
		const handle = schedule(() => setIdleFired(true), { timeout: 3000 });
		return () => cancel(handle);
	}, [eligible]);

	/* Derived rather than stored, so losing eligibility takes `ready` with it
	   without a second state write. */
	return { eligible, ready: eligible && idleFired };
}
