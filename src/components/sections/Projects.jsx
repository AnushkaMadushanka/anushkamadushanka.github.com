import { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import { HiArrowRight, HiArrowUpRight, HiPlus } from "react-icons/hi2";
import { projects } from "../../data/projects.js";
import { profile } from "../../data/profile.js";
import Section from "../ui/Section.jsx";
import Reveal from "../ui/Reveal.jsx";
import styles from "./Projects.module.css";

const INITIAL = 6;

/** Fallback for repos with no screenshot — initials over the accent wash,
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

function Card({ project, index }) {
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
				    was answering — it makes the design read as a response to a
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
								<span className="visually-hidden"> — {project.name}</span>
							</span>
							<HiArrowUpRight aria-hidden="true" />
						</a>
					)}
				</div>
			</div>
		</Reveal>
	);
}

export default function Projects() {
	const [expanded, setExpanded] = useState(false);
	const visible = expanded ? projects : projects.slice(0, INITIAL);
	const remaining = projects.length - INITIAL;

	return (
		<Section
			id="projects"
			eyebrow="Built for myself"
			title="Side projects and open source"
			lede={
				<>
					Four Unity games — two playable in the browser, three built to a game jam
					deadline — plus computer vision, WebAssembly and a scraper or two. Open
					repos link straight to the code; the two private ones have a write-up
					here, and all four games are on{" "}
					<a href={profile.links.itch} target="_blank" rel="noreferrer">
						itch.io
					</a>
					.
				</>
			}
		>
			<div className={styles.grid}>
				{visible.map((project, i) => (
					<Card key={project.name} project={project} index={i} />
				))}
			</div>

			{!expanded && remaining > 0 && (
				<div className={styles.moreWrap}>
					<button type="button" className={styles.more} onClick={() => setExpanded(true)}>
						<HiPlus aria-hidden="true" />
						Show {remaining} more {remaining === 1 ? "project" : "projects"}
					</button>
				</div>
			)}
		</Section>
	);
}
