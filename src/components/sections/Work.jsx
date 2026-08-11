import { HiArrowUpRight } from "react-icons/hi2";
import { work } from "../../data/work.js";
import Section from "../ui/Section.jsx";
import Reveal from "../ui/Reveal.jsx";
import styles from "./Work.module.css";

function Card({ item, index }) {
	const Wrapper = item.href ? "a" : "div";
	const linkProps = item.href
		? { href: item.href, target: "_blank", rel: "noreferrer" }
		: {};

	return (
		<Reveal
			as="article"
			index={index}
			className={`${styles.card} ${item.featured ? styles.featured : ""}`}
		>
			<Wrapper className={styles.cardInner} {...linkProps}>
				<div className={styles.media}>
					{item.image ? (
						<img
							src={item.image}
							alt={`${item.name}: ${item.summary}`}
							loading="lazy"
							decoding="async"
							width="800"
							height="500"
						/>
					) : (
						/* Designed empty state rather than a broken or invented
						   screenshot. Reads as intentional. */
						<div className={styles.mediaFallback} aria-hidden="true">
							<span className={styles.fallbackMark}>{item.name.charAt(0)}</span>
							<span className={styles.fallbackName}>{item.name}</span>
						</div>
					)}
				</div>

				<div className={styles.body}>
					<div className={styles.meta}>
						<span className={styles.company}>{item.company}</span>
						<span className={styles.year}>{item.year}</span>
					</div>

					<h3 className={styles.name}>
						{item.name}
						{item.href && <HiArrowUpRight className={styles.arrow} aria-hidden="true" />}
					</h3>

					<p className={styles.summary}>{item.summary}</p>
					<p className={styles.contribution}>
						<span className={styles.contributionLabel}>What I did</span>
						{item.contribution}
					</p>

					{item.outcomes.length > 0 && (
						<ul className={styles.outcomes}>
							{item.outcomes.map((o) => (
								<li key={o}>{o}</li>
							))}
						</ul>
					)}

					<ul className={styles.stack}>
						{item.stack.map((s) => (
							<li key={s}>{s}</li>
						))}
					</ul>

					{item.href && <span className={styles.host}>{item.hrefLabel}</span>}
				</div>
			</Wrapper>
		</Reveal>
	);
}

export default function Work() {
	return (
		<Section
			id="work"
			eyebrow="Selected work"
			title="Products I've shipped and owned"
			lede="Four products across social commerce and real estate. Each one I built end to end: frontend, API and the data behind it."
		>
			<div className={styles.grid}>
				{work.map((item, i) => (
					<Card key={item.slug} item={item} index={i} />
				))}
			</div>
		</Section>
	);
}
