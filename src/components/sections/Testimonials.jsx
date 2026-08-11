import { useState } from "react";
import { ImQuotesLeft } from "react-icons/im";
import { testimonials } from "../../data/testimonials.js";
import Section from "../ui/Section.jsx";
import Reveal from "../ui/Reveal.jsx";
import styles from "./Testimonials.module.css";

function initialsOf(name) {
	return name
		.split(/\s+/)
		.slice(0, 2)
		.map((w) => w[0])
		.join("")
		.toUpperCase();
}

/**
 * Falls back to initials if the photo is missing or fails to load, so a absent
 * file degrades to a designed state instead of a broken-image icon — which is
 * exactly what the previous hotlinked LinkedIn URLs left on the page for two
 * years after they expired.
 */
function Avatar({ name, photo }) {
	const [failed, setFailed] = useState(!photo);

	if (failed) {
		return (
			<div className={styles.avatarFallback} aria-hidden="true">
				{initialsOf(name)}
			</div>
		);
	}

	return (
		<img
			className={styles.avatar}
			src={photo}
			alt=""
			width="48"
			height="48"
			loading="lazy"
			decoding="async"
			onError={() => setFailed(true)}
		/>
	);
}

export default function Testimonials() {
	return (
		<Section
			id="testimonials"
			eyebrow="References"
			title="What people I've worked with say"
		>
			<ul className={styles.grid}>
				{testimonials.map((t, i) => (
					<Reveal as="li" key={t.name} index={i % 2} className={styles.card}>
						<figure className={styles.figure}>
							<ImQuotesLeft className={styles.quoteMark} aria-hidden="true" />
							<blockquote className={styles.quote}>
								<p>{t.quote}</p>
							</blockquote>
							<figcaption className={styles.person}>
								<Avatar name={t.name} photo={t.photo} />
								<span className={styles.personText}>
									<span className={styles.personName}>{t.name}</span>
									<span className={styles.personRole}>
										{t.title} · {t.company}
									</span>
								</span>
							</figcaption>
						</figure>
					</Reveal>
				))}
			</ul>
		</Section>
	);
}
