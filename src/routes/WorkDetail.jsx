import { Link, useParams } from "react-router-dom";
import { HiArrowLeft, HiArrowUpRight } from "react-icons/hi2";
import { getCaseStudy, caseStudies } from "../data/caseStudies.js";
import { profile } from "../data/profile.js";
import Reveal from "../components/ui/Reveal.jsx";
import useMeta from "../lib/useMeta.js";
import NotFound from "./NotFound.jsx";
import styles from "./WorkDetail.module.css";

export default function WorkDetail() {
	const { slug } = useParams();
	const item = getCaseStudy(slug);
	const cs = item?.caseStudy;

	/* Hooks must run unconditionally, so this sits above the early return. */
	useMeta({
		title: cs ? `${item.name} — ${profile.name}` : undefined,
		description: cs ? item.summary : undefined,
		path: cs ? `/work/${slug}` : "/",
	});

	/* A work item without a written case study has no page — fall through to
	   the 404 rather than rendering an empty shell. */
	if (!cs) return <NotFound />;

	const others = caseStudies.filter((w) => w.slug !== slug);

	/* Newer entries carry a `links` array; older ones a single href. */
	const links = item.links ?? (item.href ? [{ href: item.href, label: item.hrefLabel }] : []);

	return (
		<>
			<article className={styles.page}>
				{/* --- header ---------------------------------------------------- */}
				<header className={`container ${styles.head}`}>
					<Link to="/#work" className={styles.back}>
						<HiArrowLeft aria-hidden="true" />
						All work
					</Link>

					<p className={styles.eyebrow}>
						{item.company}
						<span className={styles.dot} aria-hidden="true">
							·
						</span>
						{item.year}
					</p>

					<h1 className={styles.title}>{item.name}</h1>
					<p className={styles.lede}>{cs.lede}</p>

					{/* Data-driven so a project can describe itself in its own terms —
					    the game lists Engine and Scope where a product lists Period
					    and Stack. */}
					<dl className={styles.facts}>
						{(
							cs.facts ?? [
								{ label: "Role", value: cs.role },
								{ label: "Period", value: cs.period },
								{ label: "Stack", value: item.stack.join(", ") },
							]
						).map((fact) => (
							<div key={fact.label}>
								<dt>{fact.label}</dt>
								<dd>{fact.value}</dd>
							</div>
						))}
					</dl>

					{cs.note && (
						<p className={styles.note}>
							<span className={styles.noteLabel}>{cs.note.label}</span>
							{cs.note.text}
						</p>
					)}

					{/* A product can live in more than one place — Uplist ships on
					    the web, the App Store and Google Play. */}
					{links.length > 0 && (
						<ul className={styles.visitList}>
							{links.map((link) => (
								<li key={link.href}>
									<a
										className={styles.visit}
										href={link.href}
										target="_blank"
										rel="noreferrer"
									>
										{link.label}
										<HiArrowUpRight aria-hidden="true" />
									</a>
								</li>
							))}
						</ul>
					)}
				</header>

				{/* --- hero image ------------------------------------------------ */}
				{item.image && (
					<div className={`container ${styles.heroWrap}`}>
						<img
							className={styles.hero}
							src={item.image}
							alt={`${item.name} interface`}
							/* Real dimensions per item — a hardcoded pair reserved the
							   wrong space for every hero and shifted the page on load. */
							width={item.imageSize?.[0] ?? 1400}
							height={item.imageSize?.[1] ?? 1000}
							fetchPriority="high"
							decoding="async"
						/>
					</div>
				)}

				{/* --- metrics --------------------------------------------------- */}
				{cs.metrics.length > 0 && (
					<div className="container">
						<ul className={styles.metrics}>
							{cs.metrics.map((m) => (
								<li key={m.label}>
									<span className={styles.metricValue}>{m.value}</span>
									<span className={styles.metricLabel}>{m.label}</span>
								</li>
							))}
						</ul>
					</div>
				)}

				{/* --- body ------------------------------------------------------ */}
				<div className={`container ${styles.body}`}>
					{cs.sections.map((section, i) => (
						<Reveal key={section.heading} index={i % 3} className={styles.section}>
							<h2>{section.heading}</h2>
							{section.body.map((p) => (
								<p key={p.slice(0, 40)}>{p}</p>
							))}
							{section.link && (
								<a
									className={styles.inlineLink}
									href={section.link.href}
									target="_blank"
									rel="noreferrer"
								>
									{section.link.label}
									<HiArrowUpRight aria-hidden="true" />
								</a>
							)}
						</Reveal>
					))}
				</div>

				{/* --- gallery --------------------------------------------------- */}
				{cs.gallery.length > 0 && (
					<div
						className={`container ${styles.gallery} ${
							cs.galleryLayout === "phones" ? styles.galleryPhones : ""
						}`}
					>
						{cs.gallery.map((shot, i) => (
							<Reveal as="div" key={shot.src} index={i % 2} className={styles.shot}>
								<img
									src={shot.src}
									alt={shot.alt}
									width="1400"
									height="900"
									loading="lazy"
									decoding="async"
								/>
							</Reveal>
						))}
					</div>
				)}

				{cs.credits && (
					<div className={`container ${styles.creditWrap}`}>
						<p className={styles.credits}>{cs.credits}</p>
					</div>
				)}

				{/* --- next ------------------------------------------------------ */}
				<nav className={`container ${styles.next}`} aria-label="More work">
					<h2 className={styles.nextTitle}>More work</h2>
					<ul>
						{others.map((w) => (
							<li key={w.slug}>
								<Link to={`/work/${w.slug}`} className={styles.nextLink}>
									<span className={styles.nextCompany}>{w.company}</span>
									<span className={styles.nextName}>{w.name}</span>
									<span className={styles.nextSummary}>{w.summary}</span>
									<HiArrowUpRight className={styles.nextArrow} aria-hidden="true" />
								</Link>
							</li>
						))}
					</ul>
				</nav>

				{/* --- cta ------------------------------------------------------- */}
				<div className={`container ${styles.ctaWrap}`}>
					<div className={styles.cta}>
						<h2>Building something like this?</h2>
						<p>{profile.availability}.</p>
						<Link to="/#contact" className={styles.ctaBtn}>
							Get in touch
							<HiArrowUpRight aria-hidden="true" />
						</Link>
					</div>
				</div>
			</article>
		</>
	);
}
