import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";
import { experience } from "../../data/experience.js";
import { duration } from "../../data/profile.js";
import Section from "../ui/Section.jsx";
import Reveal from "../ui/Reveal.jsx";
import styles from "./Experience.module.css";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function label(iso) {
	if (!iso) return "Present";
	const [y, m] = iso.split("-").map(Number);
	return `${MONTHS[m - 1]} ${y}`;
}

export default function Experience() {
	return (
		<Section
			id="experience"
			eyebrow="Experience"
			title="Nine years, three teams"
			lede="The last five remote with Australian teams, across social commerce, real estate and healthcare."
		>
			<ol className={styles.timeline}>
				{experience.map((role, i) => (
					<Reveal as="li" key={role.company} index={i} className={styles.item}>
						<div className={styles.marker} aria-hidden="true">
							<span className={styles.dot} />
						</div>

						<div className={styles.content}>
							<div className={styles.header}>
								<h3 className={styles.role}>{role.role}</h3>
								<p className={styles.company}>
									{role.company}
									<span className={styles.sep}>·</span>
									<span className={styles.type}>{role.type}</span>
								</p>
								<p className={styles.dates}>
									{/* Computed from the dates, so it can never go stale the
									    way the old hardcoded "2 yrs 7 mos" did. */}
									<time dateTime={role.start}>{label(role.start)}</time>
									{" — "}
									<time dateTime={role.end ?? undefined}>{label(role.end)}</time>
									<span className={styles.sep}>·</span>
									{duration(role.start, role.end)}
									<span className={styles.sep}>·</span>
									{role.location}
								</p>
							</div>

							<p className={styles.blurb}>{role.blurb}</p>

							<ul className={styles.highlights}>
								{role.highlights.map((h) => (
									<li key={h}>{h}</li>
								))}
							</ul>

							<ul className={styles.stack}>
								{role.stack.map((s) => (
									<li key={s}>{s}</li>
								))}
							</ul>
						</div>
					</Reveal>
				))}
			</ol>

			<Reveal className={styles.more}>
				<Link to="/about" className={styles.moreLink}>
					Full background, skills and education
					<HiArrowRight aria-hidden="true" />
				</Link>
			</Reveal>
		</Section>
	);
}
