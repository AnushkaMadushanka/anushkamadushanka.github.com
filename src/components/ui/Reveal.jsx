import styles from "./Reveal.module.css";

/**
 * Scroll-triggered reveal, driven entirely by CSS.
 *
 * `animation-timeline: view()` runs off the main thread and needs no
 * JavaScript on the scroll path at all, which is exactly what made the old
 * Framer Motion `whileInView` reveals an INP liability.
 *
 * Where the browser doesn't support scroll timelines, the `@supports` guard
 * leaves content simply visible. There is no state in which text fails to
 * render; the previous build could leave the hero heading at opacity 0.
 *
 * `index` staggers siblings by offsetting the scroll range rather than by a
 * time delay, since time-based delays don't apply to a scrubbed timeline.
 */
export default function Reveal({
	children,
	as: Tag = "div",
	index = 0,
	className = "",
	style,
	...rest
}) {
	return (
		<Tag
			className={`${styles.reveal} ${className}`.trim()}
			style={index ? { ...style, "--reveal-i": index } : style}
			{...rest}
		>
			{children}
		</Tag>
	);
}
