import styles from "./Divider.module.css";

/**
 * A decorative seam for the hero/first-section boundary.
 *
 * Purely presentational, so `aria-hidden` keeps it out of the accessibility tree
 * entirely, since it separates nothing that a screen reader can't already tell
 * apart from the landmarks and headings either side.
 */
export default function Divider() {
	return (
		<div className={styles.divider} aria-hidden="true">
			<span className={styles.sheen} />
		</div>
	);
}
