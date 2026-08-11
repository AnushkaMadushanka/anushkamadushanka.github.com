import { useId } from "react";
import Reveal from "./Reveal.jsx";
import styles from "./Section.module.css";

/**
 * A titled page section. Renders a real <section> labelled by its own heading,
 * so screen-reader users can navigate by landmark and heading — the previous
 * build had zero landmarks on the entire page.
 */
export default function Section({ id, eyebrow, title, lede, children, className = "", headingLevel: H = "h2" }) {
	const headingId = useId();

	return (
		<section id={id} aria-labelledby={headingId} className={`${styles.section} ${className}`}>
			<div className="container">
				<Reveal className={styles.head}>
					{eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
					<H id={headingId} className={styles.title}>
						{title}
					</H>
					{lede && <p className={styles.lede}>{lede}</p>}
				</Reveal>
				{children}
			</div>
		</section>
	);
}
