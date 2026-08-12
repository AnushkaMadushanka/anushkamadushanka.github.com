import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import { HiArrowRight, HiArrowUpRight } from "react-icons/hi2";
import Reveal from "./Reveal.jsx";
import styles from "./ProjectCard.module.css";

/** Fallback for repos with no screenshot: initials over the accent wash,
 *  which reads as deliberate rather than as a missing image. */
function Placeholder({ name }) {
	const initials = name
		.split(/\s+/)
		.slice(0, 2)
		.map((w) => w[0])
		.join("")
		.toUpperCase();
	return (
		<div className={styles.placeholder} aria-hidden="true">
			<span>{initials}</span>
		</div>
	);
}

/**
 * A single project or game card.
 *
 * Both grids on the home page use this, so a game and a tool are described in
 * the same shape and the eye can compare them. The only variation is the quiet
 * link slot: an open repo links to GitHub, a private one links to its case
 * study here. The accent slot always belongs to the thing you can go and use.
 */
export default function ProjectCard({ project, index = 0 }) {
	return (
		<Reveal as="article" index={index % 3} className={styles.card}>
			<div className={styles.media}>
				{project.image ? (
					<img
						src={project.image}
						alt={`${project.name} screenshot`}
						loading="lazy"
						decoding="async"
						width="640"
						height="400"
					/>
				) : (
					<Placeholder name={project.name} />
				)}
			</div>

			<div className={styles.body}>
				<h3 className={styles.name}>{project.name}</h3>

				{/* Named before the blurb, because the theme is the brief the game
				    was answering, which makes the design read as a response to a
				    constraint rather than an arbitrary choice. */}
				{project.jam && (
					<p className={styles.jam}>
						<a href={project.jam.href} target="_blank" rel="noreferrer">
							{project.jam.name}
						</a>
						<span className={styles.jamTheme}>
							Theme: {project.jam.theme}
							{project.jam.note && ` · ${project.jam.note}`}
						</span>
					</p>
				)}

				<p className={styles.blurb}>{project.blurb}</p>

				<ul className={styles.tags}>
					{project.tags.map((t) => (
						<li key={t}>{t}</li>
					))}
				</ul>

				<div className={styles.links}>
					{/* A private repo has no code link to give, so the card points at
					    the case study on this site instead. */}
					{project.page ? (
						<Link to={project.page} className={styles.pageLink}>
							<span>
								Read the build
								<span className="visually-hidden"> of {project.name}</span>
							</span>
							<HiArrowRight aria-hidden="true" />
						</Link>
					) : (
						<a
							href={project.repo}
							target="_blank"
							rel="noreferrer"
							className={styles.repoLink}
						>
							<FaGithub aria-hidden="true" />
							<span>
								Code<span className="visually-hidden"> for {project.name} on GitHub</span>
							</span>
						</a>
					)}
					{project.demo && (
						<a
							href={project.demo}
							target="_blank"
							rel="noreferrer"
							className={styles.demoLink}
						>
							<span>
								{project.demoLabel}
								<span className="visually-hidden">, {project.name}</span>
							</span>
							<HiArrowUpRight aria-hidden="true" />
						</a>
					)}
				</div>
			</div>
		</Reveal>
	);
}
