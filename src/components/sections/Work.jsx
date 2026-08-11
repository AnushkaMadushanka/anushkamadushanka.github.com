import { Link } from "react-router-dom";
import { HiArrowRight, HiArrowUpRight } from "react-icons/hi2";
import { work } from "../../data/work.js";
import Section from "../ui/Section.jsx";
import Reveal from "../ui/Reveal.jsx";
import styles from "./Work.module.css";

function Card({ item, index }) {
	/* A product with a written case study links inward to its own page. One
	   without links straight out to the live product instead. */
	const to = item.caseStudy ? `/work/${item.slug}` : null;
	/* Without a case study, fall through to the product's own first link. */
	const outbound = item.links?.[0] ?? (item.href ? { href: item.href, label: item.hrefLabel } : null);
	const Wrapper = to ? Link : outbound ? "a" : "div";
	const wrapperProps = to
		? { to }
		: outbound
			? { href: outbound.href, target: "_blank", rel: "noreferrer" }
			: {};

	return (
		<Reveal
			as="article"
			index={index}
			className={`${styles.card} ${item.featured ? styles.featured : ""}`}
		>
			<Wrapper className={styles.cardInner} {...wrapperProps}>
				<div className={styles.media}>
					{item.cardImage || item.image ? (
						<img
							src={item.cardImage ?? item.image}
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
						{to ? (
							<HiArrowRight className={styles.arrow} aria-hidden="true" />
						) : (
							outbound && <HiArrowUpRight className={styles.arrow} aria-hidden="true" />
						)}
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

					<span className={styles.host}>
						{to ? "Read the case study" : (outbound?.label ?? null)}
					</span>
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
