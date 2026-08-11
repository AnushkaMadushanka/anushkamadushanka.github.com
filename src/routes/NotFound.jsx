import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi2";
import { profile } from "../data/profile.js";
import styles from "./NotFound.module.css";

export default function NotFound() {
	return (
		<>
			<title>Page not found — Anushka Madushanka</title>
			<meta name="robots" content="noindex" />

			<div className={`container ${styles.wrap}`}>
				<p className={styles.code}>404</p>
				<h1 className={styles.title}>That page doesn&rsquo;t exist</h1>
				<p className={styles.text}>
					The link may be out of date. The AR business card demo that used to live at{" "}
					<code>/ar</code> has been retired.
				</p>
				<div className={styles.actions}>
					<Link to="/" className={styles.primary}>
						<HiArrowLeft aria-hidden="true" />
						Back to home
					</Link>
					<a href={profile.links.github} target="_blank" rel="noreferrer" className={styles.secondary}>
						Browse the code on GitHub
					</a>
				</div>
			</div>
		</>
	);
}
