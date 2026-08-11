import { lazy, Suspense, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { HiArrowDown, HiArrowUpRight, HiOutlineDocumentText } from "react-icons/hi2";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

import { profile, metrics } from "../../data/profile.js";
import useDeferredEnhancement from "../../lib/useDeferredEnhancement.js";
import styles from "./Hero.module.css";

const Avatar3D = lazy(() => import("../avatar/Avatar3D.jsx"));

/*
 * The entrance is a plain CSS keyframe sequence, staggered with a custom
 * property. Nothing above the fold waits on JavaScript, an IntersectionObserver
 * or a hydration pass to become visible — the previous build animated the
 * hero with `whileInView`, so the most important text on the site started at
 * opacity 0 and could be caught there.
 */
export default function Hero() {
	const show3D = useDeferredEnhancement();
	const [modelReady, setModelReady] = useState(false);
	const onModelReady = useCallback(() => setModelReady(true), []);

	return (
		<section className={styles.hero} aria-labelledby="hero-heading">
			<div className={styles.glow} aria-hidden="true" />

			<div className={`container ${styles.inner}`}>
				<div className={styles.copy}>
					<p className={styles.availability} style={{ "--i": 0 }}>
						<span className={styles.dot} aria-hidden="true" />
						{profile.availability}
					</p>

					<h1 id="hero-heading" className={styles.name} style={{ "--i": 1 }}>
						{profile.name}
					</h1>

					<p className={styles.role} style={{ "--i": 2 }}>
						{profile.role}
					</p>

					<p className={styles.tagline} style={{ "--i": 3 }}>
						{profile.tagline}
					</p>

					<div className={styles.actions} style={{ "--i": 4 }}>
						<Link to="/#contact" className={styles.primary}>
							Get in touch
							<HiArrowUpRight aria-hidden="true" />
						</Link>
						<a href="#work" className={styles.secondary}>
							See the work
							<HiArrowDown aria-hidden="true" />
						</a>
					</div>

					<ul className={styles.socials} style={{ "--i": 5 }}>
						<li>
							<a
								href={profile.links.github}
								target="_blank"
								rel="noreferrer"
								className={styles.iconLink}
							>
								<FaGithub aria-hidden="true" />
								<span>GitHub</span>
							</a>
						</li>
						<li>
							<a
								href={profile.links.linkedin}
								target="_blank"
								rel="noreferrer"
								className={styles.iconLink}
							>
								<FaLinkedinIn aria-hidden="true" />
								<span>LinkedIn</span>
							</a>
						</li>
						<li>
							<a
								href={profile.links.cv}
								target="_blank"
								rel="noreferrer"
								className={styles.iconLink}
							>
								<HiOutlineDocumentText aria-hidden="true" />
								<span>Résumé</span>
							</a>
						</li>
					</ul>
				</div>

				<div className={styles.portrait} style={{ "--i": 2 }}>
					<div className={styles.portraitFrame}>
						{/* The portrait supplies the whole composition — backdrop, body
						    and head — and always renders. The WebGL head registers over
						    the painted one and takes over just the head, so the image
						    stays visible underneath rather than being replaced. */}
						<img
							src="/main_new.webp"
							alt={`${profile.name}, ${profile.role}`}
							width="379"
							height="403"
							fetchPriority="high"
							className={styles.portraitImg}
						/>
						{show3D && (
							<Suspense fallback={null}>
								<Avatar3D
									className={`${styles.canvas} ${modelReady ? styles.canvasReady : ""}`}
									onReady={onModelReady}
								/>
							</Suspense>
						)}
					</div>
				</div>
			</div>

			<div className="container">
				<ul className={styles.metrics} style={{ "--i": 6 }}>
					{metrics.map((m) => (
						<li key={m.label} className={styles.metric}>
							<span className={styles.metricValue}>
								{m.prefix}
								{m.value}
								{m.suffix}
							</span>
							<span className={styles.metricLabel}>{m.label}</span>
							<span className={styles.metricDetail}>{m.detail}</span>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
